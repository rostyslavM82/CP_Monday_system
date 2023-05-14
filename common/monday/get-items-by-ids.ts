import { gql } from "graphql-request";
import { GetByIdMondayItem } from "./types";
import { mondayClient } from "./monday-client";

const itemsByIdsQuery = gql`
  query GetItemsByIdsQuery($ids: [Int]!, $newestFirst: Boolean!) {
    items(ids: $ids, newest_first: $newestFirst) {
      id
      name
      state
      board {
        id
      }
      column_values {
        id
        type
        value
        text
      }
    }
  }
`;

interface GetItemsByIdsArgs {
  ids: (string | number)[];
  state?: string;
}

export const getItemsByIds = async ({
  ids,
  state = "active",
}: GetItemsByIdsArgs) => {
  const results = await mondayClient.request<{ items: GetByIdMondayItem[] }>(
    itemsByIdsQuery,
    {
      ids: ids.map((id) => Number(id)),
      newestFirst: true,
    }
  );

  return results.items.filter((result) => result.state === state);
};
