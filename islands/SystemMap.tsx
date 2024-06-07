import { useEffect, useState } from "preact/hooks";
import { System, Waypoint } from "../client/index.ts";
import {
  convertSystem2WaypointPosition,
  convertTraits2String,
} from "../utils/Convert.ts";
import { getSystemInfo, getWaypoints } from "../utils/Data.ts";
import { fetchMapImage } from "../utils/Api.ts";

interface SystemMapProps {
  className?: string;
  system: System;
}

export default function SystemMap(
  { className, system }: SystemMapProps,
) {
  const [mapSvg, setMapSvg] = useState<string>();

  async function fetchMap() {
    if (system) {
      setMapSvg(
        await fetchMapImage(
          convertSystem2WaypointPosition(system),
          true,
        ),
      );
    }
  }

  useEffect(() => {
    fetchMap();
  }, [system]);

  return (
    <div class={`grid ${className}`}>
      <h1 class="text-xl">{system?.symbol} Map</h1>
      {mapSvg && (
        <div
          className="overflow-hidden w-full h-full"
          dangerouslySetInnerHTML={{
            __html: mapSvg.replace("<svg", '<svg class="w-auto h-auto"'),
          }}
        />
      )}
    </div>
  );
}
