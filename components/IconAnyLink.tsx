import IconLink from "tabler_icons/link.tsx";

import IconBrandGithub from "tabler_icons/brand-github.tsx";
import { JSX } from "preact/jsx-runtime/src/index.d.ts";

interface Data {
    path: string;
}

interface IconType {
    [x: string]: (
        props: { size?: number; color?: string; stroke?: number },
    ) => JSX.Element;
}

const IconMap: IconType = {
    "https://github.com": IconBrandGithub,
};

export default function IconAnyLink({ path }: Data) {
    let IconComponent = IconLink;

    const findedIndex = Object.keys(IconMap).findIndex((key) => {
        return path.startsWith(key);
    });

    if (0 <= findedIndex) {
        IconComponent = IconMap[Object.keys(IconMap)[findedIndex]];
    }

	if(path.length <= 0) return <></>;

    return (
        <a
            href={path}
            className="inline-block p-2 rounded-full transition-shadow duration-200 shadow-sm hover:shadow-lg"
            target="_blank"
        >
            <IconComponent class="w-8 h-8" />
        </a>
    );
}
