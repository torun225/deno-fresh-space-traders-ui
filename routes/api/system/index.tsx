import { Handlers } from "$fresh/src/server/mod.ts";
import { getCollection } from "../../../utils/DataBase.ts";
import { System } from "../../../client/index.ts";
import { Position } from "../charts/map.tsx";

export const handler: Handlers = {
  async GET(_req, _ctx) {
    const collection = await getCollection();

    const systems = await collection.find().toArray() as System[];
    const systemMap = systems.map((system) => {
      return {
        x: system.x,
        y: system.y,
        label: system.symbol,
      };
    }) as Position[];

    return new Response(JSON.stringify(systemMap), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
