import { config, DotenvConfig } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
import { Handlers } from "$fresh/server.ts";
import SystemList from "../../islands/SystemList.tsx";
import SystemMap from "../../islands/SystemMap.tsx";
import { System, Waypoint } from "../../client/index.ts";
import { getSystemInfo, getWaypoints } from "../../utils/Data.ts";

const config_env: DotenvConfig = config();
const token: string = config_env.token;

interface MapProps {
  data: {
    system: System;
    waypoints: Waypoint[];
  };
}

export const handler: Handlers = {
  async GET(_req, _ctx) {
    const symbol = _ctx.params.symbol;
    const system = await getSystemInfo(token, symbol);
    const waypoints = await getWaypoints(token, symbol);

    return _ctx.render({ system, waypoints });
  },
};

export default function Map(props: MapProps) {
  const system = props.data.system;
  const waypoints = props.data.waypoints;
  return (
    <div>
      <SystemMap system={system}></SystemMap>
      <SystemList system={system} waypoints={waypoints}></SystemList>
    </div>
  );
}
