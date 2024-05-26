import FleetInfo from "../islands/FleetInfo.tsx";
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

  return (
    <div class="m-4">
      <div class="max-w-screen-xl max-h-screen mx-auto flex flex-row">
        <FleetInfo className="basis-1/3" token={token} fleet={fleetInfo} />
      </div>
    </div>
  );
}
