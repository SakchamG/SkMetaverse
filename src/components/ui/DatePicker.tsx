"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

interface DatePickerProps {
  date: Date | null;
  setDate: (date: Date | null) => void;
  time: string;
  setTime: (time: string) => void;
}

export function DatePicker({ date, setDate, time, setTime }: DatePickerProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1));

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const handlePrevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  const handleNextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));

  const times = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM", 
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", 
    "04:00 PM", "04:30 PM", "05:00 PM"
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-card border border-border p-5 rounded-xl shadow-2xl relative">
      {/* Calendar */}
      <div className="flex-1 w-full max-w-[280px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button type="button" onClick={handlePrevMonth} className="p-2 hover:bg-primary/10 rounded-full transition-colors text-muted-foreground">
            <ChevronLeft size={18} />
          </button>
          <div className="font-medium font-heading tracking-wide">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </div>
          <button type="button" onClick={handleNextMonth} className="p-2 hover:bg-primary/10 rounded-full transition-colors text-muted-foreground">
            <ChevronRight size={18} />
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center mb-3">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
            <div key={d} className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest opacity-80">
              {d}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const isSelected = date?.getDate() === day && date?.getMonth() === currentMonth.getMonth() && date?.getFullYear() === currentMonth.getFullYear();
            const isPast = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day) < new Date(new Date().setHours(0,0,0,0));
            
            return (
              <button
                key={day}
                type="button"
                disabled={isPast}
                onClick={() => setDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
                className={`h-9 w-9 rounded-full flex items-center justify-center text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/50
                  ${isSelected ? "bg-primary text-white font-bold shadow-lg shadow-primary/30 scale-110 z-10" : "hover:bg-primary/10 text-foreground font-medium"}
                  ${isPast ? "opacity-20 cursor-not-allowed hover:bg-transparent hover:scale-100" : "cursor-pointer active:scale-95 hover:scale-110"}
                `}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Time Picker */}
      <div className="w-full md:w-56 border-t md:border-t-0 md:border-l border-border pt-5 md:pt-0 md:pl-6 flex flex-col">
        <div className="flex items-center gap-2 mb-4 text-sm font-medium text-muted-foreground tracking-wide">
          <Clock size={16} className="text-primary" /> Select Time
        </div>
        <div 
          className="flex-1 max-h-[220px] overflow-y-auto pr-2 space-y-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-primary/50 transition-colors"
          style={{ scrollbarWidth: "thin", scrollbarColor: "var(--color-border) transparent" }}
        >
          {times.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTime(t)}
              className={`w-full text-left pl-4 py-2.5 text-sm font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary/50
                ${time === t ? "bg-primary/20 text-primary border-transparent shadow-[inset_2px_0_0_0_var(--color-primary)] bg-gradient-to-r from-primary/10 to-transparent" : "bg-transparent border border-transparent hover:bg-card-hover hover:border-border text-muted-foreground hover:text-foreground"}
              `}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
