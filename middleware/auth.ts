import { FreshContext } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";

export function handler(_req: Request, _ctx: FreshContext) {
  const url = new URL(_req.url);

  // /login ページは認証チェックをスキップ
  if (url.pathname === "/login" || url.pathname === "/styles.css") {
    return _ctx.next();
  }

  // Cookie から bearer トークンを取得
  const cookies = getCookies(_req.headers);
  const bearerToken = cookies.bearerToken;

  if (!bearerToken) {
    // トークンがない場合は /login にリダイレクト
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/login",
      },
    });
  }

  // トークンがある場合は次のハンドラに進む
  return _ctx.next();
}
