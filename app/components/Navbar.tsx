"use client";

import { usePathname } from "next/navigation";
import Button from "./Elements/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { IdentityContext } from "../identity-provider";

interface iMenuItems {
    label: string;
    link: string;
    caret?: boolean;
}
const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const channelName = useContext(IdentityContext);

    const handleButtonRight = () => {
        if (pathName === "/login") {
            router.push("#");
        } else if (pathName === "/" && !window.localStorage.getItem("session-login")) {
            router.push("/login");
        } else {
            window.localStorage.removeItem("session-login");
            router.push("/login");
        }
    };

    const [butotnText, setButtonText] = useState("Sign Out");
    useEffect(() => {
        if (pathName === "/login") setButtonText("Sign Up");
        else if (pathName !== "/login" && !window.localStorage.getItem("session-login")) setButtonText("Sign In");
        else setButtonText("Sign Out");
    }, [pathName]);

    const [menuOpen, setMenuOpen] = useState(false);
    const listMenuItems: Array<iMenuItems> = [
        {
            label: "Home",
            link: "/home",
            caret: false,
        },
        {
            label: "Browse",
            link: "#",
            caret: true,
        },
        {
            label: "My Library",
            link: "#",
            caret: true,
        },
    ];

    return (
        <nav className="main-navbar">
            <div className="mx-auto max-w-7xl px-6 xl:px-2">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button  */}
                        <button
                            type="button"
                            className="relative p-1 ring-1 ring-white inline-flex items-center justify-center rounded-md text-white focus:outline-none"
                            aria-controls="mobile-menu"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-expanded="false"
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${menuOpen ? "hidden" : "block"} h-6 w-6 text-white`}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg
                                className={`${menuOpen ? "block" : "hidden"} h-6 w-6 text-white`}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">{channelName}</div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {listMenuItems.map(({ label, link, caret }) => (
                                    <Link
                                        key={label}
                                        href={link}
                                        className={`rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700  ${
                                            pathName === link && "bg-gray-700"
                                        }`}
                                    >
                                        {label}
                                        {caret && <FaCaretDown />}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-0 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <Button label={butotnText} onClick={handleButtonRight} />
                    </div>
                </div>
            </div>

            <div className={`sm:hidden z-10 bg-primary w-full absolute ${menuOpen ? "height-full block" : "height-0 hidden"}`} id="mobile-menu">
                <div className="space-y-1 px-6 pb-3 pt-2">
                    {listMenuItems.map(({ label, link, caret }) => (
                        <Link
                            key={label}
                            href={link}
                            className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 ${pathName === link && "bg-gray-700"}`}
                        >
                            {label}
                            {caret && <FaCaretDown />}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
