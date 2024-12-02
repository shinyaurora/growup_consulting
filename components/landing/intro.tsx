import { Fragment } from "react";

const LandingIntro = () => {
    return (
        <div className="relative w-full h-screen -mt-16">
            <video className="absolute w-full h-full object-cover -z-10" autoPlay muted playsInline loop>
                <source src="/assets/video/intro.mp4" />
            </video>
            <div className="bg-black/60 absolute top-0 w-full h-full -z-10"></div>

            <div className="flex w-full h-full items-center justify-center flex-col px-8">
                <div className="w-full md:w-[600px]">
                    <div className="w-full text-left">
                        <p className="text-2xl md:text-3xl xl:text-4xl text-white font-semibold">Look for Your <br /> Dream Job with Ease in the US</p>
                        <h4 className="font-semibold text-white/70 text-md md:text-lg xl:text-xl mt-2 mb-8">Get free quotes within minutes</h4>
                    </div>
                    <div className="w-full flex">
                        <input
                            className="border-2 border-slate-300 rounded-l-md text-white px-3 py-3 outline-none focus:outline-1 bg-transparent flex-1 shadow-md"
                            placeholder="What services can you offer?"
                            />
                        <div
                            className="hidden md:flex border-slate-300 rounded-r-md border-2 text-white px-2 py-3 outline-none focus:outline-1 bg-transparent w-40 border-l-0 items-center"
                        >
                            <span className="mr-2 text-slate-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <input
                                className="bg-transparent outline-none "
                                placeholder="Zip Code"
                            />
                        </div>
                        <button
                            className="shadow-md bg-blue-500 text-white text-md font-semibold px-4 md:px-8 py-3 rounded mx-2"
                        >
                            <span className="block md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </span>
                            <span className="hidden md:block">Search</span>
                        </button>
                    </div>
                    <div className="mt-4 text-slate-300 text-sm">
                        <span className="font-semibold">Popular Keywords: </span>
                        {
                            ["frontend", "backend", "engineer"].map((item, idx) => {
                                return (
                                    <Fragment key={idx}>
                                        <span className="hover:underline cursor-pointer" key={idx}>{item}</span>
                                        {idx !== ["frontend", "backend", "engineer"].length - 1 && ', '}
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingIntro;