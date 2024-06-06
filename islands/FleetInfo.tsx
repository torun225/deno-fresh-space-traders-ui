import { Ship, System } from "../client/index.ts";
import { fetchSystem } from "../utils/Api.ts";
import { getCollection } from "../utils/DataBase.ts";
import { selectedSystem } from "../utils/Share.ts";

interface FleetInfoProps {
  className?: string;
  fleet?: Ship[];
}

async function selectMap(ship: Ship) {
  selectedSystem.value = await fetchSystem(ship.nav.systemSymbol);
}

export default function FleetInfo({ className, fleet }: FleetInfoProps) {
  return (
    <div class={`grid gap-4 ${className}`}>
      <h1 class="text-xl">Fleet Info</h1>
      {fleet?.map((ship, index) => {
        return (
          <div
            key={ship.symbol}
            className="card bg-neutral text-neutral-content"
          >
            <div class="card-body">
              <h1 class="card-title">
                {ship.symbol}
              </h1>
              <div>
                <h2 class="text-lg">[ Nav ]</h2>
                <div class="ml-3">
                  <p>WayPoint : {ship.nav.waypointSymbol}</p>
                  <p>Status : {ship.nav.status}</p>
                  <p>FlightMode : {ship.nav.flightMode}</p>
                  <div class="my-3">
                    <h3 class="text-bold">[ Route ]</h3>
                    <div class="ml-3">
                      <p>Dest. : {ship.nav.route.destination.symbol}</p>
                      <p>Origin : {ship.nav.route.origin.symbol}</p>
                      <p>
                        Dep. : {ship.nav.route.departureTime.toLocaleString()}
                      </p>
                      <p>Arr. : {ship.nav.route.arrival.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-actions justify-end">
                <div class="join">
                  <button
                    class="btn join-item btn-primary"
                    onClick={() => selectMap(ship)}
                  >
                    Map
                  </button>
                  <button class="btn join-item btn-secondary">Detail</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
