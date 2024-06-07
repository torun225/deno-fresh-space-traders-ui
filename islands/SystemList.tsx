import { convertTraits2String } from "../utils/Convert.ts";
import { selectedSystem, waypointsOfSelectedSystem } from "../utils/Share.ts";

interface SystemListProps {
  className?: string;
}

export default function SystemList({ className }: SystemListProps) {
  return (
    <div class={`grid ${className}`}>
      <h1 class="text-xl">
        Waypoint List of {selectedSystem.valueOf()?.symbol}
      </h1>
      <div class="overflow-y-auto">
        <table class="table table-pin-rows">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Type</th>
              <th>Traits</th>
              <th>Faction</th>
            </tr>
          </thead>
          <tbody>
            {waypointsOfSelectedSystem.valueOf()?.map((wp) => (
              <tr key={wp.symbol} className="">
                <td>{wp.symbol}</td>
                <td>{wp.type.toString()}</td>
                <td>{convertTraits2String(wp.traits)}</td>
                <td>{wp.faction ? wp.faction.symbol : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
