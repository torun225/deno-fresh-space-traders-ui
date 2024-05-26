import { config, DotenvConfig } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
import Main from "../islands/Main.tsx";

const config_env: DotenvConfig = config();
const token: string = config_env.token;

export default function Home() {
  return <Main token={token}></Main>;
}
