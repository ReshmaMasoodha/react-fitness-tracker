import { useState, useEffect } from 'react';
import { ActivityForm} from "./ActivityForm";
import './App.css';
import { ActivityList } from './ActivityList';

function App() {
  const [activities,setActivities]=useState([]);
  const [editId,setEditId] = useState('');
  var totalcalories=0;
  const addActivity = (ListItem) => {
    setActivities(prevActivities => [...prevActivities,ListItem]);
  }
  const onDelete =(idToDelete) => {
    const updatedActivities = activities.filter(act => act.id !== idToDelete);
    setActivities(updatedActivities);
  };
  const onEdit = (edit) => {
    setEditId(edit);
  }
  const updateActivityItem = (edActivityItem) => {
    let i;
    for (i=0;i<activities.length;i++){
      if(activities[i].id==edActivityItem.id){
        activities[i].Activity = edActivityItem.Activity;
        activities[i].calories=edActivityItem.calories;
        setEditId('');
      }
    }
  }
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
      <ActivityList activities = {activities} onDeleteActivity = {onDelete} onEditActivity = {onEdit} editId={editId} updateAct ={updateActivityItem}/>
      <p>Total Calories = {totalcalories}</p>
      <p>Total Activities = {activities.length}</p>
    </div>
  )
}

export default App
