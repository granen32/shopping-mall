import { graphql, HttpResponse } from "msw";

export const handlers = [
  graphql.query("GetUser", () => {
    return HttpResponse.json({ data: { user: { name: "John" } } });
  }),
];
