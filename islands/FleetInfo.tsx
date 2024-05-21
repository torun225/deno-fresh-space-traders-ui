import { Button } from "../components/Button.tsx";
import {
  createConfiguration,
  FleetApi,
  RequestContext,
  Ship,
} from "../client/index.ts";
import { useState } from "preact/hooks";

interface FleetInfoProps {
  token: string;
}

async function getFleetInfo(
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

  return rdata;
}

export default function FleetInfo(params: FleetInfoProps) {
  const [fleetInfo, setFleetInfo] = useState<Ship[]>();

  const handleFleetInfoClick = async () => {
    const ships = await getFleetInfo(params.token);
    setFleetInfo(ships);
  };

  return (
    <div class="gap-8 py-6">
      <button class="btn btn-primary" onClick={handleFleetInfoClick}>
        Get FleetInfo
      </button>
      {fleetInfo?.map((ship, index) => (
        <div key={index}>
          <p>{JSON.stringify(ship)}</p>
        </div>
      ))}
    </div>
  );
}
