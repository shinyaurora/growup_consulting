'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import React from 'react';

type JobDetails = {
    id: String;
    title: string;
    rating: number;
    description: String;
}

export default function JobDetailPage() {
    const params = useParams();
    const [jobDetails, setJobDetails] = useState<JobDetails | null>(null)

    // Access the ID from params
    const rawJobId = params?.id;
    const jobId = Array.isArray(rawJobId) ? rawJobId[0] : rawJobId;

    useEffect(() => {
        if (jobId) {
            // Fetch or load job details using the jobId here
            console.log("Job ID:", jobId);
            setJobDetails({
                id: jobId,
                title: "Sample Job Title",
                rating: 5,
                description: "This is a sample job description.",
            });
        }
    }, [jobId]);

    if (!jobId) {
        return <p>Loading...</p>; // Handle cases where params aren't yet resolved
    }

    return (
        <div className="bg-gray-100 min-h-screen mx-auto container">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="bg-white shadow p-4 rounded-lg shadow my-5">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-bold">{jobDetails?.title || 'Loading Job...'}</h1>
                        <div className="text-right">
                            <div className="text-green-600 text-lg font-semibold">$144.50</div>
                            <button className="bg-yellow-500 text-black px-4 py-2 rounded font-medium hover:bg-yellow-600">
                                Start Working
                            </button>
                        </div>
                    </div>
                </div>

                {/* Job Details */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-lg font-bold mb-4">Dates And Times</h2>
                    <p className="mb-6">
                        <strong>Sun, Dec 6</strong> <br />
                        5:30 AM – 2:00 PM
                    </p>
                    <h2 className="text-lg font-bold mb-4">What You Will Be Doing</h2>
                    <p className="text-gray-700 mb-6">
                        Our associates work together as a team to deliver an incredible experience for our customers...
                        {/* Add more detailed text here */}
                    </p>
                    <h2 className="text-lg font-bold mb-4">Where You Will Be Working</h2>
                    {/* Map Section */}
                    <div className="w-full h-64 bg-gray-200 rounded-lg mb-6">
                        <iframe
                            src="https://www.google.com/maps/embed?..."
                            className="w-full h-full rounded-lg"
                            loading="lazy"
                        ></iframe>
                    </div>
                    <h2 className="text-lg font-bold mb-4">Trust And Safety Fee</h2>
                    <p className="text-gray-700 mb-6">
                        Your ability to seek medical attention for an occupation accident is our priority...
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Bolingbrook Jobs</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Fulfillment Specialist</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Warehousing</span>
                    </div>
                </div>
            </div>
        </div>
    );
};