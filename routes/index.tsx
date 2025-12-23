import { define } from "../utils.ts";

import { Header } from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";

import { CircleIntroduce } from "../components/CircleIntroduce.tsx";

export default define.page(function Home() {
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
                    <h2 className="text-4xl text-center py-8">予定</h2>
                    <article className="flex justify-center">
                        <iframe
                            src="https://calendar.google.com/calendar/embed?wkst=1&ctz=Asia%2FTokyo&showTitle=0&showNav=0&showPrint=0&showCalendars=0&showTz=0&src=Yjg0ZGZlYTExMGExMDM1NDc4OGE5Nzg2NGQ0OGMwNGEwYmRkNzRkZDBmNzQyNWRiMDMwNDk0NDU5OTEzM2ZhMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23f4511e"
                            frameborder="0"
                            scrolling="no"
                            className="w-full lg:w-2/3 aspect-square lg:aspect-video"
                        >
                        </iframe>
                    </article>
                </article>
            </main>
            <Footer />
        </div>
    );
});
