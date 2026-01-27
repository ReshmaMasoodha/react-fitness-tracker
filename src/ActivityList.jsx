import {ActivityItem} from './ActivityItem'
import { useState} from 'react'
export const ActivityList = ({activities, onDeleteActivity, onEditActivity, editId, updateAct}) => {
  const [dateFilter,setDateFilter] = useState('day');
  var totalcalories=0;
  const handleRadio = (event) => {
    setDateFilter(event.target.value);
  }
  const filteredActivites = activities.filter(act=> {
    const actDate=new Date(act.date);
    const currentDate = new Date();
    if (actDate.getFullYear()==currentDate.getFullYear()&&actDate.getMonth()==currentDate.getMonth()){
      if(dateFilter=="day"){
        if(actDate.getDate()==currentDate.getDate()){
        return true
        }
        else{
          return false
        }
      }
      else if (dateFilter=="week"){
        if (actDate.getDate()>=currentDate.getDate()-7){
        return true;
        }
        else{
          return false;
        }
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
        onChange={handleRadio}/>Month
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