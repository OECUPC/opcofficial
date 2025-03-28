import { JSX } from "preact/src/index.d.ts";
import { ComponentChildren } from "preact";

interface Props {
    children: ComponentChildren;
}

export default function HistoryBack(data: Props & JSX.HTMLAttributes) {
    return (
        <a href="#" onClick={() => history.back()}>
            {data.children}
        </a>
    );
}
