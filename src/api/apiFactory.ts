const RootURL: string = '';

type APIMethod = "GET" | "POST" | "PATCH" | "DELETE";

export type APIResponse<TDataResponse> = {
  httpStatusCode: number,
  data: TDataResponse,
  errors?: string | {} | []
}

export type APIRequest = {
  url: string
  method: APIMethod,
  body?: string | FormData | undefined,
  contentType?: string | undefined
}

const toUrl = (subUrl: string): string => {
  let path = subUrl;

  if(subUrl[0] == '/')
    path = '' + subUrl.substring(1);

  return `${RootURL}/${path}`
}

const makeRequest = async <TDataResponse>(request: APIRequest): Promise<APIResponse<TDataResponse>> => {
  const url = toUrl(request.url);

  const response = await fetch(url, {
    headers: {
      'ContentType': 'application/json'
    },
    method: request.method,
    body: request.body,
    credentials: 'include'
  });

  return await response.json() as APIResponse<TDataResponse>;
}

export default makeRequest;