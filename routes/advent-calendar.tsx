import { define } from "../utils.ts";

import { Header } from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";

const Guidelines = [
    "承諾を得ていない個人情報や守秘義務がある情報を掲載しないこと。なるべく個人名を掲載しないこと。ペンネームでの投稿を推奨します。",
    "他者の権利を侵害しないこと。",
    "法律に違反しないこと。また、法律違反を推奨するような内容を含まないこと。",
    "大阪電気通信大学生の一員として自覚と責任をもつこと。また、大阪電気通信大学が定めるソーシャルメディアガイドラインに従うこと。",
    "ともに知見や経験、ノウハウや知識を共有でき、能力向上を果たすことができる記事を記述すること。",
    "テーマに即していること。なお、テーマとは「コンピュータ」と「グラフィックス」に関わるもの全体ですので、コンピュータに全く関係のない記事を掲載することはおやめください。",
    "他者に対する誹謗中傷を行わないこと。また、他者の考えについて正当な理由なく批判・否定しないこと。対立意見を提示する場合は建設的な議論を前提にすること。",
];

export default define.page(function Home() {
    return (
        <div>
            <Header location="/advent-calendar" />
            <main className="min-h-screen lg:w-3/5 py-16 my-0 mx-auto">
                <article>
                    <h1 className="text-3xl text-center py-8">
                        OECUアドベントカレンダー
                    </h1>
                    <section>
                        <figure>
                            <img
                                src="/images/qiita-adcal-ogp.webp"
                                className="w-full"
                            />
                        </figure>
                    </section>
                    <article>
                        <h2 className="text-2xl my-2">ガイドライン</h2>
                        <section>
                            <p>
                                OECUアドベントカレンダーに投稿される方は以下のガイドラインをお守りください。
                            </p>
                            <ul className="ml-8 list-disc">
                                {Guidelines.map((elem) => (
                                    <li>
                                        <p>{elem}</p>
                                    </li>
                                ))}
                            </ul>
                            <p>
                                また、<a href="https://help.qiita.com/ja/articles/qiita-community-guideline">
                                    Qiita のコミュニティガイドライン
                                </a>に従ってください。
                            </p>
                        </section>
                    </article>
                    <article>
                        <h2 className="text-2xl my-2">
                            これまでのアドベントカレンダー
                        </h2>
                        <section>
                            <p>
                                これまでに、開催したアドベントカレンダーは以下に掲載します。
                            </p>
                            <ul className="ml-8 list-disc">
                                <li>
                                    <p>
                                        <a href="https://qiita.com/advent-calendar/2024/oecu">
                                            2024年
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </section>
                    </article>
                </article>
            </main>
            <Footer />
        </div>
    );
});