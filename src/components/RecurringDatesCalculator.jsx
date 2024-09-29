// components/RecurringDatesCalculator.jsx
import React from 'react';
import { addDays, addWeeks, addMonths, addYears } from 'date-fns';

// Component to calculate and display recurring dates
const RecurringDatesCalculator = ({ startDate, recurrencePattern, interval }) => {
  // Function to calculate recurring dates based on the pattern and interval
  const calculateRecurringDates = (start, pattern, interval) => {
    const dates = [];
    let currentDate = start;

    // Generate 10 recurring dates as an example
    for (let i = 0; i < 10; i++) {
      dates.push(new Date(currentDate)); // Push a copy of the current date

      // Increment the current date based on the selected recurrence pattern
      switch (pattern) {
        case 'daily':
          currentDate = addDays(currentDate, interval);
          break;
        case 'weekly':
          currentDate = addWeeks(currentDate, interval);
          break;
        case 'monthly':
          currentDate = addMonths(currentDate, interval);
          break;
        case 'yearly':
          currentDate = addYears(currentDate, interval);
          break;
        default:
          break;
      }
    }
    return dates;
  };

  // Call the calculateRecurringDates function to get the list of dates
  const selectedDates = calculateRecurringDates(startDate, recurrencePattern, interval);

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">Selected Dates:</h2>
      <ul>
        {selectedDates.map((date, index) => (
          <li key={index}>
            {/* Use consistent formatting across server and client by explicitly specifying locale and options */}
            {date.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecurringDatesCalculator;
