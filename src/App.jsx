import { useState } from 'react';
import { ActivityForm} from "./ActivityForm";
import './App.css';
import { ActivityList } from './ActivityList';

function App() {
  const [activities,setActivities]=useState([]);
  var totalcalories=0;
  const handleCallback = (ListItem) => {
    setActivities(prevActivities => [...prevActivities,ListItem]);
  }
  const deleteListItem =(idToDelete) => {
    const updatedActivities = activities.filter(act => act.id !== idToDelete);
    setActivities(updatedActivities);
  };
  
  return (
    <div>
    <div>
      <ActivityForm getListItem = {handleCallback} />
    </div>
    <div>
      <ActivityList activities = {activities} onDeleteActivity = {deleteListItem} />
    </div>
    <div>
    <p>Total Calories = {totalcalories = activities.reduce((accumlator,currtenItem)=>{
          return accumlator+currtenItem.calories;
        },0)}</p>
    </div>
    </div>
    
  )
}

export default App
