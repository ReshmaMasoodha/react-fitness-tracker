import {ActivityItem} from './ActivityItem'
import { useState} from 'react'
export const ActivityList = ({activities, onDeleteActivity, onEditActivity, editId, updateAct}) => {
  const [DateFilter,setDateFilter] = useState('');
  var totalcalories=0;
  const handleChange = (event) => {
    setDateFilter(event.target.value);
  }
  const filteredActivites = activities.filter(act=> {
    if(DateFilter=="day"){
      const date=new Date(act.date);
    const date1 = new Date();
    if (date.getFullYear()==date1.getFullYear()&&date.getMonth()==date1.getMonth()){
      if(date.getDate()==date1.getDate()){
        return true
      }
      else{
        return false
      }
    }
    else{
      return false
    }
    }
    else if (DateFilter=="week"){
      const date=new Date(act.date);
    const date1 = new Date();
    if (date.getFullYear()==date1.getFullYear()&&date.getMonth()==date1.getMonth()){
      if(date.getDate()>=(date1.getDate()-7)){
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
    else if(DateFilter=="month"){
      const date=new Date(act.date);
    const date1 = new Date();
    if (date.getFullYear()==date1.getFullYear()&&date.getMonth()==date1.getMonth()){
      return true;
    }
    else{
      return false;
    }
    }
    else{
      return true;
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
        checked={DateFilter=="day"}
        onChange = {handleChange}/>Day
        <input type="radio"
        value="week"
        checked={DateFilter=="week"}
        onChange = {handleChange}/>Week
        <input type="radio"
        value = "month"
        checked={DateFilter=="month"}
        onChange={handleChange}/>Month
      </lable>
        { filteredActivites ?
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