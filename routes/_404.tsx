import { Head } from "$fresh/runtime.ts";

import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

import HistoryBack from "../islands/HistoryBack.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div>
		<Header location="/"/>
		<main className="min-h-screen pt-16">
			<div className="mt-16 text-center">
				<h1 className="mt-32 text-3xl">404 Page Not Found</h1>
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
