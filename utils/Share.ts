import { signal } from "@preact/signals";
import { System, Waypoint } from "../client/index.ts";

export const fleetLocationSystems = signal<System[]>([]);
export const selectedSystem = signal<System | null>(null);
export const waypointsOfSelectedSystem = signal<Waypoint[]>([]);
