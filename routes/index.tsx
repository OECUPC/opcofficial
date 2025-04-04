import { Handlers, PageProps } from "$fresh/server.ts";

import { Header } from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";

import { NewsItem } from "../types/NewsItem.ts";
import { CircleIntroduce } from "../components/CircleIntroduce.tsx";

interface Data {
    news: NewsItem[];
}

export const handler: Handlers<Data> = {
    async GET(_req, ctx) {
        const API_KEY = Deno.env.get("MICROCMS_API_KEY") || "";
        const ENDPOINT = `${
            Deno.env.get("MICROCMS_API_ENDPOINT") || ""
        }news?limit=5&orders=-updatedAt`;

        const newsResponse = await fetch(ENDPOINT, {
            headers: { "X-MICROCMS-API-KEY": API_KEY! },
        });

        if (!newsResponse.ok) {
            return new Response("Failed to fetch news", { status: 500 });
        }

        const newsData = (await newsResponse.json())["contents"];

        const data: Data = {
            news: [],
        };

        for (const elem of newsData) {
            data.news.push({
                id: elem["id"],
                title: elem["title"],
                updated_at: new Date(elem["updatedAt"]),
                content: elem["content"],
                eyecatch: elem["eyecatch"],
                path: elem["path"],
            });
        }

        return ctx.render(data);
    },
};

export default function Home({ data }: PageProps<Data>) {
    return (
        <div className="bg-fixed bg-center bg-cover bg-[url(/images/backgrounds/activity_bg.webp)]">
            <Header location="/index" />
            <main className="min-h-screen pt-16">
                <div className="
				w-full lg:w-2/5 lg:max-w-full lg:h-80
				mx-auto lg:ml-16 my-44 p-4

				bg-white
				rounded-xl
				">
                    <h1 className="text-2xl lg:text-3xl my-4 text-center">
                        OECU Programming Circle
                    </h1>
                    <div className="flex flex-col justify-center w-full h-60">
                        <CircleIntroduce />
                    </div>
                </div>
                <article className="bg-white">
                    <h2 className="text-4xl text-center py-8">最新情報</h2>
                    <article className="grid gap-8 grid-cols-1 lg:grid-cols-3 p-8">
                        {data.news.map((elem) => (
                            <section className="w-full rounded-lg transition-shadow duration-300 shadow-sm hover:shadow-lg">
                                <a
                                    className="text-center"
                                    href={0 < elem.path?.length
                                        ? elem.path
                                        : ""}
                                >
                                    <figure>
                                        <img
                                            className="w-full h-56 shadow-sm object-cover object-center"
                                            src={(0 < elem.eyecatch?.url.length)
                                                ? elem.eyecatch.url
                                                : "/images/no_image.webp"}
                                        />
                                        <figcaption className="mt-2">
                                            <h3 className="text-2xl">
                                                {elem.title}
                                            </h3>
                                            <p className="text-gray-400">
                                                {elem.updated_at.toLocaleString(
                                                    "ja-JP",
                                                    {
                                                        timeZone: "Asia/Tokyo",
                                                    },
                                                )}
                                            </p>
                                            <p className="whitespace-pre-wrap my-2">
                                                {elem.content}
                                            </p>
                                        </figcaption>
                                    </figure>
                                </a>
                            </section>
                        ))}
                    </article>
                    <h2 className="text-4xl text-center py-8">予定</h2>
                    <article>
                    </article>
                </article>
            </main>
            <Footer />
        </div>
    );
}
