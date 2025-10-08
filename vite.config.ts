import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";

import "prismjs";

export default defineConfig({
  plugins: [fresh(), tailwindcss()],
});
