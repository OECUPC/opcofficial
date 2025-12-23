import { HttpError, PageProps } from "fresh";
import { Head } from "fresh/runtime";

import { define } from "../utils.ts";

import { Header } from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";

import { STATUS_TEXT } from "@std/http/status";

import HistoryBack from "../islands/HistoryBack.tsx";

function ErrorPage(props: { code: number; description: string }) {
    return (
        <>
            <Head>
                <title>{props.description}</title>
            </Head>
            <div>
                <Header location="/" />
                <main className="min-h-screen pt-16">
                    <div className="mt-16 text-center">
                        <h1 className="mt-32 text-3xl">
                            {/* STATUS_TEXTのkeyがanyなのでエラー抑制のためにas keyof typeof */}
                            {props.code} {STATUS_TEXT[
                                props.code as keyof typeof STATUS_TEXT
                            ]}
                        </h1>
                        <p className="m-4">
                            {props.description}
                        </p>

                        <HistoryBack>
                            ひとつ前のページに戻る
                        </HistoryBack>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default define.page((props: PageProps) => {
    const error = props.error;

    console.log("== Error ==");
    console.log(error);

    if (error instanceof HttpError) {
        const status = error.status;

        if (status === 404) {
            return ErrorPage({
                code: 404,
                description: "お探しのページは見つかりませんでした。",
            });
        }
    }

    return ErrorPage({
        code: 500,
        description: "問題が発生しました。",
    });
});
