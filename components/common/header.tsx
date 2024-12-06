'use client'

import { FC, useEffect, useState } from "react";
// import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
// import Link from "next/link";

const Header: FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', (/*e*/) => {
            if (window.scrollY > 100) {
                
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            if (window.scrollY > window.innerHeight) {
                setShowSearch(true);
            } else {
                setShowSearch(false);
            }
        })
    }, [])

    return (
        <div className={`h-20 flex items-center px-8 justify-between fixed w-full t-0 ${isScrolled ? 'backdrop-blur-xl' : 'bg-transparent'} z-20`}>
            <div className="">
                <span className="font-black text-3xl text-white">WeGrowUp</span>
            </div>
            <div className="flex items-center">
                <div className={`w-50 rounded border border-slate-400 px-3 h-8 mx-5 ${showSearch ? 'hidden md:flex' : 'hidden'}`}>
                    <input type="text" className="py-2 bg-transparent outline-none text-white flex-1 text-sm" placeholder="Find works" />
                    <button className="text-white text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>
                {/* <Menu>
                    <MenuButton className="block md:hidden mx-2">
                        <span className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </span>
                    </MenuButton>
                    <MenuItems anchor="bottom start" className="z-30 border mt-2 border-slate-300 bg-gray-700/30 backdrop-blur-md p-1 rounded-xl">
                        <MenuItem key={0}>
                            <Link href="/settings">
                                <div className="text-white cursor-pointer hover:bg-slate-700 text-sm px-3 py-2 w-40 rounded-lg flex items-center">
                                    <span className="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                        </svg>
                                    </span>
                                    <span>
                                        Find Work
                                    </span>
                                </div>
                            </Link>
                        </MenuItem>
                        <MenuItem key={1}>
                            <Link href="/settings">
                                <div className="text-white cursor-pointer hover:bg-slate-700 text-sm px-3 py-2 w-40 rounded-lg flex items-center">
                                    <span className="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                        </svg>
                                    </span>
                                    <span>
                                        About us
                                    </span>
                                </div>
                            </Link>
                        </MenuItem>
                        <MenuItem key={2}>
                            <Link href="/settings">
                                <div className="text-white cursor-pointer hover:bg-slate-700 text-sm px-3 py-2 w-40 rounded-lg flex items-center">
                                    <span className="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                        </svg>
                                    </span>
                                    <span>
                                        Careers
                                    </span>
                                </div>
                            </Link>
                        </MenuItem>
                    </MenuItems>
                </Menu> */}
                <button className="text-white font-semibold text-sm mx-3">Sign in</button>
                <button className="text-white font-semibold text-sm mx-3">Join us   </button>
            </div>
        </div>
    )
}

export default Header;