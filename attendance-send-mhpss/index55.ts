import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { SYNC_ALL_MODE } from "../ukraineKoboMondayCp/sync-all-kobo-submissions-with-monday";
import { errorToString, safeJsonStringify } from "../ukraineKoboMondayCp/helpers";
import { PROCESS_ONE_MODE } from "../ukraineKoboMondayCp/add-kobo-submission-to-monday";
import { changeIdInMainBoard } from "./change-id-in-main-board";

const INTEGARTION_MODE_BODY_KEY = "koboIntegrationMode";
const KOBO_SYNC_SECRET_HEADER = "x-kobo-sync-token";

const httpTrigger: AzureFunction = async function (
    context: Context, req: HttpRequest
    ): Promise<void> {
        try {
            if (req.headers[KOBO_SYNC_SECRET_HEADER] !== process.env.KOBO_SYNC_SECRET) {
              context.log({
                message: "Forbidden",
                body: req.headers[KOBO_SYNC_SECRET_HEADER],
              });
              context.res = {
                status: 403,
                body: "Forbidden",
              };
              return;
            }
        
            // if (req.body?.[INTEGARTION_MODE_BODY_KEY] === SYNC_ALL_MODE) {
            //  const response = await syncAllKoboSubmissionsWithMonday();
        
            //   context.log({
            //     mode: SYNC_ALL_MODE,
            //     message: `Successful processing - ${SYNC_ALL_MODE}`,
            //     body: safeJsonStringify(response),
            //   });
            //   context.res = {
            //     status: 200,
            //     body: response,
            //   };
            //   return;
            // }
        
            if (req.body?.[INTEGARTION_MODE_BODY_KEY] === PROCESS_ONE_MODE) {
              const response = await changeIdInMainBoard(req.body.submission);
        
              context.log({
                mode: PROCESS_ONE_MODE,
                message: `Successful processing - ${PROCESS_ONE_MODE}`,
                body: safeJsonStringify(response),
              });
              context.res = {
                status: 200,
                body: response,
              };
              return;
            }
        
            context.log({
              mode: req.body?.[INTEGARTION_MODE_BODY_KEY] || "Unknown",
              message: "End of try block - invalid integration mode",
              body: safeJsonStringify(req.body),
            });
            context.res = {
              status: 400,
              body: "Bad request",
            };
            return;
          } catch (error) {
            context.log({
              message: "Error - global catch block",
              body: JSON.stringify(req.body),
              error: errorToString(error),
            });
            context.res = {
              status: 500,
              body: "An error happened, check application insights to find out more",
            };
            return;
          }
        };

export default httpTrigger;