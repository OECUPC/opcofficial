import { PageProps } from "fresh";

import { Header } from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";

import RequestMicroCMSAPI from "../tools/RequestMicroCMSAPI.ts";

import { ProjectItem } from "../types/ProjectItem.ts";
import { define } from "../utils.ts";

interface Data {
    projects: ProjectItem[];
}

export const handler = define.handlers({
    async GET(_) {
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
                        {data.projects.map((elem) => (
                            <section className="w-full rounded-lg transition-shadow duration-300 shadow-sm hover:shadow-lg">
                                <a
                                    className="text-center"
                                    href={`/project/${elem.id}`}
                                >
                                    <figure>
                                        <img
                                            className="w-full h-56 shadow-sm object-cover object-center"
                                            src={(0 < elem.eyecatch.url.length)
                                                ? elem.eyecatch?.url
                                                : "/images/no_image.webp"}
                                        />
                                        <figcaption className="mt-2">
                                            <h2 className="text-2xl">
                                                {elem.title}
                                            </h2>
                                            <p className="text-gray-400">
                                                {elem.updated_at.toLocaleString(
                                                    "ja-JP",
                                                    {
                                                        timeZone: "Asia/Tokyo",
                                                    },
                                                )}
                                            </p>
                                            <p className="whitespace-pre-wrap p-4">
                                                {elem.description}
                                            </p>
                                        </figcaption>
                                    </figure>
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
