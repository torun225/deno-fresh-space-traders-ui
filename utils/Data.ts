import { createConfiguration } from "../client/configuration.ts";
import { FleetApi, RequestContext, Ship } from "../client/index.ts";

export async function getFleetInfo(
  token: string,
) {
  const myConfiguration = (host: string, token: string) =>
    createConfiguration({
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
  const fleetApi: FleetApi = new FleetApi(
    myConfiguration("https://api.spacetraders.io/v2", token),
  );

  const rdata: Ship[] = await fleetApi.getMyShips().then((response) => {
    return response.data;
  });
  console.log(rdata);
  return rdata;
}
