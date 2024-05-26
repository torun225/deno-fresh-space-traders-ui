import FleetInfo from "./FleetInfo.tsx";
import { useEffect, useState } from "preact/hooks";
import { getFleetInfo } from "../utils/Data.ts";
import { Ship } from "../client/index.ts";

interface MainProps {
  token: string;
}

export default function Home({ token }: MainProps) {
  const [fleetInfo, setFleetInfo] = useState<Ship[]>();

  useEffect(() => {
    const fetchFleetInfo = async () => {
      const ships = await getFleetInfo(token);
      setFleetInfo(ships);
    };
    fetchFleetInfo();
  }, [token]);

  const map = [{ label: "test", x: 3, y: 15 }, {
    label: "test",
    x: -15,
    y: -20,
  }];

  return (
    <div class="m-4">
      <div class="max-w-screen-xl max-h-screen mx-auto flex flex-row">
        <FleetInfo className="basis-1/3" fleet={fleetInfo} />
        <div class="basis-1/3"></div>
        <img
          src={`/charts/map?data=${JSON.stringify(map)}`}
          class="mx-auto my-4 h-96 basis-1/3"
          alt="an example chart provided as an image"
        />
      </div>
    </div>
  );
}
