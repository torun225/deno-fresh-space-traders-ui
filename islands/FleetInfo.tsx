import {
  createConfiguration,
  FleetApi,
  RequestContext,
  Ship,
} from "../client/index.ts";
import { useEffect, useState } from "preact/hooks";

interface FleetInfoProps {
  token: string;
  className?: string;
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

export default function FleetInfo({ token, className }: FleetInfoProps) {
  const [fleetInfo, setFleetInfo] = useState<Ship[]>();

  useEffect(() => {
    const fetchFleetInfo = async () => {
      const ships = await getFleetInfo(token);
      setFleetInfo(ships);
    };
    fetchFleetInfo();
  }, [token]);

  return (
    <div class={`grid gap-4 ${className}`}>
      {fleetInfo?.map((ship, index) => (
        <div key={ship.symbol} className="collapse bg-base-200">
          <input type="checkbox" name={ship.symbol} />
          <div className="collapse-title text-xl font-medium">
            {ship.symbol}
          </div>
          <div className="collapse-content">
            <p>{JSON.stringify(ship.nav)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
