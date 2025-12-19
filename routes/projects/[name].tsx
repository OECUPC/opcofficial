import "prismjs/components/prism-core.js";

import { define } from "../../utils.ts";

import { PageProps } from "fresh";
import { Head } from "fresh/runtime";

import { Header } from "../../islands/Header.tsx";
import { Footer } from "../../components/Footer.tsx";

import { ProjectItem } from "../../types/ProjectItem.ts";

import { ExternalIconLink } from "../../components/ExternalIconLink.tsx";

import { extract } from "$std/front_matter/yaml.ts";
import { marked } from "marked";

interface Data {
    project: ProjectItem;
}

export const handler = define.handlers({
    async GET(ctx) {
        const file = await Deno.readTextFile(`./static/${ctx.url.pathname}.md`);

        const data = extract(file);

        const project = {
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

            body: marked.parse(data.body),
        };

        console.log(project);

        return { data: { project } };
    },
});

const LinkStyle =
    "inline-block w-14 h-14 p-2 rounded-full transition-shadow duration-200 shadow-sm hover:shadow-lg";

export default function Home({ data }: PageProps<Data>) {
    return (
        <>
            <Head>
                <style>
                </style>
            </Head>
            <div>
                <Header location="/projects" />
                <main className="min-h-screen lg:w-3/5 pt-16 my-0 mx-auto">
                    <h1 className="text-3xl text-center mt-8">
                        {data.project.title}
                    </h1>
                    <div className="flex flex-col justify-center items-center w-full lg:p-8">
                        <figure>
                            <img
                                className="max-h-96"
                                src={data.project.eye_catch}
                            />
                            <figcaption>
                                <p className="m-4 whitespace-pre-wrap">
                                    {data.project.description}
                                </p>
                            </figcaption>
                        </figure>
                        <div className="flex flex-row justify-between w-full p-4">
                            <div>
                                {Object.hasOwn(data.project, "github") &&
                                    (
                                        <ExternalIconLink
                                            className={LinkStyle}
                                            path={data.project.github || ""}
                                        />
                                    )}
                                {Object.hasOwn(data.project, "youtube") &&
                                    (
                                        <ExternalIconLink
                                            className={LinkStyle}
                                            path={data.project.youtube || ""}
                                        />
                                    )}
                                {Object.hasOwn(data.project, "x") &&
                                    (
                                        <ExternalIconLink
                                            className={LinkStyle}
                                            path={data.project.x || ""}
                                        />
                                    )}
                            </div>
                            <a
                                href={data.project.url}
                                className="p-4 rounded-full bg-opc-secondary text-white"
                            >
                                {data.project.title}へはこちら
                            </a>
                        </div>
                    </div>
                    <article className="bg-white mt-4">
                        <article
                            data-color-mode="light"
                            data-light-theme="light"
                            data-dark-theme="dark"
                            className="p-8 my-0 mx-auto markdown"
                            dangerouslySetInnerHTML={{
                                __html: data.project.body,
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
