"use client";

import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

interface Gig {
  title: string;
  description: string;
  address: string;
  city: string;
  state: string;
  payment_type: "fixed" | "hourly";
  budget: number;
  work_start_day: string;
  work_end_day: string;
  work_start_time: string;
  work_end_time: string;
  requirements: string[];
}

const AddGigPage: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [payment_type, setPaymentType] = useState<"fixed" | "hourly">("fixed");
  const [budget, setBudget] = useState<number>(0);
  const [work_start_day, setWorkStartDay] = useState<string>("");
  const [work_end_day, setWorkEndDay] = useState<string>("");
  const [work_start_time, setWorkStartTime] = useState<string>("");
  const [work_end_time, setWorkEndTime] = useState<string>("");
  const [requirements, setRequirements] = useState<string[]>([""]);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleAddRequirement = () => {
    setRequirements([...requirements, ""]);
  };

  const handleDeleteRequirement = (index: number) => {
    setRequirements(requirements.filter((_, i) => i !== index));
  };

  const handleRequirementChange = (index: number, value: string) => {
    const updatedRequirements = [...requirements];
    updatedRequirements[index] = value;
    setRequirements(updatedRequirements);
  };

  const handleAddGig = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const gig: Gig = {
        title,
        description,
        address,
        city,
        state,
        payment_type,
        budget: parseFloat(budget.toString()),
        work_start_day,
        work_end_day,
        work_start_time,
        work_end_time,
        requirements,
      };

      const response = await fetch("/api/gigs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gig),
      });

      if (response.ok) {
        setSuccess("✨ Your magical job was created successfully! ✨");
        resetForm();
      } else {
        const { error } = await response.json();
        setError(error || "Something went wrong. Try again!");
      }
    } catch (err) {
      setError("Failed to create your job. Please check your input.");
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setAddress("");
    setCity("");
    setState("");
    setPaymentType("fixed");
    setBudget(0);
    setWorkStartDay("");
    setWorkEndDay("");
    setWorkStartTime("");
    setWorkEndTime("");
    setRequirements([""]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-1200 via-gray-1200 to-black text-gray-200 p-8">
      <h1 className="text-center text-5xl font-extrabold text-purple-400 glow">
        Create jobs(100 per day)
      </h1>
      <form
        className="max-w-3xl mx-auto mt-8 p-6 rounded-lg bg-gray-800 bg-opacity-90 shadow-xl fairy-border"
        onSubmit={handleAddGig}
      >
        {/* Title */}
        <div className="relative">
          <label htmlFor="title" className="block text-sm font-bold">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full mt-2 rounded-lg border-0 bg-gray-700 p-3 text-purple-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 fairy-input"
            placeholder="Enter the title of your job..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div className="relative mt-6">
          <label htmlFor="description" className="block text-sm font-bold">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="w-full mt-2 rounded-lg border-0 bg-gray-700 p-3 text-purple-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 fairy-input"
            placeholder="Describe your job in detail..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Address */}
        <div className="relative mt-6">
          <label htmlFor="location" className="block text-sm font-bold">
            Address
          </label>
          <input
            type="text"
            id="location"
            className="w-full mt-2 rounded-lg border-0 bg-gray-700 p-3 text-purple-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 fairy-input"
            placeholder="Enter the work location..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        {/* City */}
        <div className="relative mt-6">
          <label htmlFor="location" className="block text-sm font-bold">
            City
          </label>
          <input
            type="text"
            id="location"
            className="w-full mt-2 rounded-lg border-0 bg-gray-700 p-3 text-purple-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 fairy-input"
            placeholder="Enter the work location..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        {/* State */}
        <div className="relative mt-6">
          <label htmlFor="location" className="block text-sm font-bold">
            State
          </label>
          <input
            type="text"
            id="location"
            className="w-full mt-2 rounded-lg border-0 bg-gray-700 p-3 text-purple-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 fairy-input"
            placeholder="Enter the work location..."
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>

        {/* Work Start */}
        <div className="relative mt-3">
          <label htmlFor="workStart" className="block text-sm font-medium">
            Work Start Day
          </label>
          <input
            type="date"
            id="workStart"
            className="w-full mt-2 rounded-lg bg-gray-700 p-3 text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 fairy-select"
            value={work_start_day}
            onChange={(e) => setWorkStartDay(e.target.value)}
            required
          />
        </div>

        {/* Work End */}
        <div className="relative mt-3">
          <label htmlFor="workEnd" className="block text-sm font-medium">
            Work End Day
          </label>
          <input
            type="date"
            id="workEnd"
            className="w-full mt-2 rounded-lg bg-gray-700 p-3 text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 fairy-select"
            value={work_end_day}
            onChange={(e) => setWorkEndDay(e.target.value)}
            required
          />
        </div>

        {/* Work Start Time */}
        <div className="relative mt-3">
          <label htmlFor="workStartTime" className="block text-sm font-medium">
            Work Start Time
          </label>
          <input
            type="time"
            id="workStartTime"
            className="w-full mt-2 rounded-lg bg-gray-700 p-3 text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 fairy-select"
            value={work_start_time}
            onChange={(e) => setWorkStartTime(e.target.value)}
            required
          />
        </div>

        {/* Work End Time */}
        <div className="relative mt-3">
          <label htmlFor="workEndTime" className="block text-sm font-medium">
            Work End Time
          </label>
          <input
            type="time"
            id="workEndTime"
            className="w-full mt-2 rounded-lg bg-gray-700 p-3 text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 fairy-select"
            value={work_end_time}
            onChange={(e) => setWorkEndTime(e.target.value)}
            required
          />
        </div>

        {/* Payment Type */}
        <div className="relative mt-6">
          <label htmlFor="paymentType" className="block text-sm font-bold">
            Payment Type
          </label>
          <select
            id="paymentType"
            className="w-full mt-2 rounded-lg bg-gray-700 p-3 text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 fairy-select"
            value={payment_type}
            onChange={(e) =>
              setPaymentType(e.target.value as "fixed" | "hourly")
            }
          >
            <option value="fixed">Fixed</option>
            <option value="hourly">Hourly</option>
          </select>
        </div>

        {/* Payment Budget */}
        <div className="relative mt-6">
          <label htmlFor="paymentType" className="block text-sm font-bold">
            Budget
          </label>
          <input
            id="paymentType"
            className="w-full mt-2 rounded-lg bg-gray-700 p-3 text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 fairy-select"
            value={budget}
            onChange={(e) => setBudget(parseFloat(e.target.value))}
            placeholder="enter your estimated budget amount"
          />
        </div>

        {/* Requirements */}
        <div className="relative mt-6">
          <label className="block text-sm font-bold">Requirements</label>
          {requirements.map((req, index) => (
            <div
              key={index}
              className="flex items-center mt-2 space-x-2 animated-fairy-field"
            >
              <input
                type="text"
                value={req}
                onChange={(e) => handleRequirementChange(index, e.target.value)}
                className="flex-grow rounded-lg border-0 bg-gray-700 p-3 text-purple-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 fairy-input"
                placeholder={`Requirement ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => handleDeleteRequirement(index)}
                className="rounded-lg bg-red-500 px-4 py-2 text-white transition-all hover:bg-red-600 fairy-button"
              >
                <FaTrash />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddRequirement}
            className="mt-4 rounded-lg bg-green-500 px-4 py-2 text-white transition-all hover:bg-green-600 fairy-button"
          >
            <FaPlus />
          </button>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            className="w-full rounded-lg bg-purple-600 p-3 text-lg font-bold text-white transition-all hover:bg-purple-700 fairy-button"
          >
            Submit the job
          </button>
        </div>

        {/* Status Messages */}
        {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
        {success && <p className="mt-4 text-sm text-green-400">{success}</p>}
      </form>
    </div>
  );
};

export default AddGigPage;
