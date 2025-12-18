import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [fresh(), tailwindcss()],
    build: {
        rollupOptions: {
            external: [
                // github-slugger(jsr:@deno:gfm/mod.ts内)をビルド対象から除外
                /^npm:github-slugger/,
            ],
        },
    },
});
