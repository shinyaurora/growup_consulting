"use client"

import { useState } from "react";

const LandingTestominal = () => {
    const [current, setCurrent] = useState<number>(0);

    const sayingList = [
        {
            id: 1,
            avatar: "/assets/image/avatar1.png",
            name: "Tara",
            saying: "I have used Bark twice now for two completely different services and I’ve had a fantastic experience both times!"
        },
        {
            id: 2,
            avatar: "/assets/image/avatar2.png",
            name: "Tara",
            saying: "One of the most honest experiences I've had on the web, ever! I recommend Bark for searching for business professionals."
        },
        {
            id: 3,
            avatar: "/assets/image/avatar3.png",
            name: "Tara",
            saying: "Excellent service. They responded much faster than I had anticipated and I was left with a wide range of offers. Brilliant work, Bark!"
        },
        {
            id: 4,
            avatar: "/assets/image/avatar4.png",
            name: "Tara",
            saying: "Both companies that I responded to have been interactive and tended to my concerns and needs, and both were friendly and professional."
        },
        {
            id: 5,
            avatar: "/assets/image/avatar5.png",
            name: "Tara",
            saying: "Very quickly, had 4 replies. The guy from SJ driveways and landscapes was very efficient and friendly and the work was completed in a short time."
        },
        {
            id: 6,
            avatar: "/assets/image/avatar6.png",
            name: "Tara",
            saying: "I found using Bark amazing. Posted a request and had 5 contacts within 30 minutes. Excellent service."
        },
        {
            id: 7,
            avatar: "/assets/image/avatar7.png",
            name: "Tara",
            saying: "Simply Amazing. Made a booking within minutes!"
        },
        {
            id: 8,
            avatar: "/assets/image/avatar8.png",
            name: "Tara",
            saying: "Bark was easy to use and I received sensible quotes. I had a professional visit the next day and he did an excellent job."
        },
        {
            id: 9,
            avatar: "/assets/image/avatar9.png",
            name: "Tara",
            saying: "Quick and easy service. Got responses instantly and the next day the job had been completed."
        },
        {
            id: 10,
            avatar: "/assets/image/avatar10.png",
            name: "Tara",
            saying: "Great service, I'd totally recommend it. Excellent way to find a professional you need."
        },
        {
            id: 11,
            avatar: "/assets/image/avatar11.png",
            name: "Tara",
            saying: "I’ve used Bark twice and was really pleased with the quick response I received."
        },
        {
            id: 12,
            avatar: "/assets/image/avatar12.png",
            name: "Tara",
            saying: "I used Bark for a last minute job I needed and the whole process was seamless."
        },
        {
            id: 13,
            avatar: "/assets/image/avatar13.png",
            name: "Tara",
            saying: "Within 10 minutes of making my enquiry, I had contact from 2 interested companies ready to assist me."
        }
    ]

    return (
        <div className=" bg-slate-950 py-16">
            <h1 className="text-white text-4xl font-black text-center mb-4">Our Customers Are Saying</h1>
            <div className="w-full inline-flex flex-nowrap overflow-x-hidden overflow-y-hidden py-10">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    {
                        sayingList.map((item, idx) => {
                            return (
                                <li key={idx} className={`relative w-96 h-56 bg-black border-2 transform ${idx % 3 == 1 ? 'rotate-2' : idx % 3 == 2 ? '-rotate-2' : 'rotate-3'} transition-transform duration-300 cursor-pointer hover:rotate-0 border-slate-800 rounded-xl px-8 py-6 shadow-xl flex justify-center flex-col`}>
                                    <div className="flex items-center w-full rounded-b-lg">
                                        <p className="text-md text-slate-200">{`"${item.saying}"`}</p>
                                    </div>
                                    <div className="flex mt-4 items-center justify-end">
                                        <img className="w-10 h-10 rounded-full" src={item.avatar} />
                                        <div className="flex flex-col ml-2 text-white text-sm">
                                            <span>{`- ${item.name} -`}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    {
                        sayingList.map((item, idx) => {
                            return (
                                <li key={idx} className={`relative w-96 h-56 bg-black border-2 transform ${idx % 4 == 1 ? 'rotate-2' : idx % 4 == 2 ? '-rotate-2' : idx % 4 == 3 ? 'rotate-3' : '-rotate-3'} transition-transform duration-300 cursor-pointer hover:rotate-0 border-slate-800 rounded-xl px-8 py-6 shadow-xl flex justify-center flex-col`}>
                                    <div className="flex items-center w-full rounded-b-lg">
                                        <p className="text-md text-slate-200">{`"${item.saying}"`}</p>
                                    </div>
                                    <div className="flex mt-4 items-center justify-end">
                                        <img className="w-10 h-10 rounded-full" src={item.avatar} />
                                        <div className="flex flex-col ml-2 text-white text-sm">
                                            <span>{`- ${item.name} -`}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default LandingTestominal;