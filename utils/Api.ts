import { Position } from "../routes/api/charts/map.tsx";

export async function fetchAllSystemsPositions(): Promise<Position[]> {
  const apiUrl = "http://localhost:20000/api/system";

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export async function fetchMapImage(positions: Position[]): Promise<string> {
  const response = await fetch("/api/charts/map", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isLabel: false, data: positions }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const svg = await response.text();
  return svg;
}
