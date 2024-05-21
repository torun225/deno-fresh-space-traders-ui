import FleetInfo from "../islands/FleetInfo.tsx";
import { config, DotenvConfig } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
const config_env: DotenvConfig = config();
const token: string = config_env.token;

export default function Home() {
  return (
    <div class="m-4">
      <div class="max-w-screen-md max-h-screen mx-auto flex flex-row">
        <FleetInfo className="basis-1/4" token={token} />
      </div>
    </div>
  );
}
