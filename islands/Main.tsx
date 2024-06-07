import FleetInfo from "./FleetInfo.tsx";
import { useEffect, useState } from "preact/hooks";
import { getFleetInfo, getSystemInfo, getWaypoints } from "../utils/Data.ts";
import { Ship } from "../client/index.ts";
import { fetchMapImage } from "../utils/Api.ts";
import { convertSystem2WaypointPosition } from "../utils/Convert.ts";
import {
  fleetLocationSystems,
  selectedSystem,
  waypointsOfSelectedSystem,
} from "../utils/Share.ts";

interface MainProps {
  token: string;
}

export default function Home({ token }: MainProps) {
  const [fleetInfo, setFleetInfo] = useState<Ship[]>();

  async function fetchFleetInfo() {
    const ships = await getFleetInfo(token);
    setFleetInfo(ships);

    const uniqueSystems = Array.from(
      new Set(ships.map((ship) => ship.nav.systemSymbol)),
    );
    const systemInfoPromises = uniqueSystems.map((symbol) =>
      getSystemInfo(token, symbol)
    );

    const systems = await Promise.all(systemInfoPromises);

    fleetLocationSystems.value = systems;
    selectedSystem.value = systems[0];
    waypointsOfSelectedSystem.value = await getWaypoints(
      token,
      systems[0].symbol,
    );
  }

  useEffect(() => {
    fetchFleetInfo();
  }, [token]);

  return (
    <div class="m-4">
      <div class="max-w-screen-xl max-h-screen mx-auto flex flex-row">
        <FleetInfo token={token} className="basis-1/3" fleet={fleetInfo} />
        <div class="divider divider-horizontal"></div>
        <div class="basis-2/3">
          <div class="h-[45vh]">
          </div>
        </div>
      </div>
    </div>
  );
}
