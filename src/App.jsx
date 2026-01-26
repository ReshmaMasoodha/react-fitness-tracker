import { useState, useEffect } from 'react';
import { ActivityForm} from "./ActivityForm";
import './App.css';
import { ActivityList } from './ActivityList';

function App() {
  //moved read localStorage to state to avoid useEffect race in strictMode
  const [activities,setActivities]=useState(() => {
    const storedData = JSON.parse(localStorage.getItem('storedData'));
    if (storedData!=null){
      return storedData;
    }
    else{
      const data1 = [];
      return data1;
    }
  });
  const [editId,setEditId] = useState('');
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
    const act1 = activities.map(act=> {
      if(act.id!=edActivityItem.id){
        return(act);
      }
      else{
        return(edActivityItem);
      }
    }
    )
    setActivities(act1);
    setEditId('');
  }
  useEffect(()=> {
      localStorage.setItem('storedData',JSON.stringify(activities));
  },[activities]);
  
  return (
    <div>
      <ActivityForm onAddActivity = {addActivity} />
      <ActivityList activities = {activities} onDeleteActivity = {onDelete} onEditActivity = {onEdit} editId={editId} updateAct ={updateActivityItem}/>
    </div>
  )
}

export default App
