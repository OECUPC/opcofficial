import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
    return (
        <html>
            <head>
                {/* メタ */}
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />

                {/* タイトル */}
                <title>OECUプログラミングサークル</title>
                <meta
                    property="og:title"
                    content="OECUプログラミングサークル"
                />

                {/* OGP */}
                <meta
                    name="description"
                    content="OECUPCは、大阪電気通信大学内で活動しているプログラミングサークルです。競技プログラミングへの参加や勉強会など、様々な活動を通じてプログラミングスキルの向上を目指しています。興味のある方は、ぜひ参加してみてください。"
                />
                <meta
                    property="og:description"
                    content="OECUPCは、大阪電気通信大学内で活動しているプログラミングサークルです。競技プログラミングへの参加や勉強会など、様々な活動を通じてプログラミングスキルの向上を目指しています。興味のある方は、ぜひ参加してみてください。"
                />
                <meta
                    property="og:url"
                    content="https://opc.deno.dev/"
                />
                <meta
                    property="og:image"
                    content="images/icons/icon-512x512.png"
                />
                <meta name="twitter:card" content="summary" />

                {/* サイト アイコン */}
                <link
                    rel="apple-touch-icon"
                    type="image/png"
                    href="/images/icons/apple-touch-icon-180x180.png"
                />
                <link
                    rel="icon"
                    href="/images/icons/favicon.ico"
                />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@500&display=swap"
                    rel="stylesheet"
                />

{/*
                
                <link rel="stylesheet" href="/styles/css/styles.css" />
                <link rel="stylesheet" href="/styles/css/view-transition.css" />
*/}
            </head>
            <body>
                <Component />
            </body>
        </html>
    );
});
