import { config, DotenvConfig } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
import { Handlers } from "$fresh/server.ts";
import { Cookie, getCookies, setCookie } from "$std/http/cookie.ts";
import { FactionSymbol, SystemFaction } from "../client/index.ts";
import { createBearerToken } from "../utils/Data.ts";
import { SelectInput } from "../components/SelectInput.tsx";

const config_env: DotenvConfig = config();

export const handler: Handlers = {
  async POST(_req, _ctx) {
    const formData = await _req.formData();
    const type = formData.get("type");

    if (type === "new") {
      const symbol = formData.get("symbol");
      const faction = formData.get("faction");

      if (symbol && faction) {
        const resData = await createBearerToken(
          symbol.toString(),
          faction.toString() as FactionSymbol,
        );
        const newToken = resData.data.token;
        const headers = new Headers();
        setCookie(headers, createCookie(newToken, _req));
        headers.set("location", "/");

        return new Response(null, {
          status: 302,
          headers,
        });
      }
    } else if (type === "existing") {
      const token = formData.get("token");

      if (token) {
        const headers = new Headers();
        setCookie(headers, createCookie(token, _req));
        headers.set("location", "/");

        return new Response(null, {
          status: 302,
          headers,
        });
      }
    }

    return new Response("Unauthorized", { status: 401 });
  },

  GET(_req, _ctx) {
    return _ctx.render();
  },
};

function createCookie(token: FormDataEntryValue, req: Request): Cookie {
  return {
    name: "bearerToken",
    value: token.toString(),
    maxAge: parseInt(config_env.cookie_maxAge),
    sameSite: "Lax",
    domain: new URL(req.url).hostname,
    path: "/",
    secure: true,
  };
}

export default function Login() {
  return (
    <div class="m-4">
      <h1 class="text-xl">Login Page</h1>
      <h2 class="mt-4">Create New Bearer Token</h2>
      <form method="POST" class="grid grid-cols-3 gap-4">
        <input type="hidden" name="type" value="new" />
        <input type="text" name="symbol" placeholder="Enter symbol" required />
        <SelectInput
          name="faction"
          selectList={Object.values(FactionSymbol)}
        >
        </SelectInput>
        <button type="submit" class="btn">Create Token</button>
      </form>
      <h2 class="mt-4">Use Existing Bearer Token</h2>
      <form method="POST" class="grid grid-cols-3 gap-4">
        <input type="hidden" name="type" value="existing" />
        <input type="text" name="token" placeholder="Enter token" required />
        <button type="submit" class="btn">Login</button>
      </form>
    </div>
  );
}
