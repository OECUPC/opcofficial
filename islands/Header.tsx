import { Navigations } from "../data/Navigations.ts";

interface Data {
    location: string;
}

export function Header(data: Data) {
    console.log(data.location);
    return (
        <header className="fixed top-0 bg-white shadow-md">
            <nav className="flex justify-around w-screen h-16">
                <a className="flex items-center" href="/#">
                    <img src="/images/icons/OPC_Icon.svg" className="size-16" />
                    <p>OECUPC</p>
                </a>

                <input
                    type="checkbox"
                    id="toggle-nav"
                    className="peer hidden"
                />
                <label
                    htmlFor="toggle-nav"
                    className={`
						toggle-nav-label
						global-nav__toggle-label z-50 block lg:hidden max-lg:fixed max-lg:top-0 max-lg:right-6 h-16 w-12 text-center
					`}
                >
                    <span className="block w-full h-1 mt-6 bg-slate-500 rounded-md">
                    </span>
                    <span className="block w-full h-1 mt-2 bg-slate-500 rounded-md">
                    </span>
                </label>
                <ul className="h-screen lg:flex lg:flex-row max-lg:w-2/3 max-lg:pt-16 max-lg:bg-opc-secondary/70 max-lg:text-white text-center transition-transform duration-200 max-lg:translate-x-full max-lg:peer-checked:translate-x-0">
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
