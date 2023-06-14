import { changeItemColumnValues } from "../common/monday/change-item-column-values";
import { getItemsByColumnValues } from "../common/monday/get-items-by-column-values";
import { getItemsByIds } from "../common/monday/get-items-by-ids";
import { errorToString } from "../ukraineKoboMondayCp/helpers";
import { CreationErrorInfo } from "../ukraineKoboMondayCp/types";

export const changeIdInMainBoard = async (
    koboSubmission: Record<string,any>
)  => {
    const creationErrors: CreationErrorInfo[] = [];
    
    try {
        if (!koboSubmission?._id) {
          creationErrors.push({
            unexpectedError: `Invalid submission argument: ${koboSubmission}`,
            catchKey: "invalidSubmissionArgument",
          });
          return "error-id"
        }
    }
    catch (error) {
      creationErrors.push({
        unexpectedError: errorToString(error),
        catchKey: "verifyDuplicates",
      });
      return "error-catch"
    }
    try {
//NEEDD
      return await getItemsByColumnValues({
        boardId: 1197599771,
        columnId: "text8",
        columnValue:"432342"
      });

      // await changeItemColumnValues({
      //   boardId: 1197599771,
      //   itemId: 1197599776,
      //   columnValues: {"text799":"kek"}
      // });
    }
    
    catch(error) {
        return error;
    }
    
}