import { gql } from "graphql-request";
import { GetByColumnValueMondayItem } from "./types";
import { mondayClient } from "./monday-client";

const itemsByMultipleColumnValuesQuery = gql`
  query GetItemsByMultipleColumnValuesQuery(
    $boardId: Int!
    $columnId: String!
    $columnValues: [String]!
  ) {
    items_by_multiple_column_values(
      board_id: $boardId
      column_id: $columnId
      column_values: $columnValues
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

interface GetItemsByMultipleColumnValuesArgs {
  boardId: string | number;
  columnId: string | number;
  columnValues: string[];
}

export const getItemsByMultipleColumnValues = async ({
  boardId,
  columnId,
  columnValues,
}: GetItemsByMultipleColumnValuesArgs) => {
  const result = mondayClient.request<{
    items_by_multiple_column_values: GetByColumnValueMondayItem[];
  }>(itemsByMultipleColumnValuesQuery, {
    boardId: Number(boardId),
    columnId: columnId,
    columnValues: columnValues,
  });

  return (await result).items_by_multiple_column_values;
};
