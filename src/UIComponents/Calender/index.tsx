import React, { useState } from 'react';

import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Calendar = () => {
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <DayPicker
      id="test"
      mode="range"
      styles={{
        caption: { color: 'lilac' }
      }}
      selected={range}
      onSelect={setRange}
    />
  );
}
export default Calendar