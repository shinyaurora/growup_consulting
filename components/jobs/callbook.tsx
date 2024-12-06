'use client';
import React, { useState } from 'react';
import { format, addDays } from 'date-fns';

interface CallBookingDialogProps {
    jobTitle: string;
    onClose: () => void;
}

const CallBookingDialog: React.FC<CallBookingDialogProps> = ({ jobTitle, onClose }) => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    // Generate 4 days from today
    const dates = Array.from({ length: 4 }, (_, i) => addDays(new Date(), i));

    // Available times
    const times = ['2:00pm', '2:30pm', '3:00pm', '3:30pm'];

    const handleBooking = () => {
        if (selectedDate && selectedTime) {
            alert(`Booking confirmed for ${selectedDate} at ${selectedTime}`);
            onClose();
        } else {
            alert('Please select a date and time before booking.');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">Book a call</h2>
                    <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>
                <p className="text-sm text-gray-600 mt-2 mb-4">
                    Choose when <span className="font-semibold">{jobTitle}</span> can call you
                </p>

                {/* Date selection */}
                <div className="flex space-x-2 mb-4 justify-around">
                    {dates.map((date, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedDate(format(date, 'PPPP'))}
                            className={`px-4 py-2 rounded-md border ${selectedDate === format(date, 'PPPP')
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 text-gray-700'
                                }`}
                        >
                            <div className="text-sm font-medium">{format(date, 'LLL d')}</div>
                            <div className="text-xs">{format(date, 'EEEE')}</div>
                        </button>
                    ))}
                </div>

                {/* Time selection */}
                <div className="flex flex-wrap gap-2 mb-4 justify-around">
                    {times.map((time, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedTime(time)}
                            className={`px-4 py-2 rounded-md border ${selectedTime === time
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 text-gray-700'
                                }`}
                        >
                            {time}
                        </button>
                    ))}
                </div>

                <p className="text-xs text-gray-500 mb-6 text-center">All times MST</p>

                {/* Action buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleBooking}
                        className={`px-4 py-2 rounded-md text-white ${selectedDate && selectedTime
                            ? 'bg-blue-500 hover:bg-blue-600'
                            : 'bg-gray-300 cursor-not-allowed'
                            }`}
                        disabled={!selectedDate || !selectedTime}
                    >
                        Book now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CallBookingDialog;