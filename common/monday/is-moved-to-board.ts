import { MondayItemUpdatedEvent } from "./types";
import {
  boardIdMovedStatusMapping,
  ITEM_UPDATED_EVENT_TYPE,
} from "./constants";

export const isMovedToBoard = (
  event: MondayItemUpdatedEvent,
  boardId: string
) => {
  if (
    event.type === ITEM_UPDATED_EVENT_TYPE &&
    Number(event.boardId) === Number(boardId) &&
    event.value.label.text === boardIdMovedStatusMapping[boardId]
  ) {
    return true;
  }

  return false;
};
