'use client';

import { useState } from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Sidebar = () => {

  // Define the initial state for all filters
  const initialState = {
    workweek: [false, false, false, false, false, false, false],
    worktime: [false, false, false, false],
    budgetType: null as "fixed" | "hourly" | null,
    hourlyRate: 13,
    category: null as String | null,
    startdate: null as Date | null,
    enddate: null as Date | null
  };
  // State management
  const [budgetType, setBudgetType] = useState(initialState.budgetType);
  const [hourlyRate, setHourlyRate] = useState(initialState.hourlyRate);
  const [selectWorkWeek, setSelectWorkWeek] = useState(initialState.workweek);
  const [selectWorkTime, setSelectWorkTime] = useState(initialState.worktime);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState(""); // To handle search input
  const [selectedCategory, setSelectedCategory] = useState(initialState.category);
  const [startdate, setStartDate] = useState(initialState.startdate);
  const [enddate, setEndDate] = useState(initialState.enddate);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHourlyRate(parseInt(event.target.value, 10));
  };

  const categories = [
    "Business Work",
    "House Related",
    "Healthcare or Careers",
    "Labor",
  ];

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(search.toLowerCase())
  );

  // Reset handler for all filters
  const handleReset = () => {
    setBudgetType(initialState.budgetType);
    setSelectWorkWeek(initialState.workweek);
    setSelectWorkTime(initialState.worktime);
    setHourlyRate(initialState.hourlyRate);
    setSelectedCategory(initialState.category);
    setStartDate(initialState.startdate);
    setEndDate(initialState.enddate);
  };

  const handleApply = async () => {
    const filteredData = {
      budgetType,
      hourlyRate: budgetType === "hourly" ? hourlyRate : null, // Send hourlyRate only if 'hourly' is selected
      selectedCategory,
      startdate,
      enddate
    };

    try {
      const response = await fetch("/api/filters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filteredData),
      });

      if (!response.ok) {
        throw new Error("Failed to send filters");
      }

      const result = await response.json();
      console.log("Filters applied successfully:", result);
    } catch (e) {
      console.error("Error applying filters:", e);
    }
  };

  const handleWorkWeek = (index: number) => {
    var week = selectWorkWeek;
    week[index] = !week[index];
    setSelectWorkWeek([...selectWorkWeek, selectWorkWeek[index] = !selectWorkWeek[index]]);
  };

  const handleWorkTime = (index: number) => {
    var time = selectWorkTime;
    time[index] = !time[index];
    setSelectWorkTime([...selectWorkTime, selectWorkTime[index] = !selectWorkTime[index]]);
  };

  return (
    <>
      {/* Toggle button for mobile view */}
      <button
        className="lg:hidden fixed top-5 left-4 z-50 bg-blue-500 text-white px-4 py-4 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Filter"}
      </button>

      {/* Sidebar */}
      <div
        className={`lg:relative fixed top-0 left-0 h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 sm:w-[400px] overflow-y-auto`}
      >
        <div className="p-4">
          <div className="font-bold text-3xl">Filters</div>
          <hr />
          {/* Category Filter */}
          <div className="text-lg mt-3 font-bold my-3 pt-2">Category</div>
          <div className="relative my-2">
            {/* Searchable Input */}
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Dropdown */}
            {search && (
              <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 max-h-40 overflow-y-auto w-full">
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((category, index) => (
                    <li
                      key={index}
                      className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${selectedCategory === category ? "bg-blue-100" : ""
                        }`}
                      onClick={() => {
                        setSelectedCategory(category);
                        setSearch(category); // Set the search to selected value
                      }}
                    >
                      {category}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-500">No results found</li>
                )}
              </ul>
            )}
          </div>

          <div className="my-4">
            <p>
              <strong>Selected Category:</strong> {selectedCategory || "None"}
            </p>
          </div>

          <hr />
          <div className="text-lg mt-3 font-bold my-3 pt-2">Days</div>
          <div className="flex items-center space-x-3 my-3">
            {/* Date Range Picker */}
            <div className="flex space-x-2 items-center">
              {/* Calendar Icon */}
              <span className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 2.25v1.5m7.5-1.5v1.5M3 8.25h18M4.5 6.75h15a2.25 2.25 0 012.25 2.25v12A2.25 2.25 0 0119.5 21H4.5A2.25 2.25 0 012.25 18.75V6.75A2.25 2.25 0 014.5 6.75z"
                  />
                </svg>
              </span>
              <DatePicker
                selected={startdate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startdate || undefined}
                endDate={enddate || undefined}
                placeholderText="Start Date"
                className="w-36 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <DatePicker
                selected={enddate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startdate || undefined}
                endDate={enddate || undefined}
                minDate={startdate || undefined}
                placeholderText="End Date"
                className="w-36 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-auto justify-around py-1">
            {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex items-center">
                  <input id={day} name={day} type="checkbox" checked={selectWorkWeek[index]}
                    onChange={(e) =>
                      handleWorkWeek(index)
                    }
                  />
                  <label
                    htmlFor={day}
                    className="ml-1 mr-3 mt-1 text-xl text-gray-900"
                  >
                    {day}
                  </label>
                </div>
              </div>
            ))}
          </div>
          <hr />

          <div className="text-lg my-3 pt-3 font-bold">Start Times</div>
          <div className="ml-2">
            {[
              { label: "Morning(4:00AM-11:59AM)", id: "Morning" },
              { label: "Afternoon(12:00PM-4:59PM)", id: "Afternoon" },
              { label: "Evening(5:00PM-7:59PM)", id: "Evening" },
              { label: "Night(9:00PM-3:59AM)", id: "Night" },
            ].map((time, index) => (
              <div className="my-2" key={index}>
                <div className="flex justify-between flex-auto items-center">
                  <label
                    htmlFor={time.id}
                    className="ml-1 mr-3 mt-1 text-lg text-gray-900"
                  >
                    {time.label}
                  </label>
                  <input id={time.id} name={time.id} type="checkbox" checked={selectWorkTime[index]}
                    onChange={(e) => handleWorkTime(index)}
                  />
                </div>
              </div>
            ))}
          </div>
          <hr />

          <div className="text-lg my-3 pt-3 font-bold">Budget</div>
          <div className="flex flex-col space-y-4 mx-2 mb-3">
            {/* Toggle Between Fixed and Hourly */}
            <div className="flex items-center space-x-4">
              <button
                className={`px-4 py-2 rounded-md ${budgetType === "fixed"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
                  }`}
                onClick={() => setBudgetType("fixed")}
              >
                Fixed
              </button>
              <button
                className={`px-4 py-2 rounded-md ${budgetType === "hourly"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
                  }`}
                onClick={() => setBudgetType("hourly")}
              >
                Hourly
              </button>
            </div>

            {/* Hourly Slider */}
            {budgetType === "hourly" && (
              <div className="w-full max-w-md">
                <div className="text-gray-800">
                  <span>Selected Value:</span>
                  <span id="selected-value" className="font-bold ml-2">
                    ${hourlyRate}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={hourlyRate}
                  onChange={handleSliderChange} // Handle slider changes
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-thumb focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className=" cursor-pointer  cursor-pointer fffflex justify-between text-sm text-gray-600 mb-2 px-3">
                  <span id="min-value">$10</span>
                  <span id="max-value">$50</span>
                </div>
              </div>
            )}
          </div>
          <hr />

          <div className="flex flex-auto justify-around my-3">
            <button
              onClick={handleReset}
              className=" cursor-pointer bg-gray-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600"
            >
              Reset
            </button>
            <button
              onClick={handleApply}
              className=" cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600">
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Background overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30  cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;