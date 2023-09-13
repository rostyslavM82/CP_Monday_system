import { CP_BOARD_ID } from "../common/monday/constants";
import { createItem } from "../common/monday/create-item";
import { errorToString, getMondayMutationColumnValuesArgument, isKoboSubmissionAddedToMonday, markKoboSubmissionAsProcessed } from "./helpers";
import { integrationMapping } from "./integration-mapping";
import { AlreadyExistingRowInMondayInfo, CreationErrorInfo, KoboFormDataStructureResponse, MondayResponseItem, NewlyCreatedItemInfo } from "./types";
import axios from "axios";

export const PROCESS_ONE_MODE = "processOne";

export const addKoboSubmissionToMonday = async (
  koboSubmission: Record<string, any>
) => {
  const koboFormDataStructureResponse =
    await axios.get<KoboFormDataStructureResponse>(
     
      `https://kobo.savethechildren.net/api/v2/assets/aCZsVKcft4pRKTWsjMw9tx`,
      {
        headers: { Authorization: `Token ${process.env.KOBO_API_TOKEN}` },
      }
    );
  const koboFormChoices = koboFormDataStructureResponse.data.content.choices;

  const newlyCreatedItems: NewlyCreatedItemInfo[] = [];
  const creationErrors: CreationErrorInfo[] = [];
  const alreadyExistingRowsInMonday: AlreadyExistingRowInMondayInfo[] = [];

  const getResponse = () => ({
    totalKoboSubmissionsCount: 1,
    processedKoboSubmissionsCount: 1,
    creationErrorsCount: creationErrors.length,
    alreadyExistingRowsInMondayCount: alreadyExistingRowsInMonday.length,
    newlyCreatedItemsCount: newlyCreatedItems.length,
    creationErrors,
    alreadyExistingRowsInMonday,
    newlyCreatedItems,
  });

  let didProcessSuccessfully = false;

  try {
    if (!koboSubmission?._id) {
      creationErrors.push({
        unexpectedError: `Invalid submission argument: ${koboSubmission}`,
        catchKey: "invalidSubmissionArgument",
      });

      return getResponse();
    }

    if (isKoboSubmissionAddedToMonday(koboSubmission)) {
      alreadyExistingRowsInMonday.push({
        koboSubmissionId: koboSubmission._id,
      });

      return getResponse();
    }
  } catch (error) {
    creationErrors.push({
      unexpectedError: errorToString(error),
      catchKey: "verifyDuplicates",
    });

    return getResponse();
  }

  let newlyCreatedItem: MondayResponseItem = null;

  try {
    const mondayCreateItemColumnValues = getMondayMutationColumnValuesArgument({
      koboSubmission,
      integrationMapping,
      koboFormChoices,
    });

    newlyCreatedItem = await createItem({
        //change
      boardId: CP_BOARD_ID,
      columnValues: JSON.stringify(mondayCreateItemColumnValues),
      itemName: String(koboSubmission._id),
    });

    if (newlyCreatedItem === null || !newlyCreatedItem?.id) {
      creationErrors.push({
        koboSubmissionId: koboSubmission._id,
        columnValues: JSON.stringify(mondayCreateItemColumnValues),
        catchKey: "create_item::error",
      });

      return getResponse();
    }

    didProcessSuccessfully = true;

    newlyCreatedItems.push({
      koboSubmissionId: koboSubmission._id,
      mondayItemId: newlyCreatedItem.id,
      mondayItemName: newlyCreatedItem.name,
      columnValues: JSON.stringify(mondayCreateItemColumnValues),
    });
  } catch (error) {
    creationErrors.push({
      unexpectedError: errorToString(error),
      catchKey: "parentItemCreation",
    });

    return getResponse();
  }

  if (didProcessSuccessfully && process.env.KOBO_ENV === "production") {
    try {
      await markKoboSubmissionAsProcessed(koboSubmission._id);
    } catch (error) {
      creationErrors.push({
        unexpectedError: errorToString(error),
        catchKey: "updateKoboStatus",
      });

      return getResponse();
    }
  }

  return getResponse();
};
