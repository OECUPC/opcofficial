import { define } from "../utils.ts";

import { PageProps } from "fresh";

import { Header } from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";

import { BlogItem } from "../types/BlogItem.ts";

interface Data {
    blogs: BlogItem[];
}

export const handler = define.handlers({
    async GET(ctx) {
        const API_KEY = Deno.env.get("MICROCMS_API_KEY") || "";
        const ENDPOINT = `${
            Deno.env.get("MICROCMS_API_ENDPOINT") || ""
        }blogs?limit=5&orders=-updatedAt`;

        const blogsResponse = await fetch(ENDPOINT, {
            headers: { "X-MICROCMS-API-KEY": API_KEY! },
        });

        if (!blogsResponse.ok) {
            return new Response("Failed to fetch blogs", { status: 500 });
        }

        const blogsData = (await blogsResponse.json())["contents"];

        const blogs = [];

        for (const elem of blogsData) {
            blogs.push({
                id: elem["id"],
                title: elem["title"],
                updated_at: new Date(elem["updatedAt"]),
                eyecatch: elem["eyecatch"],
                description: elem["description"],
                content: elem["content"],
            });
        }

        return { data: { blogs }};
    },
});

export default define.page(function Home({ data }: PageProps<Data>) {
    return (
        <div>
            <Header location="/blogs" />
            <main className="min-h-screen pt-16">
                <h1 className="text-3xl text-center mt-8">
                    記事
                </h1>
                <article className="grid gap-8 grid-cols-1 lg:grid-cols-3 p-8">
                    {data.blogs.length <= 0
                        ? <p>現在掲載中の記事はありません。</p>
                        : data.blogs.map((elem) => (
                            <section className="w-full rounded-lg transition-shadow duration-300 shadow-sm hover:shadow-lg">
                                <a
                                    className="text-center"
                                    href={`/blog/${elem.id}`}
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
            </main>
            <Footer />
        </div>
    );
});