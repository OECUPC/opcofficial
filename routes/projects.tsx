import { PageProps } from "fresh";

import { Header } from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";

import { define } from "../utils.ts";

import { walk } from "$std/fs/walk.ts";
import { extract } from "$std/front_matter/yaml.ts";

import { ProjectItem } from "../types/ProjectItem.ts";

interface Data {
    projects: ProjectItem[];
}

export const handler = define.handlers({
    async GET(_) {
        const projects = [];

        for await (const entry of walk("./static/projects")) {
            if (!entry.isFile) continue;

            const file = await Deno.readTextFile(entry.path);

            const data = extract(file);

            projects.push({
                id: data.attrs.id,
                title: data.attrs.title,
                authors: data.attrs.authors,
                description: data.attrs.description,
                details: data.attrs.details,
                eye_catch: data.attrs.eye_catch,
                url: data.attrs.url,

                published_at: data.attrs.published_at,
                updated_at: data.attrs.updated_at,

                youtube: data.attrs.youtube,
                github: data.attrs.github,
                x: data.attrs.x,

                body: data.body,
            });
        }

        return { data: { projects } };
    },
});

export default function Home({ data }: PageProps<Data>) {
    return (
        <div>
            <Header location="/projects" />
            <main className="min-h-screen pt-16">
                <article className="bg-white">
                    <h1 className="text-4xl text-center py-8">プロジェクト</h1>
                    <article className="grid gap-8 grid-cols-1 lg:grid-cols-3 p-8">
                        {data.projects.map((item) => (
                            <section className="w-full rounded-lg transition-shadow duration-300 shadow-sm hover:shadow-lg">
                                <a
                                    href={`/projects/${item.id}`}
                                    className="text-center"
                                >
                                    <figure>
                                        <img
                                            className="w-full h-56 shadow-sm object-cover object-center"
                                            src={item.eye_catch}
                                            alt={`${item.title} アイキャッチ画像`}
                                        />
                                    </figure>
                                    <figcaption className="mt-2">
                                        <h2 className="text-2xl">
                                            {item.title}
                                        </h2>
                                        <p className="text-gray-400">
                                            {item.updated_at.toLocaleString(
                                                "ja-jp",
                                                { timeZone: "Asia/Tokyo" },
                                            )}
                                        </p>
                                        <p className="text-gray-400 pt-4">
                                            {item.description}
                                        </p>
                                        <p className="whitespace-pre-wrap p-4">
                                            {item.details}
                                        </p>
                                    </figcaption>
                                </a>
                            </section>
                        ))}
                    </article>
                </article>
            </main>
            <Footer />
        </div>
    );
}
