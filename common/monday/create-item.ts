import { gql } from "graphql-request";
import { mondayClient } from "./monday-client";

const createItemMutation = gql`
  mutation createItemMutation(
    $boardId: Int!
    $itemName: String!
    $columnValues: JSON!
  ) {
    create_item(
      board_id: $boardId
      item_name: $itemName
      column_values: $columnValues
      create_labels_if_missing: true
    ) {
      id
      name
    }
  }
`;

interface CreateItemArgs {
  boardId: string | number;
  itemName: string | number;
  columnValues: string | Record<string, any>;
}

export const createItem = async ({
  boardId,
  itemName,
  columnValues,
}: CreateItemArgs) => {
  const columnValuesVariable =
    typeof columnValues === "string"
      ? columnValues
      : JSON.stringify(columnValues);

  const result = await mondayClient.request<{
    create_item: { id: string; name: string };
  } | null>(createItemMutation, {
    boardId: Number(boardId),
    itemName: String(itemName),
    columnValues: columnValuesVariable,
  });

  return result?.create_item;
};
