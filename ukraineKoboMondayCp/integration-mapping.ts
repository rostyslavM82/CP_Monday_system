import { IntegrationMappingItem, KoboQuestionTypes, MondayColumnTypes } from "./types";

export const integrationMapping: IntegrationMappingItem[] = [
    {
      kobo: {
        questionType: KoboQuestionTypes.TEXT,
        questionId: "_submission_time",
      },
      monday: {
        columnType: MondayColumnTypes.TEXT,
        columnId: "text19",
      },
    }
]