import {ActivityItem} from './ActivityItem'
import { useState} from 'react'
export const ActivityList = ({activities, onDeleteActivity, onEditActivity, editId, updateAct}) => {
  const [dateFilter,setDateFilter] = useState('day');
  const currentDate = new Date();
  const [viewDate,setViewDate] = useState(currentDate);
  const [viewMonth,setViewMonth] = useState(currentDate.getMonth());
  const [viewYear,setViewYear] = useState(currentDate.getFullYear());
  var totalcalories=0;
  
  var daysInMonth = new Date(viewYear,viewMonth + 1, 0).getDate();
  var daysList = [];
  var i=1;
  for(i;i<=daysInMonth;i++){
    daysList.push(i);
  }
  const handleRadio = (event) => {
    setDateFilter(event.target.value);
  }
  const handleDate = (event) => {
    const dateInput= Number(event.target.value);
    const can = new Date(viewYear,viewMonth,dateInput);
    setViewDate(can);
  }
  const handleMonth = (event) => {
    setViewMonth(Number(event.target.value));
  }
  const handleYear = (event) => {
    setViewYear(Number(event.target.value));
  }
  const months = [
    {value: 0, label: 'January'},
    {value: 1, label: 'February'},
    {value: 2, label: 'March'},
    {value: 3, label: 'April'},
    {value: 4, label: 'May'},
    {value: 5, label: 'June'},
    {value: 6, label: 'July'},
    {value: 7, label: 'August'},
    {value: 8, label: 'September'},
    {value: 9, label: 'October'},
    {value: 10, label: 'November'},
    {value: 11, label: 'December'},
  ]
  const isToday = (dat,cur) => {
    if(dat.getDate()==cur.getDate()){
      return true
    }
    else{
      return false
    }
  }
  const isThisWeek = (dat,cur) => {
    const dayofWeek = cur.getDay();
    const startOfWeek = new Date(cur.getFullYear(),cur.getMonth(),cur.getDate()-dayofWeek);
    const endOfWeek = new Date(cur.getFullYear(),cur.getMonth(),startOfWeek.getDate()+6);
    if(dat.getDate()>=startOfWeek.getDate()&&dat.getDate()<=endOfWeek.getDate()){
      return true;
    }
    else{
      return false;
    }
  }
  const filteredActivites = activities.filter(act=> {
    const actDate=new Date(act.date);
    if (actDate.getFullYear()==viewDate.getFullYear()&&actDate.getMonth()==viewDate.getMonth()){
      if(dateFilter=="day"){
        return isToday(actDate,viewDate);
      }
      else if (dateFilter=="week"){
        return isThisWeek(actDate,viewDate);
      }
      else if(dateFilter=="month"){
          return true;
      }
    }
    else{
      return false;
    }
  });
  totalcalories  = filteredActivites.reduce((accumlator,currtenItem)=>{
          return accumlator+currtenItem.calories;
        },0);
  return(
    <div>
     <ul>
      <lable>
        <input type="radio"
        value="day"
        checked={dateFilter=="day"}
        onChange = {handleRadio}/>Day
        <input type="radio"
        value="week"
        checked={dateFilter=="week"}
        onChange = {handleRadio}/>Week
        <input type="radio"
        value = "month"
        checked={dateFilter=="month"}
        onChange={handleRadio}/> Month
        <div>{dateFilter != "month" &&
          <select value = {viewDate} onChange={handleDate}>
            {
              daysList.map(day =>(
              <option value = {day}>
                {day}
              </option>
              )
              ) 
            }
          </select>
        }
        </div>
        <select value = {viewMonth} onChange = {handleMonth}>
          {months.map((month) =>
          <option value={month.value}>
            {month.label}
          </option>
          )
          }
        </select>
        <select onChange={handleYear}>
          <option value="2026">
            2026
          </option>
          <option value="2025">
            2025
          </option>
          <option value="2024">
            2024
          </option>
          <option value="2023">
            2023
          </option>
        </select>
      </lable>
        { filteredActivites.length>0?
        filteredActivites.map(activity=>(
        <ActivityItem key= {activity.id}
          activity = {activity}
          onEdit = {onEditActivity}
          editId = {editId}
          onDelete = {onDeleteActivity}
          updateActivityItem = {updateAct}
        />)) : <p>No Activities Entered</p>
      }
     </ul>
    <p>Total Calories = {totalcalories}</p>
      <p>Total Activities = {filteredActivites.length}</p>
    </div>
  )
}