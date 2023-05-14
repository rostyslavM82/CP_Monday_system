import { gql } from "graphql-request";
import { GetByColumnValueMondayItem } from "./types";
import { mondayClient } from "./monday-client";

const itemsByColumnValuesQuery = gql`
  query GetItemsByColumnValuesQuery(
    $boardId: Int!
    $columnId: String!
    $columnValue: String!
  ) {
    items_by_column_values(
      board_id: $boardId
      column_id: $columnId
      column_value: $columnValue
    ) {
      id
      name
      state
      board {
        id
        name
      }
    }
  }
`;

interface GetItemsByColumnValuesArgs {
  boardId: string | number;
  columnId: string | number;
  columnValue: string;
}

export const getItemsByColumnValues = async ({
  boardId,
  columnId,
  columnValue,
}: GetItemsByColumnValuesArgs) => {
  const result = mondayClient.request<{
    items_by_column_values: GetByColumnValueMondayItem[];
  }>(itemsByColumnValuesQuery, {
    boardId: Number(boardId),
    columnId: columnId,
    columnValue: String(columnValue),
  });

  return (await result).items_by_column_values;
};
