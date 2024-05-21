import { useSignal } from "@preact/signals";
import FleetInfo from "../islands/FleetInfo.tsx";
import { config, DotenvConfig } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
const config_env: DotenvConfig = config();
const token: string = config_env.token;

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <FleetInfo token={token} />
      </div>
    </div>
  );
}
