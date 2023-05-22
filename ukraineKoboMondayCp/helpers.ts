import { instanceToPlain } from "class-transformer";
import { IntegrationMappingItem, KoboFormDataStructureResponse, KoboQuestionTypes, KoboSubmissionEndpointResponse, MondayColumnTypes } from "./types";
import axios from "axios";

export const CATCH_ALL_VALUE = "_CATCH_ALL_";

export const markKoboSubmissionAsProcessed = (
  koboSubmissionId: string | number
) => {
 
  return axios.patch(
    `https://kobo.humanitarianresponse.info/api/v2/assets/aBpuiweoRoxeT5Vp42SEf9/data/${koboSubmissionId}/validation_status/`,
    {
      "validation_status.uid": "validation_status_not_approved",
    },
    {
      headers: { Authorization: `Token ${process.env.KOBO_API_TOKEN}` },
    }
  );
};

export const getMondayMutationColumnValuesArgument = ({
  koboSubmission,
  integrationMapping,
  koboFormChoices,
}: {
  koboSubmission: Record<string, any>;
  integrationMapping: IntegrationMappingItem[];
  koboFormChoices: KoboFormDataStructureResponse["content"]["choices"];
}) => {
  const mondayMutationColumnValuesArgument = {};

  for (const mappingItem of integrationMapping) {
    const currentKoboAnswer = koboSubmission[mappingItem.kobo.questionId];

    if (currentKoboAnswer === undefined) {
      continue;
    }

    let valueToBeIntroducedInMonday: string | Record<string, any> | string[] =
      "";

    const optionMappingCatchAllValue = mappingItem.optionMapping
      ? mappingItem.optionMapping.find((om) => om.koboValue === CATCH_ALL_VALUE)
          ?.mondayValue || ""
      : "";

    // KOBO TYPE ADJUSTMENTS ---- START
    if (
      [
        KoboQuestionTypes.TEXT,
        KoboQuestionTypes.INTEGER,
        KoboQuestionTypes.DATE,
        KoboQuestionTypes.CALCULATE,
        KoboQuestionTypes.SELECT_ONE,
        KoboQuestionTypes.DATE,
      ].includes(mappingItem.kobo.questionType)
    ) {
      valueToBeIntroducedInMonday = currentKoboAnswer as string;
    }

    if (
      mappingItem.kobo.questionType === KoboQuestionTypes.REPEAT &&
      mappingItem.kobo.repeatId
    ) {
      if (mappingItem.kobo.splitRepeat) {
        valueToBeIntroducedInMonday =
          currentKoboAnswer.map(
            (answerObj: any) =>
              answerObj[
                `${mappingItem.kobo.questionId}/${mappingItem.kobo.repeatId}`
              ]
          )?.[mappingItem.kobo.repeatIndex || 0] || "";
      }

      if (!mappingItem.kobo.splitRepeat) {
        valueToBeIntroducedInMonday = currentKoboAnswer
          .map(
            (answerObj: any) =>
              answerObj[
                `${mappingItem.kobo.questionId}/${mappingItem.kobo.repeatId}`
              ]
          )
          .join(", ");
      }
    }

    if (
      mappingItem.kobo.questionType === KoboQuestionTypes.SELECT_MULTIPLE &&
      mappingItem.optionMapping
    ) {
      valueToBeIntroducedInMonday = currentKoboAnswer
        .split(" ")
        .map(
          (koboOption: string) =>
            mappingItem.optionMapping.find(
              (oi) => oi.koboValue === koboOption.trim()
            )?.mondayValue || optionMappingCatchAllValue
        )
        .filter(Boolean);
    }

    if (
      mappingItem.kobo.questionType === KoboQuestionTypes.SELECT_MULTIPLE &&
      mappingItem.kobo.optionsListId
    ) {
      valueToBeIntroducedInMonday = currentKoboAnswer
        .split(" ")
        .map((selectedOption: string) => {
          return (
            koboFormChoices.find(
              (choice) =>
                choice.list_name === mappingItem.kobo.optionsListId &&
                choice.name === selectedOption
            )?.label?.[0] ||
            selectedOption ||
            ""
          );
        });
    }

    if (
      mappingItem.kobo.questionType === KoboQuestionTypes.SELECT_MULTIPLE &&
      !mappingItem.optionMapping &&
      !mappingItem.kobo.optionsListId
    ) {
      valueToBeIntroducedInMonday = currentKoboAnswer
        .split(" ")
        .filter(Boolean);
    }

    if (
      ![KoboQuestionTypes.REPEAT, KoboQuestionTypes.SELECT_MULTIPLE].includes(
        mappingItem.kobo.questionType
      ) &&
      mappingItem.optionMapping
    ) {
      valueToBeIntroducedInMonday =
        mappingItem.optionMapping.find(
          (om) => om.koboValue === valueToBeIntroducedInMonday
        )?.mondayValue || optionMappingCatchAllValue;
    }

    if (
      ![KoboQuestionTypes.REPEAT, KoboQuestionTypes.SELECT_MULTIPLE].includes(
        mappingItem.kobo.questionType
      ) &&
      mappingItem.kobo.optionsListId
    ) {
      valueToBeIntroducedInMonday =
        koboFormChoices.find(
          (choice) =>
            choice.list_name === mappingItem.kobo.optionsListId &&
            choice.name === currentKoboAnswer
        )?.label?.[mappingItem.kobo.labelIndex || 0] || "";
    }

    // KOBO TYPE ADJUSTMENTS ---- END

    // MONDAY.COM TYPE ADJUSTMENTS ---- START
    if (mappingItem.monday.columnType === MondayColumnTypes.DATE) {
      if (valueToBeIntroducedInMonday) {
        valueToBeIntroducedInMonday = { date: valueToBeIntroducedInMonday };
      }

      if (!valueToBeIntroducedInMonday) {
        valueToBeIntroducedInMonday = {};
      }
    }

    if (mappingItem.monday.columnType === MondayColumnTypes.COUNTRY) {
      if (
        typeof valueToBeIntroducedInMonday === "string" &&
        valueToBeIntroducedInMonday.toUpperCase() === "UA"
      ) {
        valueToBeIntroducedInMonday = {
          countryCode: "UA",
          countryName: "Ukraine",
        };
      }

      if (
        typeof valueToBeIntroducedInMonday === "string" &&
        valueToBeIntroducedInMonday.toUpperCase() === "PL"
      ) {
        valueToBeIntroducedInMonday = {
          countryCode: "PL",
          countryName: "Poland",
        };
      }

      if (
        typeof valueToBeIntroducedInMonday === "string" &&
        valueToBeIntroducedInMonday.toUpperCase() === "RO"
      ) {
        valueToBeIntroducedInMonday = {
          countryCode: "RO",
          countryName: "Romania",
        };
      }

      if (!valueToBeIntroducedInMonday) {
        valueToBeIntroducedInMonday = {};
      }
    }

    if (mappingItem.monday.columnType === MondayColumnTypes.PHONE) {
      if (valueToBeIntroducedInMonday) {
        valueToBeIntroducedInMonday = { phone: valueToBeIntroducedInMonday };
      }

      if (!valueToBeIntroducedInMonday) {
        valueToBeIntroducedInMonday = { phone: "" };
      }
    }

    if (mappingItem.monday.columnType === MondayColumnTypes.EMAIL) {
      if (valueToBeIntroducedInMonday) {
        valueToBeIntroducedInMonday = {
          email: valueToBeIntroducedInMonday,
          text: valueToBeIntroducedInMonday,
        };
      }

      if (!valueToBeIntroducedInMonday) {
        valueToBeIntroducedInMonday = { email: "", text: "" };
      }
    }

    if (mappingItem.monday.columnType === MondayColumnTypes.LONG_TEXT) {
      if (valueToBeIntroducedInMonday) {
        valueToBeIntroducedInMonday = { text: valueToBeIntroducedInMonday };
      }

      if (!valueToBeIntroducedInMonday) {
        valueToBeIntroducedInMonday = "";
      }
    }

    if (mappingItem.monday.columnType === MondayColumnTypes.STATUS) {
      if (valueToBeIntroducedInMonday) {
        valueToBeIntroducedInMonday = { label: valueToBeIntroducedInMonday };
      }

      if (!valueToBeIntroducedInMonday) {
        valueToBeIntroducedInMonday = { label: "" };
      }
    }

    if (mappingItem.monday.columnType === MondayColumnTypes.DROPDOWN) {
      if (typeof valueToBeIntroducedInMonday === "string") {
        valueToBeIntroducedInMonday = { labels: [valueToBeIntroducedInMonday] };
      }

      if (Array.isArray(valueToBeIntroducedInMonday)) {
        valueToBeIntroducedInMonday = { labels: valueToBeIntroducedInMonday };
      }
    }

    mondayMutationColumnValuesArgument[mappingItem.monday.columnId] =
      valueToBeIntroducedInMonday;
  }

  mondayMutationColumnValuesArgument["kobo_id"] = String(koboSubmission._id);

  return mondayMutationColumnValuesArgument;
};


export const safeJsonStringify = (data: any) => {
    try {
      return JSON.stringify(data);
    } catch (_) {
      return "Error at JSON.stringifying circular structure";
    }
  };
  
  export const errorToString = (error: any) => {
    try {
      if (!error) {
        return "";
      }
  
      if (typeof error === "string") {
        return error;
      }
  
      if (
        typeof error === "object" &&
        error.message &&
        typeof error.message === "string"
      ) {
        return error.message;
      }
  
      // Test this out with other class instanced other than new Error()
      if (safeJsonStringify(error) !== "{}") {
        return safeJsonStringify(error);
      }
  
      if (typeof error === "object") {
        try {
          const errorObj = instanceToPlain(error);
  
          return JSON.stringify(errorObj);
        } catch {
          return `JSON.stringify failed: ${error}`;
        }
      }
  
      return "Could not get the error in string format";
    } catch (error) {
      console.log({ origin: "getErrorString", error });
      return "Could not get the error in string format due to an error";
    }
  };

  export const isKoboSubmissionAddedToMonday = (
    koboSubmission: KoboSubmissionEndpointResponse["results"]["0"]
  ) => !!koboSubmission?.["_validation_status"]?.uid;
  