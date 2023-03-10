type HTTPMethod = "GET" | "POST" | "PATCH" | "DELETE";
type HTTPBody = string | FormData | undefined
type HTTPResponse<TData> = {
  data?: TData | undefined
  errors: string | {} | []
}
// chain method
export type HTTPStatus = "Completed" | "AuthenticatedFailure" | 'NoContent';

export type HTTPPayload = {
  method: HTTPMethod
  endpoint: string,
  body: HTTPBody
}

interface Middleware {
  setNext: (handler: Middleware) => Middleware
  handle: (res: Response) => HTTPStatus | Promise<HTTPStatus>
}

abstract class BaseMiddleware implements Middleware {
  private _next: Middleware | undefined;

  public setNext(handler: Middleware): Middleware {
    this._next = handler;
    return this._next;
  }

  public async handle(res: Response): Promise<HTTPStatus> {
    if (this._next)
      return this._next.handle(res)

    return 'Completed';
  }
}

class AuthMiddleware extends BaseMiddleware {
  public async handle(res: Response): Promise<HTTPStatus> {
    if (res.status >= 400)
      return 'AuthenticatedFailure'

    return super.handle(res);
  }
}

class ProcessResponseMiddleware extends BaseMiddleware {
  private readonly _callback?: (data: any) => void

  /**
   *
   */
  constructor(callback?: (data: any) => void) {
    super();
    this._callback = callback;
  }

  public async handle(res: Response): Promise<HTTPStatus> {
    if (this._callback) {

      if (res.status === 200) {
        const responseBody = await res.json() as HTTPResponse<unknown>;
        this._callback(responseBody.data);
      } else {
        this._callback(null);
      }

      return 'Completed'
    }

    return 'NoContent'
  }
}

export class APIFactory {
  private readonly _root: string = 'https://localhost:7237/api/'
  private _endpoint: string
  private _method: HTTPMethod
  private _body: HTTPBody;
  private _header = {
    'Content-Type': 'application/json'
  };

  constructor(endpoint: string, method: HTTPMethod = 'GET') {
    this._endpoint = endpoint;
    this._method = method;
  }

  public withPayload(payload: HTTPBody): APIFactory {
    this._body = payload;
    return this;
  }

  public async process<TData>(callback?: (response: TData) => void): Promise<HTTPStatus> {
    const url = `${this._root}${this._endpoint}`;

    const response = await fetch(url, {
      method: this._method,
      headers: this._header,
      body: this._body,
      credentials: 'include',
      mode: 'cors'
    });

    const auth = new AuthMiddleware();
    const process = new ProcessResponseMiddleware(callback);

    const pipeline = auth.setNext(process);

    return await pipeline.handle(response);
  }

}