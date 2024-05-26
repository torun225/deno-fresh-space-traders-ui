import { FreshContext, type Handlers } from "$fresh/server.ts";
import { renderChart } from "$fresh_charts/mod.ts";

interface Position {
  label: string;
  x: number;
  y: number;
}

export const handler: Handlers = {
  GET(_req: Request, _ctx: FreshContext) {
    const url = new URL(_req.url);
    const dataParam = url.searchParams.get("data");

    let datasetsData = [];
    if (dataParam) {
      try {
        const rawData = JSON.parse(dataParam);
        datasetsData = rawData.map((item: Position) => {
          return item;
        });
      } catch (e) {
        console.error("Data parsing error:", e);
      }
    }

    return renderChart({
      type: "scatter",
      data: {
        datasets: [{
          data: datasetsData,
          backgroundColor: "rgb(255, 99, 132)",
        }],
      },
      options: {
        scales: {
          x: {
            type: "linear",
            position: "center",
            min: -100,
            max: 100,
            ticks: {
              stepSize: 20,
            },
          },
          y: {
            type: "linear",
            position: "center",
            min: -100,
            max: 100,
            ticks: {
              stepSize: 20,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
      width: 300,
      height: 300,
    });
  },
};
