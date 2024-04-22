import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from "react-query";
export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client) client = new QueryClient({});
    return client;
  };
})();
