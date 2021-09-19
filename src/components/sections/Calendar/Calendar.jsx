import React, { useState,useEffect } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

function CalendarDetail(props) {
  const minDate = new Date();
  minDate.setDate(minDate.getDate())
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate()+ 60)
  const [value, setValues] = useState([new Date(), new Date()]);
  

  const onChangeDate = (e) =>{
    console.log("detnro del hijo:-->",e)
    if(e !== null){
      setValues(e);
      props.setModified(true)
      const newDate = new Date(value[0]);
      const newDate2 = new Date(value[1]);
      console.log("En el hijo justo antes del padre-->",newDate,newDate2)
      props.setRange(newDate,newDate2);
    }else{
      props.setRange(null,null);
    }
  }


  return (
    <div>
      <DateRangePicker
        onChange={(e)=>{onChangeDate(e)}}
        value={value}
        minDate = {minDate}
        maxDate= {maxDate}
      />  
    </div>
  );
}
 export default CalendarDetail;