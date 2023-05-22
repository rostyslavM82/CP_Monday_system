import { IntegrationMappingItem, KoboQuestionTypes, MondayColumnTypes } from "./types";

export const integrationMapping: IntegrationMappingItem[] = [
    {
      kobo: {
        questionType: KoboQuestionTypes.TEXT,
        questionId: "__010",
      },
      monday: {
        columnType: MondayColumnTypes.TEXT,
        columnId: "text5-check-changes",
      },
    }
]