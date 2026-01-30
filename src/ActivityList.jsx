import {ActivityItem} from './ActivityItem'
import { useState} from 'react'
export const ActivityList = ({activities, onDeleteActivity, onEditActivity, editId, updateAct}) => {
  const [dateFilter,setDateFilter] = useState('day');
  const currentDate = new Date();
  const [viewDate,setViewDate] = useState(currentDate);
  const [viewMonth,setViewMonth] = useState(currentDate.getMonth());
  const [viewYear,setViewYear] = useState(currentDate.getFullYear());
  var totalcalories=0;
  const handleRadio = (event) => {
    setDateFilter(event.target.value);
  }
  const handleMonth = (event) => {
    setViewMonth(Number(event.target.value));
  }
  const handleYear = (event) => {
    setViewYear(Number(event.target.value));
  }
  const isToday = (dat,cur) => {
    if(dat.getDate()==cur.getDate()){
      return true
    }
    else{
      return false
    }
  }
  const isThisWeek = (dat,cur) => {
    if (dat.getDate()>=cur.getDate()-7&&dat.getDate()<=cur.getDate()){
      if(dat.getDay()>=0&&dat.getDay()<=cur.getDay()){
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }
  const filteredActivites = activities.filter(act=> {
    const actDate=new Date(act.date);
    if (actDate.getFullYear()==viewYear&&actDate.getMonth()==viewMonth){
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
        <select onChange = {handleMonth}>
          <option value="0">
            January
          </option>
          <option value="1">
            February
          </option>
          <option value="2">
            March
          </option>
          <option value="3">
            April
          </option>
          <option value="4">
            May
          </option>
          <option value="5">
            June
          </option>
          <option value="6">
            July
          </option>
          <option value="7">
            August
          </option>
          <option value="8">
            September
          </option>
          <option value="9">
            October
          </option>
          <option value="10">
            November
          </option>
          <option value="11">
            December
          </option>
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