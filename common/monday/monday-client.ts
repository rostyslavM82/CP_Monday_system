import { GraphQLClient } from "graphql-request";

export const mondayClient = new GraphQLClient("https://api.monday.com/v2", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.MONDAY_API_TOKEN}`,
    "Content-Type": "application/json",
  },
});
