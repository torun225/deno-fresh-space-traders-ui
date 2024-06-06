import { FreshContext, type Handlers } from "$fresh/server.ts";
import { renderChart } from "$fresh_charts/mod.ts";

export interface Position {
  label: string;
  x: number;
  y: number;
}

export interface RequestData {
  isLabel: boolean;
  data: Position[];
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
      width: 300,
      height: 300,
    });
  },

  async POST(req: Request, _ctx: FreshContext) {
    const reqData = await req.json() as RequestData;
    const isLabel = reqData.isLabel;
    const datasetsData = reqData.data;

    // x座標とy座標の最小値と最大値を計算
    const xValues = datasetsData.map((
      data: Position,
    ) => data.x);
    const yValues = datasetsData.map((
      data: Position,
    ) => data.y);

    const xMin = Math.min(...xValues);
    const xMax = Math.max(...xValues);
    const yMin = Math.min(...yValues);
    const yMax = Math.max(...yValues);

    // 全体の最小値と最大値を求める
    const min = Math.min(xMin, yMin);
    const max = Math.max(xMax, yMax);

    // 最大値の上から2桁目で切り上げ
    const magnitude = Math.pow(10, Math.floor(Math.log10(max)) - 1);
    const roundedMin = Math.floor(min / magnitude) * magnitude;
    const roundedMax = Math.ceil(max / magnitude) * magnitude;

    // ちょうど良いstepSizeを計算
    const range = roundedMax - roundedMin;
    const numSteps = 10; // 目盛りの数の目安
    const stepSize = Math.ceil(range / numSteps / magnitude) * magnitude;

    if (isLabel) {
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
              min: roundedMin,
              max: roundedMax,
              ticks: {
                stepSize: stepSize,
                color: "silver",
              },
              grid: {
                color: "gray",
              },
            },
            y: {
              type: "linear",
              position: "center",
              min: roundedMin,
              max: roundedMax,
              ticks: {
                stepSize: stepSize,
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
    } else {
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
              min: roundedMin,
              max: roundedMax,
              ticks: {
                stepSize: stepSize,
                color: "silver",
              },
              grid: {
                color: "gray",
              },
            },
            y: {
              type: "linear",
              position: "center",
              min: roundedMin,
              max: roundedMax,
              ticks: {
                stepSize: stepSize,
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
    }
  },
};
