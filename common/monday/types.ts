import { ITEM_CREATED_EVENT_TYPE, ITEM_UPDATED_EVENT_TYPE } from "./constants";

export interface _MondayItemCreatedEvent {
    userId: number;
    boardId: number;
    pulseId: number; // This is the item_id
    pulseName: string;
    groupId: string;
    groupName: string;
    groupColor: string;
    isTopGroup: boolean;
    columnValues: Record<string, any>;
    app: string;
    type: typeof ITEM_CREATED_EVENT_TYPE;
    triggerTime: string; // Format: '2022-12-05T06:27:37.157Z';
    subscriptionId: number;
    triggerUuid: string;
    originalTriggerUuid: string;
  }
  
  export interface MondayItemUpdatedEvent {
    userId: number;
    boardId: number;
    pulseId: number; // This is the item_id
    pulseName: string;
    groupId: string;
    groupName: string;
    columnId: string;
    groupColor: string;
    isTopGroup: boolean;
    columnType: string; // status is 'color'
    columnTitle: string;
    value: any; // For status it's { label: { text: "Something" }, post_id: null }
    previousValue: any; // null no previous value was found
    app: string;
    type: typeof ITEM_UPDATED_EVENT_TYPE;
    triggerTime: string; // Format: '2022-12-05T06:27:37.157Z';
    changedAt: number; // Format: 1670247055.3137503
    subscriptionId: number;
    triggerUuid: string;
    originalTriggerUuid: string;
  }
  
  export interface MondayColumnValue {
    id: string;
    text: string;
    value: string;
    type: string;
  }
  
  export interface GetByColumnValueMondayItem {
    id: number;
    name: string;
    state: "active" | "archived" | "deleted";
    board: {
      id: number;
      name: string;
    };
  }
  
  export interface GetByIdMondayItem {
    id: number;
    name: string;
    state: "active" | "archived" | "deleted";
    board: {
      id: number;
      name: string;
    };
    column_values: MondayColumnValue[];
  }