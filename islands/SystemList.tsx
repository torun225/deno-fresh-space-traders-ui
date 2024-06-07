import { useEffect, useState } from "preact/hooks";
import { System, Waypoint } from "../client/index.ts";
import { convertTraits2String } from "../utils/Convert.ts";
import { getSystemInfo, getWaypoints } from "../utils/Data.ts";

interface SystemListProps {
  className?: string;
  system: System;
  waypoints: Waypoint[];
}

export default function SystemList(
  { className, system, waypoints }: SystemListProps,
) {
  return (
    <div class={`grid ${className}`}>
      <h1 class="text-xl">
        Waypoint List of {system?.symbol}
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
            {waypoints?.map((wp) => (
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