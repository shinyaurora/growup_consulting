import { serialize } from "v8";

const LandingService = () => {
    const serviceList = [
        {
            title: "Accounting",
            imgUrl: "/assets/image/1.jpg",
        },
        {
            title: "Counceling",
            imgUrl: "/assets/image/2.jpg",
        },
        {
            title: "Personal Trainers",
            imgUrl: "/assets/image/3.jpg",
        },
        {
            title: "House Cleaning",
            imgUrl: "/assets/image/4.jpg",
        },
        {
            title: "Web Design",
            imgUrl: "/assets/image/5.jpg",
        },
        {
            title: "Gardening",
            imgUrl: "/assets/image/6.jpg",
        }
    ]


    return (
        <div className="w-full inline-flex flex-nowrap overflow-x-hidden py-32 overflow-y-hidden bg-slate-900">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
            {
                serviceList.map((item, idx) => {
                    return (
                        <li key={idx} className={`transform hover:scale-110 transition-transform duration-300 rounded-lg relative ${idx % 2 ? '-mt-6' : '-mb-6'}`}>
                            <img src={item.imgUrl} alt={item.title} className="rounded-lg" />
                            <div className="h-12 flex items-center absolute left-0 w-full bottom-0 px-4 bg-slate-950/70 rounded-b-lg">
                                <span className="text-lg font-semibold text-white">{item.title}</span>
                            </div>
                        </li>
                    )    
                })       
            }
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {
                    serviceList.map((item, idx) => {
                        return (
                            <li key={idx} className={`transform hover:scale-110 transition-transform duration-300 rounded-lg relative ${idx % 2 ? '-mt-6' : '-mb-6'}`}>
                                <img src={item.imgUrl} alt={item.title} className="rounded-lg" />
                                <div className="h-12 flex items-center absolute left-0 w-full bottom-0 px-4 bg-slate-950/70 rounded-b-lg">
                                    <span className="text-lg font-semibold text-white">{item.title}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default LandingService;