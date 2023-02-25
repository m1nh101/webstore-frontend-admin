import { useEffect, useState } from "react";
import makeRequest from "../api/apiFactory";

const useFetch = <TDataResponse>(url: string): TDataResponse => {
  const [data, setData] = useState<TDataResponse>();
  const method = "GET";

  useEffect(() => {
      const fetch = async (): Promise<void> => {
        const response = await makeRequest<TDataResponse>({url, method})

        if(response.httpStatusCode == 200){
          setData(response.data)
        }
      };
      fetch();
  }, [url]);

  return data as TDataResponse;
}

export default useFetch;