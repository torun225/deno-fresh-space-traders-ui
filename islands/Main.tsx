import FleetInfo from "./FleetInfo.tsx";
import { useEffect, useState } from "preact/hooks";
import { getFleetInfo, getSystemInfo } from "../utils/Data.ts";
import { Ship, System } from "../client/index.ts";

interface MainProps {
  token: string;
}

interface Map {
  label: string;
  x: number;
  y: number;
}

function convertSystemsToMap(systems: System[]) {
  const maps: Map[] = [];
  systems.forEach((system) => {
    maps.push({ label: system.symbol, x: system.x, y: system.y });
  });
  return maps;
}

export default function Home({ token }: MainProps) {
  const [fleetInfo, setFleetInfo] = useState<Ship[]>();
  const [systemsInfo, setSystemsInfo] = useState<System[]>();

  async function fetchFleetInfo() {
    const ships = await getFleetInfo(token);
    setFleetInfo(ships);

    const systemSymbols = Array.from(
      new Set(ships.map((ship) => ship.nav.systemSymbol)),
    );
    await fetchSystemsInfo(systemSymbols);
  }

  async function fetchSystemsInfo(symbols: string[]) {
    const systemsPromises = symbols.map(async (symbol) => {
      try {
        const system = await getSystemInfo(token, symbol);
        return system;
      } catch (error) {
        console.error(
          `Error fetching system info for symbol ${symbol}:`,
          error,
        );
        return null;
      }
    });

    const systems = (await Promise.all(systemsPromises)).filter((system) =>
      system !== null
    ) as System[];
    setSystemsInfo(systems);
  }

  useEffect(() => {
    fetchFleetInfo();
  }, [token]);

  const map = systemsInfo ? convertSystemsToMap(systemsInfo) : [];

  return (
    <div class="m-4">
      <div class="max-w-screen-xl max-h-screen mx-auto flex flex-row">
        <FleetInfo className="basis-1/3" fleet={fleetInfo} />
        <div class="basis-1/3"></div>
        <div class="basis-1/3">
          <h1 class="text-xl">Galaxy Map</h1>
          {systemsInfo && systemsInfo.length > 0 && (
            <img
              src={`/charts/map?data=${JSON.stringify(map)}`}
              class="mx-auto my-4 h-96"
              alt="an example chart provided as an image"
            />
          )}
        </div>
      </div>
    </div>
  );
}
