import { QueryKeys } from "@/queryClient";
import { graphql, HttpResponse } from "msw";

export const handlers = [
  graphql.query(QueryKeys.PRODUCT, () => {
    return HttpResponse.json({ data: { user: { name: "John" } } });
  }),
];
