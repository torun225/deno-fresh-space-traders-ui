// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_charts_map from "./routes/api/charts/map.tsx";
import * as $api_init_systemMap from "./routes/api/init/systemMap.tsx";
import * as $api_system_symbol_ from "./routes/api/system/[symbol].tsx";
import * as $api_system_index from "./routes/api/system/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $system_symbol_ from "./routes/system/[symbol].tsx";
import * as $FleetInfo from "./islands/FleetInfo.tsx";
import * as $Main from "./islands/Main.tsx";
import * as $SystemList from "./islands/SystemList.tsx";
import * as $SystemMap from "./islands/SystemMap.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/charts/map.tsx": $api_charts_map,
    "./routes/api/init/systemMap.tsx": $api_init_systemMap,
    "./routes/api/system/[symbol].tsx": $api_system_symbol_,
    "./routes/api/system/index.tsx": $api_system_index,
    "./routes/index.tsx": $index,
    "./routes/system/[symbol].tsx": $system_symbol_,
  },
  islands: {
    "./islands/FleetInfo.tsx": $FleetInfo,
    "./islands/Main.tsx": $Main,
    "./islands/SystemList.tsx": $SystemList,
    "./islands/SystemMap.tsx": $SystemMap,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
