import Main from "../islands/Main.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";

interface HomeProps extends PageProps {
  data: {
    token: string;
  };
}

export const handler: Handlers = {
  GET(_req, _ctx) {
    const cookies = getCookies(_req.headers);
    const bearerToken = cookies.bearerToken;
    return _ctx.render({ token: bearerToken });
  },
};

export default function Home(props: HomeProps) {
  return <Main token={props.data.token}></Main>;
}
