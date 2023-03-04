const RootURL: string = 'https://localhost:7237/api';

type APIMethod = "GET" | "POST" | "PATCH" | "DELETE";

export type APIResponse<TDataResponse> = {
  statusCode: number,
  data?: TDataResponse,
  errors?: string | {} | []
}

export type APIRequest = {
  url: string
  method: APIMethod,
  body?: string | FormData | undefined,
  contentType?: string | undefined
}

export type APIResponseWithOutData = "Succeed" | "Failed";

const toUrl = (subUrl: string): string => {
  let path = subUrl;

  if(subUrl[0] === '/')
    path = subUrl.substring(1);

  return `${RootURL}/${path}`
}

const makeRequest = async <TDataResponse>(request: APIRequest)
  : Promise<APIResponse<TDataResponse> | APIResponseWithOutData> => {
  const url = toUrl(request.url);

  const response = await fetch(url, {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: request.method,
    body: request.body,
    credentials: 'include',
    mode: 'cors'
  });

  if(response.status === 204) return "Succeed";

  return await response.json() as APIResponse<TDataResponse>;
}

export default makeRequest;