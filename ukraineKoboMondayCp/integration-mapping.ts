import { CATCH_ALL_VALUE } from "./helpers";
import {
  IntegrationMappingItem,
  KoboQuestionTypes,
  MondayColumnTypes,
} from "./types";

export const integrationMapping: IntegrationMappingItem[] = [
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "_id",
    },
    monday: {
      columnType: MondayColumnTypes.NUMBERS,
      columnId: "numbers",
    },
  },
  //oblast
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_ONE,
      questionId: "__005",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text",
    },
  },
  //Raion
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "__006",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text_14",
    },
  },
  //Populated Area
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "__007",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text_11",
    },
  },
  //Hromada
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "__008",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text_18",
    },
  },
  //Location (Institution)
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "__009",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text_19",
    },
  },
  //Registration Date
  {
    kobo: {
      questionType: KoboQuestionTypes.DATE,
      questionId: "__010",
    },
    monday: {
      columnType: MondayColumnTypes.DATE,
      columnId: "date1",
    },
  },
  //Name and Surname of the child
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "__011",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text1",
    },
  },
  //Gender
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_ONE,
      questionId: "__012",
    },
    monday: {
      columnType: MondayColumnTypes.STATUS,
      columnId: "status5",
    },
    optionMapping: [
      { koboValue: "_", mondayValue: "Boy" },
      { koboValue: "__1", mondayValue: "Girl" },
      { koboValue: "__2", mondayValue: "Other" },
      { koboValue: CATCH_ALL_VALUE, mondayValue: "Unknown" },
    ],
  },
  //Gender
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_ONE,
      questionId: "__012",
    },
    monday: {
      columnType: MondayColumnTypes.STATUS,
      columnId: "status5",
    },
    optionMapping: [
      { koboValue: "_", mondayValue: "Boy" },
      { koboValue: "__1", mondayValue: "Girl" },
      { koboValue: "__2", mondayValue: "Other" },
      { koboValue: CATCH_ALL_VALUE, mondayValue: "Unknown" },
    ],
  },
  //Gender
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_ONE,
      questionId: "__012",
    },
    monday: {
      columnType: MondayColumnTypes.STATUS,
      columnId: "status5",
    },
    optionMapping: [
      { koboValue: "_", mondayValue: "Boy" },
      { koboValue: "__1", mondayValue: "Girl" },
      { koboValue: "__2", mondayValue: "Other" },
      { koboValue: CATCH_ALL_VALUE, mondayValue: "Unknown" },
    ],
  },
  //Age
  {
    kobo: {
      questionType: KoboQuestionTypes.INTEGER,
      questionId: "__013",
    },
    monday: {
      columnType: MondayColumnTypes.NUMBERS,
      columnId: "numbers3",
    },
  },
  //Birth date
  {
    kobo: {
      questionType: KoboQuestionTypes.DATE,
      questionId: "__014",
    },
    monday: {
      columnType: MondayColumnTypes.DATE,
      columnId: "date_1",
    },
  },
  //IDP status
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_ONE,
      questionId: "__015",
    },
    monday: {
      columnType: MondayColumnTypes.STATUS,
      columnId: "status3",
    },
    optionMapping: [
      { koboValue: "_", mondayValue: "Yes" },
      { koboValue: "__1", mondayValue: "No" },
      { koboValue: CATCH_ALL_VALUE, mondayValue: "Unknown" },
    ],
  },
];
