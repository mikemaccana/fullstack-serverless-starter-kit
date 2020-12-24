import { Request, Response } from "@architect/shared/architect-types";
import {
  STATUSES,
  CONTENT_TYPES,
  stringify,
  log,
} from "@architect/shared/utils";
import { layoutPage, redirect } from "../../views/page-layout";
import arc from "@architect/functions";

import config from "@architect/shared/config";

export async function handler(request: Request): Promise<Response> {
  const cookie = await arc.http.session.write({ person: null });
  return redirect("/", cookie);
}