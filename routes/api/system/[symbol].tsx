import { Handlers } from "$fresh/server.ts";
import { System } from "../../../client/index.ts";
import { getCollection } from "../../../utils/DataBase.ts";

export const handler: Handlers = {
  async GET(_req, _ctx) {
    const collection = await getCollection();

    console.log(_ctx.params.symbol);

    const system = await collection.findOne({
      symbol: _ctx.params.symbol,
    }) as System[];

    return new Response(JSON.stringify(system), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
