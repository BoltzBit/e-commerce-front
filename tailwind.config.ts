import type { Config } from "tailwindcss";
import TypographyPlugin from "@tailwindcss/typography";
import FormPlugin from "@tailwindcss/forms";
import ContainerQueriesPlugin from "@tailwindcss/container-queries";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [TypographyPlugin, FormPlugin, ContainerQueriesPlugin],
} satisfies Config;
