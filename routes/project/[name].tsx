import "prismjs/components/prism-core.js";

import { define } from "../../utils.ts";

import { PageProps } from "fresh";
import { Head } from "fresh/runtime";

import { Header } from "../../islands/Header.tsx";
import { Footer } from "../../components/Footer.tsx";

import RequestMicroCMSAPI from "../../tools/RequestMicroCMSAPI.ts";

import { ProjectItem } from "../../types/ProjectItem.ts";

import { ExternalIconLink } from "../../components/ExternalIconLink.tsx";

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

        return { data: { projects }};
    },
});

const LinkStyle =
    "inline-block w-14 h-14 p-2 rounded-full transition-shadow duration-200 shadow-sm hover:shadow-lg";

export default function Home(pageProps: PageProps<Data>) {
    const name: string = pageProps.params.name;
    const projects: ProjectItem[] = pageProps.data.projects;

    const project =
        projects[projects.findIndex((elem: ProjectItem) => elem.id === name)];

    return (
        <>
            <div>
                <Header location="/projects" />
                <main className="min-h-screen lg:w-3/5 pt-16 my-0 mx-auto">
                    <h1 className="text-3xl text-center mt-8">
                        {project.title}
                    </h1>
                    <div className="flex flex-col justify-center items-center w-full lg:p-8">
                        <figure>
                            <img
                                className="max-h-96"
                                src={project.eyecatch.url}
                            />
                            <figcaption>
                                <p className="m-4 whitespace-pre-wrap">
                                    {project.description}
                                </p>
                            </figcaption>
                        </figure>
                        <div className="flex flex-row justify-between w-full p-4">
                            <div>
                                {Object.hasOwn(project, "github")
                                    ? (
                                        <ExternalIconLink
                                            className={LinkStyle}
                                            path={project.github || ""}
                                        />
                                    )
                                    : Object.hasOwn(project, "youtube")
                                    ? (
                                        <ExternalIconLink
                                            className={LinkStyle}
                                            path={project.youtube || ""}
                                        />
                                    )
                                    : Object.hasOwn(project, "x")
                                    ? (
                                        <ExternalIconLink
                                            className={LinkStyle}
                                            path={project.x || ""}
                                        />
                                    )
                                    : <></>}
                            </div>
                            <a
                                href={project.path}
                                className="p-4 rounded-full bg-opc-secondary text-white"
                            >
                                {project.title}へはこちら
                            </a>
                        </div>
                    </div>
                    <article className="bg-white mt-4">
                        <article
                            className="p-8 my-0 mx-auto markdown"
                            dangerouslySetInnerHTML={{
                                __html: project.content,
                            }}
                        >
                        </article>
                    </article>
                </main>
                <Footer />
            </div>
        </>
    );
}
