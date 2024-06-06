import { FreshContext, type Handlers } from "$fresh/server.ts";
import { renderChart } from "$fresh_charts/mod.ts";

export interface Position {
  label: string;
  x: number;
  y: number;
}

export const handler: Handlers<Position | null> = {
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
            min: -80000,
            max: 80000,
            ticks: {
              stepSize: 5000,
              color: "silver",
            },
            grid: {
              color: "gray",
            },
          },
          y: {
            type: "linear",
            position: "center",
            min: -80000,
            max: 80000,
            ticks: {
              stepSize: 5000,
              color: "silver",
            },
            grid: {
              color: "gray",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
      plugins: [{
        id: "customLabel",
        beforeDraw: (chart) => {
          const ctx = chart.ctx;
          ctx.save();
          const meta = chart.getDatasetMeta(0);
          meta.data.forEach((point, index) => {
            const data = datasetsData[index];
            ctx.fillStyle = "silver";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            const posX = point.x;
            const posY = point.y;
            ctx.fillText(data.label, posX, posY - 10);
          });
          ctx.restore();
        },
      }],
      width: 300,
      height: 300,
    });
  },

  async POST(req: Request, _ctx: FreshContext) {
    const datasetsData = await req.json();

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
            min: -80000,
            max: 80000,
            ticks: {
              stepSize: 5000,
              color: "silver",
            },
            grid: {
              color: "gray",
            },
          },
          y: {
            type: "linear",
            position: "center",
            min: -80000,
            max: 80000,
            ticks: {
              stepSize: 5000,
              color: "silver",
            },
            grid: {
              color: "gray",
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
