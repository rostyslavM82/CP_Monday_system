import { IntegrationMappingItem, KoboQuestionTypes, MondayColumnTypes } from "./types";

export const integrationMapping: IntegrationMappingItem[] = [
    {
      kobo: {
        questionType: KoboQuestionTypes.TEXT,
        questionId: "calculation_id",
      },
      monday: {
        columnType: MondayColumnTypes.TEXT,
        columnId: "text_1",
      },
    },
]