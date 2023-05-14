export type KoboFormDataStructureResponse = {
    content: {
      choices: { list_name: string; name: string; label: string[] }[];
    };
  };

  export type KoboSubmissionEndpointResponse = {
    count: 1;
    next: null;
    previous: null;
    results: Record<string, any>[];
  };
  
  export type NewlyCreatedItemInfo = {
    koboSubmissionId: string;
    mondayItemId: string;
    mondayItemName: string;
    columnValues: string;
  };

  export type CreationErrorInfo = {
    koboSubmissionId?: string;
    columnValues?: string;
    unexpectedError?: string;
    catchKey?: string;
  };

  export enum KoboQuestionTypes {
    TEXT = "text",
    INTEGER = "integer",
    SELECT_ONE = "select_one",
    SELECT_MULTIPLE = "select_multiple",
    CALCULATE = "calculate",
    REPEAT = "repeat",
    DATE = "date",
  }
  

  export enum MondayColumnTypes {
    TEXT = "text",
    LONG_TEXT = "long_text",
    DROPDOWN = "dropdown",
    NUMBERS = "numbers",
    STATUS = "status",
    DATE = "date",
    PHONE = "phone",
    EMAIL = "email",
    COUNTRY = "country",
  }

  export type OptionMappingItem = {
    koboValue: string;
    mondayValue: string;
  };

  export type IntegrationMappingItem = {
    kobo: {
      questionType: KoboQuestionTypes;
      questionId: string;
      optionsListId?: string;
      repeatId?: string;
      labelIndex?: number;
      transformValueToIsAdultBoolean?: boolean;
      splitRepeat?: boolean;
      repeatIndex?: number;
    };
    monday: {
      columnType: MondayColumnTypes;
      columnId: string;
    };
    optionMapping?: OptionMappingItem[];
  };

  export type AlreadyExistingRowInMondayInfo = { koboSubmissionId: string };

  export type MondayResponseItem = { id: string; name: string } | null;