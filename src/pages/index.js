// pages/index.js
import React from 'react';
import RecurrencePicker from '../components/RecurrencePicker'; // Import the main recurrence picker component

// Main page component
export default function Home() {
  return (
    <div>
      <h1 className="RecurringDatePicker mt-8 text-2xl text-light ">Recurring Date Picker</h1>
      {/* Render the RecurrencePicker component */}
      <RecurrencePicker />
    </div>
  );
}
