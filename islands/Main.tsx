import FleetInfo from "./FleetInfo.tsx";
import { useEffect, useState } from "preact/hooks";
import { getFleetInfo, getSystemInfo } from "../utils/Data.ts";
import { Ship } from "../client/index.ts";
import { fetchMapImage } from "../utils/Api.ts";
import { convertSystem2WaypointPosition } from "../utils/Convert.ts";
import { fleetLocationSystems, selectedSystem } from "../utils/Share.ts";

interface MainProps {
  token: string;
}

export default function Home({ token }: MainProps) {
  const [fleetInfo, setFleetInfo] = useState<Ship[]>();
  const [mapSvg, setMapSvg] = useState<string>();

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
  }

  useEffect(() => {
    fetchFleetInfo();
  }, [token]);

  useEffect(() => {
    async function fetchMap() {
      if (selectedSystem.value) {
        const svg = await fetchMapImage(
          convertSystem2WaypointPosition(selectedSystem.value),
          true,
        );
        setMapSvg(svg);
      }
    }
    fetchMap();
  }, [selectedSystem.value]);

  return (
    <div class="m-4">
      <div class="max-w-screen-xl max-h-screen mx-auto flex flex-row">
        <FleetInfo className="basis-1/3" fleet={fleetInfo} />
        <div class="divider divider-horizontal"></div>
        <div class="basis-1/3"></div>
        <div class="divider divider-horizontal"></div>
        <div class="basis-1/3">
          <h1 class="text-xl">{selectedSystem.valueOf()?.symbol} Map</h1>
          {mapSvg && (
            <div
              class="mx-auto my-4 h-96"
              dangerouslySetInnerHTML={{ __html: mapSvg }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
