import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Space Traders UI by deno & fresh</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-black text-green-100">
        <Component />
      </body>
    </html>
  );
}
