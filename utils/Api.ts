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
