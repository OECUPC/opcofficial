import { PageProps } from "fresh";

import { Header } from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";

import { define } from "../utils.ts";

import { walk } from "jsr:@std/fs@^1.0.19/walk";

export const handler = define.handlers({
    async GET(_) {
        for await (const entry of walk("./assets/projects")) {
            if (!entry.isFile) continue;

            const file = await Deno.readTextFile(entry.path);
        }

        /*
        const json = await RequestMicroCMSAPI("projects", false);

        const rawData = json["contents"];

        const projects = [];

        for (const elem of rawData) {
            projects.push({
                id: elem["id"],
                title: elem["title"],
                updated_at: new Date(elem["updatedAt"]),
                description: elem["description"],
                eyecatch: elem["eyecatch"],
                content: elem["content"],
                path: elem["path"],
                youtube: elem["youtube"],
                github: elem["github"],
                x: elem["x_twitter"],
            });
        }

        return { data: { projects } };
        */

        return { data: {} };
    },
});

export default function Home({ data }: PageProps) {
    return (
        <div>
            <Header location="/projects" />
            <main className="min-h-screen pt-16">
                <article className="bg-white">
                    <h1 className="text-4xl text-center py-8">プロジェクト</h1>
                    <article className="grid gap-8 grid-cols-1 lg:grid-cols-3 p-8">
                    </article>
                </article>
            </main>
            <Footer />
        </div>
    );
}
