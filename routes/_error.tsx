import { define } from "../utils.ts";

import { Head } from "fresh/runtime";

import { Header } from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";

import HistoryBack from "../islands/HistoryBack.tsx";
import { HttpError, PageProps } from "fresh";

export default define.page(function ErrorPage(props: PageProps) {
    const error = props.error;

    if (error instanceof HttpError) {
        const status = error.status;
        if (status === 404) {
            return (
                <>
                    <Head>
                        <title>404 - Page not found</title>
                    </Head>
                    <div>
                        <Header location="/" />
                        <main className="min-h-screen pt-16">
                            <div className="mt-16 text-center">
                                <h1 className="mt-32 text-3xl">
                                    404 Page Not Found
                                </h1>
                                <p>
                                    お探しのページは見つかりませんでした。
                                </p>
                                <HistoryBack>前のページに戻る</HistoryBack>
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
                <title>Oh no...</title>
            </Head>

            <div>
                <Header location="/" />
                <main className="min-h-screen pt-16">
                    <div className="mt-16 text-center">
                        <h1 className="mt-32 text-3xl">
                            404 Page Not Found
                        </h1>
                        <p>
                            お探しのページは見つかりませんでした。
                        </p>
                        <HistoryBack>前のページに戻る</HistoryBack>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
});