import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [fresh(), tailwindcss()],
    build: {
        rollupOptions: {
            external: [
                // npm:をビルド対象から除外(jsr:@deno/gfmでエラーが出るため)
                /^npm:/,
            ],
        },
    },
});
