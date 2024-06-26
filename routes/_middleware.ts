import { FreshContext } from "$fresh/server.ts";
import { handler as authHandler } from "../middleware/auth.ts";

export async function handler(req: Request, ctx: FreshContext) {
  return await authHandler(req, ctx);
}
