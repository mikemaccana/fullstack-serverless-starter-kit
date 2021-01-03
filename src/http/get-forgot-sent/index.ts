import { Request, Response } from "@architect/shared/architect-types";
import { webAppResponse } from "@architect/views/page-layout";

require("@architect/shared/globals");

export async function handler(request: Request): Promise<Response> {
  return webAppResponse;
}
