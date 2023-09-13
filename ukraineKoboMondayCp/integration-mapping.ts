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
  //oblast1
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_ONE,
      questionId: "oblast1",
      optionsListId: "oblast",
      labelIndex: 0,
    },
    monday: {
      columnType: MondayColumnTypes.DROPDOWN,
      columnId: "dropdown9",
    },
  },
  //Raion
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_ONE,
      questionId: "raion1",
      optionsListId: "raion",
      labelIndex: 0,
    },
    monday: {
      columnType: MondayColumnTypes.DROPDOWN,
      columnId: "raion",
    },
  },
  //Hromada
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_ONE,
      questionId: "gromada1",
      optionsListId: "gromada",
      labelIndex: 0,
    },
    monday: {
      columnType: MondayColumnTypes.DROPDOWN,
      columnId: "hromada",
    },
  },
  //Settlement
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "_settlement",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text_11",
    },
  },
  //Location (Institution)
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_ONE,
      questionId: "_zaklad",
      optionsListId: "dd0qk90",
      labelIndex:0
    },
    monday: {
      columnType: MondayColumnTypes.DROPDOWN,
      columnId: "dropdown4",
    },
  },
  //Registration Date
  {
    kobo: {
      questionType: KoboQuestionTypes.DATE,
      questionId: "_registration_date",
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
      questionId: "__002",
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
      questionId: "__005",
    },
    monday: {
      columnType: MondayColumnTypes.STATUS,
      columnId: "status5",
    },
    optionMapping: [
      { koboValue: "boy", mondayValue: "Boy" },
      { koboValue: "girl", mondayValue: "Girl" },
      { koboValue: "other", mondayValue: "Other" },
      { koboValue: CATCH_ALL_VALUE, mondayValue: "Unknown" },
    ],
  },
  //Age
  {
    kobo: {
      questionType: KoboQuestionTypes.INTEGER,
      questionId: "__006",
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
      questionId: "__007",
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
      questionId: "__008",
    },
    monday: {
      columnType: MondayColumnTypes.STATUS,
      columnId: "status3",
    },
    optionMapping: [
      { koboValue: "yes", mondayValue: "Yes" },
      { koboValue: "no", mondayValue: "No" },
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
      { koboValue: "kindergarten", mondayValue: "Kindergarten" },
      { koboValue: "other", mondayValue: "Other" },
      { koboValue: CATCH_ALL_VALUE, mondayValue: "Unknown" },
    ],
  },
  //Grade the child study in
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "__009",
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
      questionId: "__010",
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
      questionId: "__011",
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
      questionId: "__012",
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
      questionId: "__013",
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
      questionId: "__014",
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
      questionId: "__015",
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
      questionId: "__016",
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
      questionId: "__017",
    },
    monday: {
      columnType: MondayColumnTypes.STATUS,
      columnId: "status9",
    },
    optionMapping: [
      { koboValue: "no", mondayValue: "No" },
      { koboValue: "yes", mondayValue: "Yes" },
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
      { koboValue: "no", mondayValue: "No" },
      { koboValue: "yes", mondayValue: "Yes" },
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
  //Programs in which the child will participate, by choosing a program you give the consent of the parents/guardians to the child's participation in the programs
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_MULTIPLE,
      questionId: "__003",
      optionsListId: "ge5af49",
      labelIndex: 0,
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
      { koboValue: "partner", mondayValue: "Partner" },
      { koboValue: CATCH_ALL_VALUE, mondayValue: "Unknown" },
    ],
  },
  //Partner's name
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "__018",
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
      questionId: "__019",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text6",
    },
  },
    //Donor name
    {
      kobo: {
        questionType: KoboQuestionTypes.SELECT_ONE,
        questionId: "donor",
      },
      monday: {
        columnType: MondayColumnTypes.STATUS,
        columnId: "status55",
      },
      optionMapping: [
        { koboValue: "hf", mondayValue: "HF" },
        { koboValue: "scn", mondayValue: "SCN" },
        { koboValue: "bha", mondayValue: "BHA" },
        { koboValue: "echo", mondayValue: "ECHO" },
        { koboValue: "sho", mondayValue: "SHO" },
        { koboValue: "swisssolidarity", mondayValue: "SwissSolidarity" },
        { koboValue: "sida", mondayValue: "SIDA" },
        { koboValue: "eu_delegation", mondayValue: "EU Delegation" },
        { koboValue: "iha_gac", mondayValue: "IHA-GAC" },
        { koboValue: CATCH_ALL_VALUE, mondayValue: "Unknown" },
      ],
    },
  //Other donor name
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "other_donor",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text4",
    },
  },
  //Name of the SCI specialist
  {
    kobo: {
      questionType: KoboQuestionTypes.TEXT,
      questionId: "__022",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text5",
    },
  },
  //CFS/Mobile
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_ONE,
      questionId: "select_one_nj52z48",
    },
    monday: {
      columnType: MondayColumnTypes.STATUS,
      columnId: "status33",
    },
    optionMapping: [
      { koboValue: "CFS", mondayValue: "CFS" },
      { koboValue: "Mobile", mondayValue: "Mobile" },
      { koboValue: CATCH_ALL_VALUE, mondayValue: "Unknown" },
    ],
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
      { koboValue: "partner", mondayValue: "Partner" },
      { koboValue: "sci", mondayValue: "SCI" },
      { koboValue: CATCH_ALL_VALUE, mondayValue: "Unknown" },
    ],
  },
  //Partner Name
  {
    kobo: {
      questionType: KoboQuestionTypes.SELECT_ONE,
      questionId: "partner",
    },
    monday: {
      columnType: MondayColumnTypes.STATUS,
      columnId: "status20",
    },
    optionMapping: [
      {
        koboValue: "mariupol",
        mondayValue: "Mariupol City Center of Support and Development of SMEs",
      },
      { koboValue: "dropwd", mondayValue: "DROPWD" },
      { koboValue: "civil_initiatives", mondayValue: "Civil Initiatives" },
      { koboValue: "slavic_heart", mondayValue: "CF Slavic Heart" },
      {
        koboValue: "league_of_modern_women",
        mondayValue: "League of modern women",
      },
      { koboValue: "bilozerka", mondayValue: "Bilozerka" },
      { koboValue: "poruch", mondayValue: "Poruch" },
      {
        koboValue: "pectoral_zelo_art_centre",
        mondayValue: "Pectoral Zelo Art Centre",
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
      questionId: "__023",
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
      questionId: "__024",
    },
    monday: {
      columnType: MondayColumnTypes.TEXT,
      columnId: "text06",
    },
  },
];
