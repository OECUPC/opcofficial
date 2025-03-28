import { Navigations } from "../data/Navigations.ts";

interface Data {
    location: string;
}

export default function Header(data: Data) {
    console.log(data.location);
    return (
        <header className="fixed top-0 bg-white shadow-md">
            <nav className="flex justify-around w-screen h-16">
                <a className="flex justify-start items-center" href="/#">
                    <img src="/images/icons/OPC_Icon.svg" className="size-16" />
                    <p>OECUPC</p>
                </a>

                <ul className="hidden lg:flex lg:flex-row">
                    {Navigations.map((elem) => (
                        <li>
                            {(data.location === elem.path)
                                ? (
                                    <a
                                        className="
									inline-block
									relative
									h-16 min-w-32 pb-1
									leading-[4] align-middle text-center

									inset-shadow-sm

									before:content-['']
									before:absolute
									before:left-0 before:bottom-0
									before:w-full before:h-0.5

									before:bg-opc-secondary"
                                        href={elem.path}
                                    >
                                        {elem.title}
                                    </a>
                                )
                                : (
                                    <a
                                        className="
									inline-block
									relative
									h-16 min-w-32 pb-1
									leading-[4] align-middle text-center

									hover:before:scale-x-100
									hover:before:origin-left

									before:content-['']
									before:absolute
									before:left-0 before:bottom-0
									before:w-full before:h-0.5

									before:bg-opc-secondary

									before:origin-right before:transition-transform
									before:scale-x-0 before:duration-200"
                                        href={elem.path}
                                    >
                                        {elem.title}
                                    </a>
                                )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
