import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [activities,setActivities]=useState([

  ]);
  const[activity,setActivity] = useState('');
  const[calories,setCalories] = useState('');
  const handleSubmit = (event) =>{
    event.preventDefault();
    let i;
    if(activities.length>0){
     i = activities.length-1;
     i=activities[i].id;
    }
    else{
      i=1;
    }
    const ListItem ={
      id: i,
      Activity: activity,
      calories: Number(calories),
    }
      setActivities(prevActivites => [...prevActivites,ListItem]);
      setActivity('');
      setCalories('');
  }
  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <h2>Activity </h2>
        <input type = "text" value ={activity} onChange ={(e) => setActivity(e.target.value)}></input>
        <h2>Calories</h2>
        <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)}></input>
        <button type="submit">Add</button>
      </form>
    <ul>
      {
        activities.map(activity=>(
        <li key={activity.id}> {activity.Activity} - {activity.calories}</li>
        )
        )
      }
    </ul>
    </div>
  )
}

export default App
