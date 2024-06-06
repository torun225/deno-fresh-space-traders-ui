import { System } from "../client/index.ts";
import { Position } from "../routes/api/charts/map.tsx";

export function convertSystem2Position(system: System): Position {
  return { label: system.symbol, x: system.x, y: system.y };
}

export function convertSystem2WaypointPosition(system: System): Position[] {
  return system.waypoints.map((wp) => ({ label: wp.symbol, x: wp.x, y: wp.y }));
}
