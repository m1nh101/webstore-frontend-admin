import { useEffect, useState } from "react";
import makeRequest, { APIRequest } from "../api/apiFactory";

const usePush = <TDataResponse>(request: APIRequest) => {
  const [data, setData] = useState<TDataResponse>();
  const [errors, setErrors] = useState<string | [] | {} | undefined>('');

  useEffect(() => {
    const fetch = async (): Promise<void> => {
      const response = await makeRequest<TDataResponse>(request);

      if (response.httpStatusCode == 200) {
        setData(response.data)
      }

      if(response.httpStatusCode >= 300) {
        setErrors(response.errors)
      }
    };
    fetch();
  }, [request]);

  return { data, errors };
}

export default usePush;