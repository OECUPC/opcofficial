import { Header } from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";

import { CircleIntroduce } from "../components/CircleIntroduce.tsx";
import { ExternalIconLink } from "../components/ExternalIconLink.tsx";
import { SNS } from "../data/SNS.ts";

const Contents = [
    {
        title: "目的",
        content: <CircleIntroduce />,
        image: "/images/icons/icon-512x512.png",
    },
    {
        title: "活動内容",
        content: (
            <>
                <ul className="ml-8 list-disc">
                    <li>プログラミングを楽しむ！</li>
                    <li>競技プログラミング(AtCoder等)</li>
                    <li>アプリ開発(Web/ネイティブ)</li>
                    <li>プログラミングの問題を解く</li>
                    <li>プログラミングの講座</li>
                    <li>情報系資格の勉強会</li>
                </ul>
                <p>
                    などなど...<br />
                    このサイトも部員がイチから制作しています！
                </p>
            </>
        ),
        image: "/images/activitie.webp",
    },
    {
        title: "活動場所",
        content: (
            <>
                <ul className="ml-8 list-disc">
                    <li>
                        大阪電気通信大学 四条畷キャンパス(空き教室など)
                    </li>
                    <li>
                        大阪電気通信大学 寝屋川キャンパス(空き教室など)
                    </li>
                    <li>オンライン(Discord等)</li>
                </ul>
                <p>
                    サークルの部室はありません！<br />
                    空き教室やオンラインなどで活動しています！<br />
                    活動は自由参加ですので気軽に参加してください
                </p>
            </>
        ),
        image: "/images/place.webp"
    },
    {
        title: "相談・入部等",
        content: (
            <>
                <p>
                    <ExternalIconLink path={SNS.x} value="公式X(旧Twitter)" className="inline-block" />のDM<br />
                    または、<a href="/contact">お問い合わせ</a>までご連絡ください！
                </p>
            </>
        ),
        image: "/images/profile.webp"
    }
];

export default function Home() {
    return (
        <div>
            <Header location="/about" />
            <main className="min-h-screen lg:w-3/5 pt-16 my-0 mx-auto">
                <h1 className="text-3xl text-center mt-8">
                    サークルについて
                </h1>
                <article>
                    {Contents.map((content, i) => (
                        <section
                            className={`flex max-lg:flex-col flex-row${
                                i % 2 === 0 ? "" : "-reverse"
                            } items-center my-4`}
                        >
                            <div className="lg:w-1/2 w-full p-4">
                                <h2 className="text-2xl my-2">
                                    {content.title}
                                </h2>
                                {content.content}
                            </div>
                            <figure className="lg:w-1/2 w-full">
                                <img
                                    src={content.image}
                                    alt=""
                                    className="aspect-video object-cover"
                                />
                            </figure>
                        </section>
                    ))}
                    {
                        /*
                    <div className="flex flex-row justify-center items-center">
                        <section>
                            <h2 className="text-2xl">目的</h2>
                            <CircleIntroduce />
                        </section>
                        <figure>
                            <img src="/images/icons/icon-512x512.png" alt="" />
                        </figure>
                    </div>
                    <div className="flex flex-row-reverse justify-center items-center">
                        <section>
                            <h2 className="text-2xl">活動内容</h2>
                            <ul className="ml-8 list-disc">
                                <li>プログラミングを楽しむ！</li>
                                <li>競技プログラミング(AtCoder等)</li>
                                <li>アプリ開発(Web/ネイティブ)</li>
                                <li>プログラミングの問題を解く</li>
                                <li>プログラミングの講座</li>
                                <li>情報系資格の勉強会</li>
                            </ul>
                            <p>
                                などなど...<br />
                                このサイトも部員がイチから制作しています！
                            </p>
                        </section>
                        <figure>
                            <img src="/images/activitie.webp" alt="" />
                        </figure>
                    </div>
                    <h2 className="text-2xl">活動場所</h2>
                    <section>
                        <ul className="ml-8 list-disc">
                            <li>
                                大阪電気通信大学 四条畷キャンパス(空き教室など)
                            </li>
                            <li>
                                大阪電気通信大学 寝屋川キャンパス(空き教室など)
                            </li>
                            <li>オンライン(Discord等)</li>
                        </ul>
                        <p>
                            サークルの部室はありません！<br />
                            空き教室やオンラインなどで活動しています！<br />
                            活動は自由参加ですので気軽に参加してください
                        </p>
                    </section>
                    */
                    }
                </article>
            </main>
            <Footer />
        </div>
    );
}
