import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from "react-query";
type anyObject = {
  [key: string]: any;
};
export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client) client = new QueryClient({});
    return client;
  };
})();
const BASE_URL = "https://fakestoreapi.com";
export const fetcher = async ({
  method,
  path,
  body,
  params,
}: {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  body?: anyObject;
  params?: anyObject;
}) => {
  try {
    const url = `${BASE_URL}${path}`;
    const fetchOptions: RequestInit = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": BASE_URL,
      },
    };
    const res = await fetch(url, fetchOptions);
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
export const QueryKeys = {
  PRODUCT: "PRODUCTS",
};
