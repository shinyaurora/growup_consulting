import Link from "next/link"

const Footer = () => {
    return (
        <div className="bg-slate-900 pt-32 pb-10 px-8">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between border-b border-b-slate-400 pb-16">
                    <div className="flex">
                        <div className="mx-4">
                            <h2 className="text-white text-lg font-semibold">For Customers</h2>
                            <div className="text-slate-400 mt-4 flex flex-col">
                                <Link href="/" className="my-1 hover:underline text-sm">How it Works</Link>
                                <Link href="/" className="my-1 hover:underline text-sm">Help Center</Link>
                            </div>
                        </div>
                        <div className="mx-4">
                            <h2 className="text-white text-lg font-semibold">About</h2>
                            <div className="text-slate-400 mt-4 flex flex-col">
                                <Link href="/" className="my-1 hover:underline text-sm">About WeGrowUp</Link>
                                <Link href="/" className="my-1 hover:underline text-sm">Careers</Link>
                                <Link href="/" className="my-1 hover:underline text-sm">What we also do</Link>
                            </div>
                        </div>
                        <div className="mx-4">
                            <h2 className="text-white text-lg font-semibold">Policy</h2>
                            <div className="text-slate-400 mt-4 flex flex-col">
                                <Link href="/" className="my-1 hover:underline text-sm">Terms & Conditions</Link>
                                <Link href="/" className="my-1 hover:underline text-sm">Cookie policy</Link>
                                <Link href="/" className="my-1 hover:underline text-sm">Privacy policy</Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <h2 className="text-white text-lg font-semibold mx-4 md:mx-0">Contact us</h2>
                        <div className="text-slate-400 flex flex-col mt-4 px-4 md:px-0">
                            <Link href="mailto:wegrowup@gmail.com" className="text-slate-400 text-sm">wegrowup@gmail.com</Link>
                            <Link href="mailto:wegrowup@gmail.com" className="text-slate-400 text-md mt-2 mb-1">+1 (856) 320-8978</Link>
                            <p className="text-slate-400 text-sm">(open 24 hours a day, 7 days a week)</p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto pt-16">
                    <h2 className="text-center text-md text-white">© Copyright 2024 | Global Limited.</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer