import { config, DotenvConfig } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
import { Handlers } from "$fresh/src/server/mod.ts";
import { getCollection } from "../../../utils/DataBase.ts";
import { getSystems } from "../../../utils/Data.ts";
import { delay } from "$std/async/delay.ts";

const config_env: DotenvConfig = config();
const token: string = config_env.token;
const LIMIT = 20;

async function fetchSystemsList(page: number) {
  try {
    const systems = await getSystems(token, page, 20);
    return systems;
  } catch (error) {
    console.error(
      `Error fetching systems:`,
      error,
    );
    return null;
  }
}

export const handler: Handlers = {
  async GET(_req, _ctx) {
    console.log("Start Initialize SystemMap");

    // deno-lint-ignore no-explicit-any
    let systemIds: any[] = [];

    const total = await fetchSystemsList(1).then((res) => {
      return res?.meta.total;
    });

    console.log("total:" + total);

    if (total == undefined) {
      const error = { error: "Error:No Systems Total" };
      return new Response(JSON.stringify(error));
    }

    const collection = await getCollection();

    for (let index = 1; index < Math.floor(total / LIMIT) + 1; index++) {
      const systems = await fetchSystemsList(index).then((res) => {
        return res?.data;
      });
      if (systems == null) {
        const error = { error: "Error:No Systems Data" };
        return new Response(JSON.stringify(error));
      }

      const ids = await collection
        .insertMany(
          systems,
        );
      systemIds = systemIds.concat(ids.insertedIds);
      await delay(550);
    }

    console.log("End Initialize SystemMap");

    return new Response(JSON.stringify(systemIds), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
