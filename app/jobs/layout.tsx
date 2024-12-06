'use client'
import "../globals.css";

import Sidebar from "@/components/jobs/sidebar";
// import JobList from '@components/jobs/joblist';
import { usePathname } from "next/navigation";

export default function JobsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // Check if the path includes '/jobs/[id]'
    const isDetailPage = pathname?.startsWith('/jobs/') && pathname.split('/').length > 2;
    return (
        <div className="flex container mx-auto h-screen">
            {!isDetailPage && (
                <div >
                    <Sidebar />
                </div>
            )}
            <div className={`flex-grow w-full ${isDetailPage ? 'flex justify-center h-screen' : ''
                } overflow-hidden flex-1`}>{children}</div>
        </div>
    )
}