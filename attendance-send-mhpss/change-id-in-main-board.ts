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

      let submissionId = koboSubmission._id;
//NEEDD
      let vasya = await getItemsByColumnValues({
        boardId: 1197599771,
        columnId: "numbers",
        columnValue: submissionId
      });
      let tmp2 = vasya[0].id
      let tmp = vasya[0]["column_values"].find(x=>x.id === "text799").text;
      // return vasya; 

      changeItemColumnValues({
        boardId: 1197599771,
        itemId: tmp2,
        columnValues: {"text799": tmp+"test2"}
      });
    }
    
    catch(error) {
        return error;
    }
    
}