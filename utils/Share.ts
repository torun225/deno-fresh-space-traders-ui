import { signal } from "@preact/signals";
import { System } from "../client/index.ts";

export const fleetLocationSystems = signal<System[]>([]);
export const selectedSystem = signal<System | null>(null);
