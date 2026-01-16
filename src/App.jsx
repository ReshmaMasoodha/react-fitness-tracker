import { useState, useEffect } from 'react';
import { ActivityForm} from "./ActivityForm";
import './App.css';
import { ActivityList } from './ActivityList';

function App() {
  const [activities,setActivities]=useState([]);
  var totalcalories=0;
  const addActivity = (ListItem) => {
    setActivities(prevActivities => [...prevActivities,ListItem]);
  }
  const onDelete =(idToDelete) => {
    const updatedActivities = activities.filter(act => act.id !== idToDelete);
    setActivities(updatedActivities);
  };
  totalcalories  = activities.reduce((accumlator,currtenItem)=>{
          return accumlator+currtenItem.calories;
        },0);
  useEffect(()=> {
    const storedData= JSON.parse(localStorage.getItem('storedData'));
    if(storedData!=null){
      setActivities(storedData);
    }
  },[]);
  useEffect(()=> {
      localStorage.setItem('storedData',JSON.stringify(activities));
  },[activities]);
  
  return (
    <div>
      <ActivityForm onAddActivity = {addActivity} />
      <ActivityList activities = {activities} onDeleteActivity = {onDelete} />
      <p>Total Calories = {totalcalories}</p>
      <p>Total Activities = {activities.length}</p>
    </div>
  )
}

export default App
