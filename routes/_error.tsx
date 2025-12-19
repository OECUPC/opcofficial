import { define } from "../utils.ts";

import { Head } from "fresh/runtime";

import { Header } from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";

import { HttpError, PageProps } from "fresh";

export default define.page(function ErrorPage(props: PageProps) {
    const error = props.error;

    console.log("== Error ==");
    console.log(error);

    if (error instanceof HttpError) {
        const status = error.status;

        if (status === 404) {
            return (
                <>
                    <Head>
                        <title>お探しのページは見つかりませんでした。</title>
                    </Head>

                    <div>
                        <Header location="/" />
                        <main className="min-h-screen pt-16">
                            <div className="mt-16 text-center">
                                <h1 className="mt-32 text-3xl">
                                    404 Page not Found
                                </h1>
                                <p>
                                    お探しのページは見つかりませんでした。
                                </p>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </>
            );
        }
    }

    return (
        <>
            <Head>
                <title>Something went wrong.</title>
            </Head>

            <div>
                <Header location="/" />
                <main className="min-h-screen pt-16">
                    <div className="mt-16 text-center">
                        <h1 className="mt-32 text-3xl">
                            Something went wrong.
                        </h1>
                        <p>
                            ページで問題が発生しました。
                        </p>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
});
