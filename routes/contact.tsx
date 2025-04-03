import { Header } from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";

import { ExternalIconLink } from "../components/ExternalIconLink.tsx";

export default function Home() {
	const BaseFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSc41n7G9mhWQTvSMO-TtqL8Hd-sejOb5ZkS4thMES0f57N7fA/viewform";
    return (
        <div>
            <Header location="/contact" />
            <main className="min-h-screen lg:w-3/5 pt-16 my-0 mx-auto">
                <h1 className="text-3xl text-center mt-8">
                    お問い合わせ
                </h1>
                <article className="p-4">
					<section>
						<p>以下の埋め込みフォーム、</p>
						<p>または<ExternalIconLink value="こちらのリンク" path={`${BaseFormURL}?usp=sf_link`} className="inline-block"/>よりご連絡ください。</p>
					</section>
					<iframe
						className="w-full h-svh"
						src={`${BaseFormURL}?embedded=true`}
					>
						読み込んでいます...
					</iframe>
                </article>
            </main>
            <Footer />
        </div>
    );
}
