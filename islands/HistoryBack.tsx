import { ComponentChildren } from "preact";

interface Props {
    children: ComponentChildren;
}

export default function HistoryBack(data: Props) {
    return (
        <p>
            <a href="#" onClick={() => history.back()}>
                {data.children}
            </a>
        </p>
    );
}
