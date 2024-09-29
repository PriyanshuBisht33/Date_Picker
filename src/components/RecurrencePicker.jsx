import React, { useState } from "react";
import DatePicker from "react-datepicker"; // Import DatePicker component
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker CSS
import RecurringDatesCalculator from "./RecurringDatesCalculator"; // Import the date calculator component

// Main component for selecting a recurrence pattern and start date
const RecurrencePicker = () => {
  const [startDate, setStartDate] = useState(new Date()); // State for storing the selected start date
  const [recurrencePattern, setRecurrencePattern] = useState("daily"); // State for storing the selected recurrence pattern
  const [interval, setInterval] = useState(1); // State for storing the interval (e.g., every X days/weeks/etc.)

  return (
    <div className="recurrence-picker">
      <h1 className="SelectRecurrence">Select Recurrence Pattern</h1>

      {/* Date Picker */}
      <div>
        <label>Start Date:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)} // Update state when the date changes
          dateFormat="yyyy/MM/dd"
          className="border p-2 rounded"
        />
      </div>

      {/* Dropdown for selecting recurrence pattern */}
      <div className="mt-4">
        <label>Recurrence Pattern:</label>
        <select
          value={recurrencePattern}
          onChange={(e) => setRecurrencePattern(e.target.value)} // Update state on dropdown change
          className="border p-2 ml-2 rounded"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* Input for setting the interval (every X days/weeks/months/years) */}
      <div className="mt-4">
        <label>Every:</label>
        <input
          type="number"
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))} // Update state on input change
          className="border p-2 ml-2 rounded w-20"
          min="1"
        />
        <span className="ml-2">
          {/* Display unit based on the selected recurrence pattern */}
          {recurrencePattern === "daily"
            ? "Days"
            : recurrencePattern === "weekly"
            ? "Weeks"
            : recurrencePattern === "monthly"
            ? "Months"
            : "Years"}
        </span>
      </div>

      {/* Component to calculate and display the selected recurring dates */}
      <RecurringDatesCalculator
        startDate={startDate}
        recurrencePattern={recurrencePattern}
        interval={interval}
      />
    </div>
  );
};

export default RecurrencePicker;
