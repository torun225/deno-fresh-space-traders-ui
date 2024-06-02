import { createConfiguration } from "../client/configuration.ts";
import { FleetApi, RequestContext, Ship, SystemsApi } from "../client/index.ts";

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

export async function getFleetInfo(
  token: string,
) {
  const fleetApi: FleetApi = new FleetApi(
    myConfiguration(SERVER_ADDRESS, token),
  );

  const rdata: Ship[] = await fleetApi.getMyShips().then((response) => {
    return response.data;
  });

  console.log(rdata);

  return rdata;
}

export async function getSystemInfo(token: string, symbol: string) {
  const systemsApi = new SystemsApi(myConfiguration(SERVER_ADDRESS, token));

  const rdata = await systemsApi.getSystem(symbol).then((responce) => {
    return responce.data;
  });

  console.log(rdata);

  return rdata;
}
