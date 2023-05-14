import { gql } from "graphql-request";
import { mondayClient } from "./monday-client";

const changeItemColumnValuesMutation = gql`
  mutation ChangeItemColumnValuesMutation(
    $boardId: Int!
    $itemId: Int!
    $columnValues: JSON!
  ) {
    change_multiple_column_values(
      board_id: $boardId
      item_id: $itemId
      column_values: $columnValues
      create_labels_if_missing: true
    ) {
      id
    }
  }
`;

interface ChangeItemColumnValuesArgs {
  boardId: string | number;
  itemId: string | number;
  columnValues: Record<string, any>;
}

export const changeItemColumnValues = ({
  boardId,
  itemId,
  columnValues,
}: ChangeItemColumnValuesArgs) => {
  const columnValuesVariable = JSON.stringify(columnValues);

  return mondayClient.request<{
    change_multiple_column_values: { id: string }[];
  }>(changeItemColumnValuesMutation, {
    boardId: Number(boardId),
    itemId: Number(itemId),
    columnValues: columnValuesVariable,
  });
};
