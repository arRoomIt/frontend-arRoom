import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

function CalendarDetail() {
  const minDate = new Date();
  minDate.setDate(minDate.getDate())
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate()+ 60)
  const [value, onChange] = useState([new Date(), new Date()]);
 

  return (
    <div>
      <DateRangePicker
        onChange={onChange}
        value={value}
        minDate = {minDate}
        maxDate= {maxDate}
      />
       
        
    </div>
  );
}
 export default CalendarDetail;