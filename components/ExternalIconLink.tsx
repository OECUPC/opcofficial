import IconLink from "tabler_icons/link.tsx";

import IconBrandGithub from "tabler_icons/brand-github.tsx";
import IconBrandX from "tabler_icons/brand-x.tsx"
import { JSX } from "preact/jsx-runtime/src/index.d.ts";

interface Data {
    path: string;
    value?: string;
    className?: string;
}

interface IconType {
    [x: string]: (
        props: { size?: number; color?: string; stroke?: number },
    ) => JSX.Element;
}

const IconMap: IconType = {
    "https://github.com": IconBrandGithub,
    "https://x.com": IconBrandX
};

export function ExternalIconLink({ path, value, className }: Data) {
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
            target="_blank"
        >
            <IconComponent class={className} />
            {value}
        </a>
    );
}
