import daisyui from "daisy-ui";
import { type Config } from "tailwindcss";
import typography from "tailwindcss/typography";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  // @ts-ignore 型変換でエラーするため無視
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["dim"],
  },
} satisfies Config;
