import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import {
  createConfiguration,
  FleetApi,
  RequestContext,
  Ship,
} from "../client/index.ts";
import { StateUpdater, useState } from "preact/hooks";

interface FleetInfoProps {
  auth: Signal<string>;
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
    const ships = await getFleetInfo(params.auth.value);
    setFleetInfo(ships);
  };

  return (
    <div class="gap-8 py-6">
      <Button onClick={handleFleetInfoClick}>
        Get FleetInfo
      </Button>
      {fleetInfo?.map((ship, index) => (
        <div key={index}>
          <p>{JSON.stringify(ship)}</p>
        </div>
      ))}
    </div>
  );
}
