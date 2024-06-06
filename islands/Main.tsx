import FleetInfo from "./FleetInfo.tsx";
import { useEffect, useState } from "preact/hooks";
import { getFleetInfo } from "../utils/Data.ts";
import { Ship } from "../client/index.ts";
import { fetchAllSystemsPositions, fetchMapImage } from "../utils/Api.ts";

interface MainProps {
  token: string;
}

export default function Home({ token }: MainProps) {
  const [fleetInfo, setFleetInfo] = useState<Ship[]>();
  const [allSystemsMapSvg, setAllSystemsMapSvg] = useState<string>();

  async function fetchFleetInfo() {
    const ships = await getFleetInfo(token);
    setFleetInfo(ships);

    const systemSymbols = Array.from(
      new Set(ships.map((ship) => ship.nav.systemSymbol)),
    );

    const positions = await fetchAllSystemsPositions();

    if (positions && positions.length > 0) {
      const svg = await fetchMapImage(positions);
      setAllSystemsMapSvg(svg);
    }
  }

  useEffect(() => {
    fetchFleetInfo();
  }, [token]);

  return (
    <div class="m-4">
      <div class="max-w-screen-xl max-h-screen mx-auto flex flex-row">
        <FleetInfo className="basis-1/3" fleet={fleetInfo} />
        <div class="divider divider-horizontal"></div>
        <div class="basis-1/3"></div>
        <div class="divider divider-horizontal"></div>
        <div class="basis-1/3">
          <h1 class="text-xl">Galaxy Map</h1>
          {allSystemsMapSvg && (
            <div
              class="mx-auto my-4 h-96"
              dangerouslySetInnerHTML={{ __html: allSystemsMapSvg }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
