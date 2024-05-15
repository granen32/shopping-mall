import request, { RequestDocument } from "graphql-request";
import { QueryClient } from "react-query";
type anyObject = {
  [key: string]: any;
};
export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    return client;
  };
})();
const BASE_URL = "https://fakestoreapi.com";
export const restfetcher = async ({
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
    let url = `${BASE_URL}${path}`;
    const fetchOptions: RequestInit = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": BASE_URL,
      },
    };
    if (params) {
      const searchParams = new URLSearchParams(params);
      url += "?" + searchParams.toString();
    }
    if (body) fetchOptions.body = JSON.stringify(body);
    const res = await fetch(url, fetchOptions);
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
export const graphqlfetcher = (query: RequestDocument, variables = {}) =>
  request(BASE_URL, query, variables);
export const QueryKeys = {
  PRODUCTS: "PRODUCTS",
};
