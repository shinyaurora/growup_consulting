'use client'
import React from "react";
import { useState } from "react";
import { HiOutlineMail, HiPhone, HiOutlineCheckCircle, HiOutlineClipboard } from "react-icons/hi";
import { useRouter } from 'next/navigation';
import CallBookingDialog from "./callbook";
interface Job {
    id: string;
    title: string;
    rating: number;
    categories: string[];
    description: string;
}

const JobList = ({ jobs }: { jobs: Job[] }) => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        address: '',
        city: '',
        Zip: 0,
        state: '',
        birth: '',
        gender: 'male',
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPersonalInfoModal, setIsPersonalInfoModal] = useState(false);
    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false); // State for message modal
    const [selectedJobTitle, setSelectedJobTitle] = useState("");
    const [isPhoneDisabled, setIsPhoneDisabled] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentJobTitle, setCurrentJobTitle] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState("");
    const [seekerId, setSeekerId] = useState("");

    const handleContactNowClick = (title: string) => {
        setSelectedJobTitle(title);
        setIsModalOpen(true);
        setIsPhoneDisabled(true); // Disable phone button initially
    };
    const handlePersonalSubmitClick = async () => {
        if (!formData.firstname || !formData.lastname || !formData.address || !formData.city || !formData.state || formData.Zip === 0 || !formData.birth || !formData.gender) {
            setError('Please fill out all fields.');
            return;
        }

        try {
            const response = await fetch('/api/seekers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            console.log(response);

            if (!response.ok) throw new Error('Failed to save data.');

            const data = await response.json();
            setSeekerId(data.id)
            alert('Data saved! ID: ' + data.id);
        } catch (error) {
            alert('Error: ' + error);
        }

        setIsMessageModalOpen(true); // Open message modal
        setIsPersonalInfoModal(false); // Close the contact modal
    };
    const handleMessageClick = () => {
        setIsPersonalInfoModal(true); // Open message modal
        setIsModalOpen(false); // Close the contact modal
    };

    const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePhoneClick = () => {
        setIsPhoneDisabled(false);
        console.log("Calling...");
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsPhoneDisabled(true);
    };

    const handleCloseMessageModal = () => {
        setIsMessageModalOpen(false); // Close message modal
    };

    const handleBookCall = (jobTitle: string) => {
        setCurrentJobTitle(jobTitle);
        setIsDialogOpen(true);
    };

    const router = useRouter();
    const handleJobClick = (id: string) => {
        router.push(`/jobs/${id}`); // Navigate to the detail page with the ID
    };

    const [visibleJobs, setVisibleJobs] = useState<number>(3); // Initially show 5 jobs

    const handleLoadMore = () => {
        // Load more jobs when the button is clicked
        setVisibleJobs(jobs.length); // Set to show all jobs
    };

    const handleSendMessage = async () => {
        if (message && seekerId) {
            const response = await fetch("/api/seekers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message,
                    seekerId,
                }),
            });

            const data = await response.json();
            if (data.status === "success") {
                alert("Message sent successfully!");
                setMessage(""); // Clear message input
                setIsMessageModalOpen(false); // Hide dialog
            } else {
                alert("Error sending message.");
            }
        }
    }

    const jobListToDisplay = jobs.slice(0, visibleJobs); // Display only the jobs based on the visibleJobs state

    return (
        <div className="bg-gray-100 py-20 px-4 md:w-full h-full overflow-y-auto">
            <h1 className="text-2xl font-semibold text-gray-700 mb-4">
                Service who want to work with you
            </h1>
            <p className="text-gray-500 mb-6">
                These matches can be contacted right away and are most likely to get
                your project done!
            </p>
            <div className="space-y-6">
                {jobListToDisplay.map((job, index) => (
                    <div
                        key={index}
                        className="md:flex bg-white rounded-lg shadow-md p-6 items-center"
                    >
                        {/* Left Content */}
                        <div className="grow p-5">
                            <div>
                                <div className="md:flex items-center">
                                    <div className="text-lg grow font-semibold text-gray-800">
                                        {job.title}
                                    </div>
                                    <p>⭐⭐⭐⭐⭐({job.rating})</p>
                                </div>
                                {/* Categories */}
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {job.categories.map((category, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-blue-100 text-blue-700 px-2 py-1 text-sm rounded-md"
                                        >
                                            {category}
                                        </span>
                                    ))}
                                </div>
                                {/* Description */}
                                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                                    {job.description}
                                </p>
                                <div className="text-gray-500 text-sm mt-2 flex justify-between">
                                    <div
                                        onClick={() => handleJobClick(job.id)}
                                        className="cursor-pointer  bg-blue-300 flex items-center justify-center rounded-md">
                                        <span
                                            className="bg-blue-300 text-blue-700 px-2 py-1 text-sm rounded-md"
                                        >
                                            View Detail...
                                        </span>
                                    </div>
                                    {
                                        index < 2 ? (
                                            <div className="bg-rose-300 flex items-center justify-center rounded-md">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-gray-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                    />
                                                </svg>
                                                <span
                                                    className="bg-rose-300 text-blue-700 px-2 py-1 text-sm rounded-md"
                                                >
                                                    Great match
                                                </span>
                                            </div>

                                        ) : (null)
                                    }
                                </div>
                            </div>
                        </div>
                        {/* Buttons */}
                        <div className=" flex flex-col space-y-2 p-5">
                            <button
                                onClick={() => handleContactNowClick(job.title)}
                                className="bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600">
                                Contact now
                            </button>
                            <button
                                onClick={() => handleBookCall(job.title)}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600">
                                Book a call
                            </button>
                        </div>

                    </div>
                ))}
            </div>
            {jobs.length > 5 && visibleJobs < jobs.length && (
                <div className="mt-6 text-center">
                    <button
                        onClick={handleLoadMore}
                        className="bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600"
                    >
                        Load more professionals
                    </button>
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">{selectedJobTitle}</h2>
                        <div className="flex justify-around mb-4">
                            <button
                                onClick={() => handleMessageClick()}
                                className="flex flex-col items-center">
                                <HiOutlineMail className="h-8 w-8 text-blue-600" />
                                <span className="text-sm">Message</span>
                            </button>
                            <button
                                className="flex flex-col items-center"
                                disabled={false}
                            >
                                <HiPhone className="h-8 w-8 text-green-200" />
                                <span className="text-sm">Call now</span>
                            </button>
                        </div>
                        <button
                            onClick={handleCloseModal}
                            className="w-full bg-gray-400 text-white px-4 py-2 rounded-md mt-4"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Message Modal */}
            {isMessageModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-120">
                        <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
                            Send a message
                        </h2>
                        <p className="text-center text-sm text-gray-500 mb-4">
                            Connect with professionals and get the answers you need quickly.
                        </p>

                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Tell them more about what you're looking for"
                            className="w-full h-32 p-4 border rounded-md mb-4"
                        />

                        <div className="flex items-center text-sm text-gray-600 mb-4">
                            <HiOutlineClipboard className="h-5 w-5 text-green-500 mr-2" />
                            <span>Your job details attached</span>
                            <HiOutlineCheckCircle className="h-5 w-5 text-green-500 ml-2" />
                        </div>

                        <div className="flex items-center text-sm text-gray-600 mb-4">
                            <HiOutlineMail className="h-5 w-5 text-green-500 mr-2" />
                            <span>Your contact details attached</span>
                            <HiOutlineCheckCircle className="h-5 w-5 text-green-500 ml-2" />
                        </div>

                        <div className="flex justify-between space-x-2 mt-4">
                            <button
                                onClick={handleCloseMessageModal}
                                className="w-1/2 bg-gray-400 text-white px-4 py-2 rounded-md"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSendMessage}
                                className="w-1/2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {
                isPersonalInfoModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                            <h2 className="text-xl font-bold text-center mb-4">User Details</h2>

                            {/* Form */}
                            <div className="space-y-4">
                                {/* Name */}
                                <div>
                                    <label className="block font-medium mb-1">First Name</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        value={formData.firstname}
                                        onChange={handlePersonalChange}
                                        className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter First Name"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        value={formData.lastname}
                                        onChange={handlePersonalChange}
                                        className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter Last Name"
                                    />
                                </div>

                                {/* Address */}
                                <div>
                                    <label className="block font-medium mb-1">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handlePersonalChange}
                                        className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Search Address"
                                    />
                                </div>

                                {/* city */}
                                <div>
                                    <label className="block font-medium mb-1">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handlePersonalChange}
                                        className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Search Address"
                                    />
                                </div>
                                {/* State */}
                                <div>
                                    <label className="block font-medium mb-1">State</label>
                                    <input
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={handlePersonalChange}
                                        className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Search Address"
                                    />
                                </div>
                                {/* Zip code */}
                                <div>
                                    <label className="block font-medium mb-1">Zip code</label>
                                    <input
                                        type="number"
                                        name="Zip"
                                        value={formData.Zip}
                                        onChange={handlePersonalChange}
                                        className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Search Address"
                                    />
                                </div>
                                {/* Birth Date */}
                                <div>
                                    <label className="block font-medium mb-1">Birth Date</label>
                                    <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                                        <input
                                            type="date"
                                            name="birth"
                                            value={formData.birth}
                                            onChange={handlePersonalChange}
                                            className="w-full outline-none"
                                        />
                                        <span className="ml-2 text-gray-500">📅</span>
                                    </div>
                                </div>

                                {/* Gender */}
                                <div>
                                    <label className="block font-medium mb-1">Gender</label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handlePersonalChange}
                                        className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                            {/**error message */}
                            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                            {/* Buttons */}
                            <div className="flex justify-between mt-6">
                                <button
                                    className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                                    onClick={() => setIsPersonalInfoModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    onClick={handlePersonalSubmitClick}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
            {isDialogOpen && (
                <CallBookingDialog
                    jobTitle={currentJobTitle}
                    onClose={() => setIsDialogOpen(false)}
                />
            )}
        </div>
    );
};

export default JobList;