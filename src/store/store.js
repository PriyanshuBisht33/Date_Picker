// store.js
import create from "zustand";

export const useDateStore = create((set) => ({
  recurrencePattern: "daily",
  setRecurrencePattern: (pattern) => set({ recurrencePattern: pattern }),
  selectedDates: [],
  setSelectedDates: (dates) => set({ selectedDates: dates }),
  dateRange: { startDate: null, endDate: null },
  setDateRange: (range) => set({ dateRange: range }),
}));
