import { delay } from "$std/async/delay.ts";
import { createConfiguration } from "../client/configuration.ts";
import {
  DefaultApi,
  FleetApi,
  RequestContext,
  Ship,
  SystemsApi,
  Waypoint,
  WaypointTraitSymbol,
  WaypointType,
} from "../client/index.ts";
import { Faction } from "../client/models/Faction.ts";
import { FactionSymbol } from "../client/models/FactionSymbol.ts";
import { RegisterRequest } from "../client/models/RegisterRequest.ts";

const LIMIT = 20;

const SERVER_ADDRESS = "https://api.spacetraders.io/v2";

function myConfiguration(host: string, token: string) {
  return createConfiguration({
    baseServer: {
      makeRequestContext: (endpoint, httpMethod) => {
        const context: RequestContext = new RequestContext(
          host + endpoint,
          httpMethod,
        );
        context.setHeaderParam("Authorization", `Bearer ${token}`);
        return context;
      },
    },
  });
}

function initConfiguration(host: string) {
  return createConfiguration({
    baseServer: {
      makeRequestContext: (endpoint, httpMethod) => {
        const context: RequestContext = new RequestContext(
          host + endpoint,
          httpMethod,
        );
        return context;
      },
    },
  });
}

export async function getFleetInfo(
  token: string,
) {
  const fleetApi: FleetApi = new FleetApi(
    myConfiguration(SERVER_ADDRESS, token),
  );

  const rdata: Ship[] = await fleetApi.getMyShips().then((response) => {
    return response.data;
  });

  return rdata;
}

export async function getSystemInfo(token: string, symbol: string) {
  const systemsApi = new SystemsApi(myConfiguration(SERVER_ADDRESS, token));

  const rdata = await systemsApi.getSystem(symbol).then((responce) => {
    return responce.data;
  });

  return rdata;
}

export async function getSystems(
  token: string,
  page: number,
  limit: number,
) {
  const systemsApi = new SystemsApi(myConfiguration(SERVER_ADDRESS, token));
  const responce = await systemsApi.getSystems(page, limit).then();

  return responce;
}

export async function getWaypoints(
  token: string,
  systemSymbol: string,
  traits?: WaypointTraitSymbol,
  type?: WaypointType,
) {
  let responce: Waypoint[] = [];
  const systemsApi = new SystemsApi(myConfiguration(SERVER_ADDRESS, token));
  const total = await systemsApi.getSystemWaypoints(
    systemSymbol,
    1,
    LIMIT,
  ).then((res) => {
    return res.meta.total;
  });

  console.log("total:" + total);

  if (total == undefined) {
    throw new Error("Error: total is undefined");
  }

  for (let index = 1; index <= Math.ceil(total / LIMIT); index++) {
    const waypoints = await systemsApi.getSystemWaypoints(
      systemSymbol,
      index,
      LIMIT,
    ).then((res) => {
      return res.data;
    });

    if (waypoints == null) {
      throw new Error("Error: waypoints is null");
    }

    responce = responce.concat(waypoints);
  }

  return responce;
}

export function createBearerToken(symbol: string, faction: FactionSymbol) {
  const defaultApi = new DefaultApi(initConfiguration(SERVER_ADDRESS));

  const registerRequest: RegisterRequest = {
    faction: faction,
    symbol: symbol,
  };

  return defaultApi.register(registerRequest);
}
