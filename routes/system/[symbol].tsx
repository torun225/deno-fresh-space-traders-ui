import { config, DotenvConfig } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
import { Handlers } from "$fresh/server.ts";
import SystemList from "../../islands/SystemList.tsx";
import SystemMap from "../../islands/SystemMap.tsx";

const config_env: DotenvConfig = config();
const token: string = config_env.token;

interface MapProps {
  data: {
    systemSymbol: string;
  };
}

export const handler: Handlers = {
  GET(_req, _ctx) {
    const systemSymbol = _ctx.params.symbol;

    return _ctx.render({ systemSymbol: systemSymbol });
  },
};

export default function Map(props: MapProps) {
  const symbol = props.data.systemSymbol;
  return (
    <div>
      <SystemMap symbol={symbol} token={token}></SystemMap>
      <SystemList symbol={symbol} token={token}></SystemList>
    </div>
  );
}
