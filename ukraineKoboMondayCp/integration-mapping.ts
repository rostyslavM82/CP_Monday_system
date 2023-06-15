import { IntegrationMappingItem, KoboQuestionTypes, MondayColumnTypes } from "./types";

export const integrationMapping: IntegrationMappingItem[] = [
    {
      kobo: {
        questionType: KoboQuestionTypes.TEXT,
        questionId: "_id",
      },
      monday: {
        columnType: MondayColumnTypes.TEXT,
        columnId: "text_1",
      },
    },
]