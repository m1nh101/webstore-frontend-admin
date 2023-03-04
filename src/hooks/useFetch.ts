import { useEffect, useState } from "react";
import makeRequest, { APIResponse } from "../api/apiFactory";

const useFetch = <TDataResponse>(url: string): TDataResponse => {
  const [data, setData] = useState<TDataResponse>();
  const method = "GET";

  useEffect(() => {
      const fetch = async (): Promise<void> => {
        const response = await makeRequest<TDataResponse>({url, method}) as APIResponse<TDataResponse>

        if(response.statusCode == 200){
          setData(response.data)
        }
      };
      fetch();
  }, [url]);

  return data as TDataResponse;
}

export default useFetch;