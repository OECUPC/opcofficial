import { ComponentChildren } from "preact";

interface Props {
    children: ComponentChildren;
}

export default function HistoryBack(data: Props) {
    return (
        <a href="#" onClick={() => history.back()}>
            {data.children}
        </a>
    );
}
