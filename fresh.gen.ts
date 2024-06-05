// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_init_systemMap from "./routes/api/init/systemMap.tsx";
import * as $charts_map from "./routes/charts/map.tsx";
import * as $index from "./routes/index.tsx";
import * as $FleetInfo from "./islands/FleetInfo.tsx";
import * as $Main from "./islands/Main.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/init/systemMap.tsx": $api_init_systemMap,
    "./routes/charts/map.tsx": $charts_map,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/FleetInfo.tsx": $FleetInfo,
    "./islands/Main.tsx": $Main,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
