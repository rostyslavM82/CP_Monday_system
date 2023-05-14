import axios from "axios";
import {
   AlreadyExistingRowInMondayInfo, 
   CreationErrorInfo,
  KoboFormDataStructureResponse,
   KoboSubmissionEndpointResponse,
    MondayResponseItem, 
    NewlyCreatedItemInfo 
  } from "./types";
import { errorToString, getMondayMutationColumnValuesArgument, isKoboSubmissionAddedToMonday, markKoboSubmissionAsProcessed } from "./helpers";
import { createItem } from "../common/monday/create-item";
import { CP_BOARD_ID } from "../common/monday/constants";
import { integrationMapping } from "./integration-mapping";

export const SYNC_ALL_MODE = "syncAll";

export const syncAllKoboSubmissionsWithMonday= async() => {
    const koboFormDataStructureResponse =
    await axios.get<KoboFormDataStructureResponse>(
        //change
      `https://kobo.humanitarianresponse.info/api/v2/assets/aSBgUCmuVW7BLnpnKbGPcF`,
      {
        headers: { Authorization: `Token ${process.env.KOBO_API_TOKEN}` },
      }
    );
  const koboFormChoices = koboFormDataStructureResponse.data.content.choices;

  const koboSubmissionsResponse =
    await axios.get<KoboSubmissionEndpointResponse>(
        //change
      `https://kobo.humanitarianresponse.info/api/v2/assets/aSBgUCmuVW7BLnpnKbGPcF/data`,
      {
        headers: { Authorization: `Token ${process.env.KOBO_API_TOKEN}` },
      }
    );

  const totalKoboSubmissionsCount = koboSubmissionsResponse.data.count;
  const koboSubmissions = koboSubmissionsResponse.data.results;

  const newlyCreatedItems: NewlyCreatedItemInfo[] = [];
  const creationErrors: CreationErrorInfo[] = [];
  const alreadyExistingRowsInMonday: AlreadyExistingRowInMondayInfo[] = [];

  for (const koboSubmission of koboSubmissions) {
    let didProcessSuccessfully = false;

    try {
      if (!koboSubmission._id) {
        creationErrors.push({
          unexpectedError: `Invalid submission argument: ${koboSubmission}`,
          catchKey: "invalidSubmissionArgument",
        });

        continue;
      }

      if (isKoboSubmissionAddedToMonday(koboSubmission)) {
        alreadyExistingRowsInMonday.push({
          koboSubmissionId: koboSubmission._id,
        });

        continue;
      }
    } catch (error) {
      creationErrors.push({
        unexpectedError: errorToString(error),
        catchKey: "verifyDuplicates",
      });
    }

    let newlyCreatedItem: MondayResponseItem = null;

    try {
      const mondayCreateItemColumnValues =
        getMondayMutationColumnValuesArgument({
          koboSubmission,
          integrationMapping,
          koboFormChoices,
        });

      // TO DEBUG ENABLE THIS:
      // fs.writeFileSync(
      //   `file${i}.json`,
      //   JSON.stringify(mondayCreateItemColumnValues)
      // );

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
        continue;
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
    }

    if (didProcessSuccessfully && process.env.KOBO_ENV === "production") {
      try {
        await markKoboSubmissionAsProcessed(koboSubmission._id);
      } catch (error) {
        creationErrors.push({
          unexpectedError: errorToString(error),
          catchKey: "updateKoboStatus",
        });
      }
    }
  }

  return {
    mode: SYNC_ALL_MODE,
    totalKoboSubmissionsCount: totalKoboSubmissionsCount,
    processedKoboSubmissionsCount: koboSubmissions.length,
    creationErrorsCount: creationErrors.length,
    alreadyExistingRowsInMondayCount: alreadyExistingRowsInMonday.length,
    newlyCreatedItemsCount: newlyCreatedItems.length,
    creationErrors,
    alreadyExistingRowsInMonday,
    newlyCreatedItems,
  };
}