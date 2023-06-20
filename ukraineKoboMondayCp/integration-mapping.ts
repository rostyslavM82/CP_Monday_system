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
      questionId: "select_one_vr14o91",
      optionsListId: "ab1op10",
      labelIndex: 1,
    },
    monday: {
      columnType: MondayColumnTypes.DROPDOWN,
      columnId: "dropdown9",
    },
  },
  //Raion
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "text_np01u25",
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
      questionId: "text_ow7gc00",
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
      questionId: "text_ax47v18",
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
      questionId: "text_dh8or18",
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
      questionId: "date_cw96v02",
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
      questionId: "text_dm3ab67",
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
      questionId: "select_one_li8yh67",
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
      questionId: "integer_zg4ez12",
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
      questionId: "date_gc9zu20",
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
      questionId: "select_one_ea5en26",
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
  //Сhild studies at
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_ONE,
      questionId: "study_where",
    },
    monday: {
      columnType: MondayColumnTypes.STATUS,
      columnId: "status93",
    },
    optionMapping: [
      { koboValue: "school", mondayValue: "School" },
      { koboValue: "__1", mondayValue: "Kindergarten" },
      { koboValue: "__2", mondayValue: "Other" },
      { koboValue: CATCH_ALL_VALUE, mondayValue: "Unknown" },
    ],
  },
  //Grade the child study in
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "text_uz7rb80",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text_113",
    },
  },
  //Name of the educational institution
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "text_vk9ii27",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text_181",
    },
  },
  //Kindergarten group the child study in
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "text_xv5av08",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text_12",
    },
  },
  //Name of the educational institution
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "text_ww9zs96",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text_121",
    },
  },
  //Other place name
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "text_ff4ne73",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text_13",
    },
  },
  //Name and Surname of parents or trustees
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "text_nz4az46",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text33",
    },
  },
  //Contact phone number of parents/guardians
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "_380",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text13",
    },
  },
  //Name of the siblings who attend the Community Center "Child, Youth and Family Friendly Space"
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "text_is04h24",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text7",
    },
  },
  //Name and surname in case of trust person in emergency if parents/guardians are not available
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "text_gy6wm81",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text_15",
    },
  },
  //Contact phone number if trust person in case of emergency if parents/guardians are not available
  {
    kobo: {
      questionType: KoboQuestionTypes.INTEGER,
      questionId: "_380_001",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text79",
    },
  },
  //Does the child have a disability?
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_ONE,
      questionId: "select_one_zj0uk45",
    },
    monday: {
      columnType: MondayColumnTypes.STATUS,
      columnId: "status9",
    },
    optionMapping: [
      { koboValue: "_", mondayValue: "No" },
      { koboValue: "__1", mondayValue: "Yes" },
      { koboValue: CATCH_ALL_VALUE, mondayValue: "Unknown" },
    ],
  },
  //Does the child have any special needs/medical conditions that need to be known to the specialists during the activities?
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_ONE,
      questionId: "_1",
    },
    monday: {
      columnType: MondayColumnTypes.STATUS,
      columnId: "status8",
    },
    optionMapping: [
      { koboValue: "_", mondayValue: "No" },
      { koboValue: "__1", mondayValue: "Yes" },
      { koboValue: CATCH_ALL_VALUE, mondayValue: "Unknown" },
    ],
  },
  //Indicate any special needs/medical conditions that the specialists need to know during the event
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "__001",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text_184",
    },
  },
  //Special needs/medical conditions arise before or after the outbreak of hostilities?
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_ONE,
      questionId: "select_one_ob8ml91",
    },
    monday: {
      columnType: MondayColumnTypes.STATUS,
      columnId: "status0",
    },
    optionMapping: [
      { koboValue: "_", mondayValue: "Before" },
      { koboValue: "__1", mondayValue: "After" },
      { koboValue: CATCH_ALL_VALUE, mondayValue: "Unknown" },
    ],
  },
  //Programs in which the child will participate, by choosing a program you give the consent of the parents/guardians to the child's participation in the programs
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_MULTIPLE,
      questionId: "__003",
    },
    monday: {
      columnType: MondayColumnTypes.DROPDOWN,
      columnId: "dropdown",
    },
  },
  //The event has been initiated:
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_ONE,
      questionId: "__004",
    },
    monday: {
      columnType: MondayColumnTypes.STATUS,
      columnId: "status2",
    },
    optionMapping: [
      { koboValue: "sci", mondayValue: "SCI" },
      { koboValue: "__", mondayValue: "Partner" },
      { koboValue: CATCH_ALL_VALUE, mondayValue: "Unknown" },
    ],
  },
  //Partner's name
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "text_tm2mm82",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text95",
    },
  },
  //Activity's name
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "text_tr1gn52",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text6",
    },
  },
  //Name of the SCI specialist
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "text_pb8ly43",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text5",
    },
  },
  //Partner/SCI
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_ONE,
      questionId: "_SCI",
    },
    monday: {
      columnType: MondayColumnTypes.STATUS,
      columnId: "color",
    },
    optionMapping: [
      { koboValue: "__", mondayValue: "Partner" },
      { koboValue: "sci", mondayValue: "SCI" },
      { koboValue: CATCH_ALL_VALUE, mondayValue: "Unknown" },
    ],
  },
  //Partner Name
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_ONE,
      questionId: "_partner_name",
    },
    monday: {
      columnType: MondayColumnTypes.STATUS,
      columnId: "status20",
    },
    optionMapping: [
      {
        koboValue: "mariupol_city_center_of_support_and_deve",
        mondayValue: "Mariupol City Center of Support and Development of SMEs",
      },
      { koboValue: "dropwd", mondayValue: "DROPWD" },
      { koboValue: "civil_initiatives", mondayValue: "Civil Initiatives" },
      { koboValue: "cf__slavic_heart", mondayValue: "CF Slavic Heart" },
      {
        koboValue: "league_of_modern_women",
        mondayValue: "League of modern women",
      },
      { koboValue: "bilozerka", mondayValue: "Bilozerka" },
      { koboValue: "poruch", mondayValue: "Poruch" },
      {
        koboValue: "pectoral__zelo_art_centre",
        mondayValue: "Pectoral- Zelo Art Centre",
      },
      { koboValue: "red_cross", mondayValue: "Red Cross" },
      { koboValue: "cf_posmishka_ua", mondayValue: "CF Posmishka UA" },
      { koboValue: "_", mondayValue: "Other" },
      { koboValue: CATCH_ALL_VALUE, mondayValue: "Unknown" },
    ],
  },
  //Other partner organization's name
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "text_za9hu55",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text9",
    },
  },
  //Position of the representative
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "text_ov7sf49",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text06",
    },
  },
];
