import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [activities,setActivities]=useState([

  ]);
  const[activity,setActivity] = useState('');
  const[calories,setCalories] = useState('');
  var totalcalories=0;
  const handleSubmit = (event) =>{
    event.preventDefault();
    let i = Date.now();
    const ListItem ={
      id: i,
      Activity: activity,
      calories: Number(calories),
    }
    setActivities(prevActivites => [...prevActivites,ListItem]);
      setActivity('');
      setCalories('');
  }
  const deleteListItem =(idToDelete) => {
    const updatedActivities = activities.filter(act => act.id !== idToDelete);
    setActivities(updatedActivities);

  };
  return (
    <div>
    <div>
      <form onSubmit = {handleSubmit}>
        <h2>Activity </h2>
        <input type = "text" value ={activity} onChange ={(e) => setActivity(e.target.value)}></input>
        <h2>Calories</h2>
        <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)}></input>
        <button type="submit">Add</button>
      </form>
      </div>
      <div>
    <ul>
      {
        activities.map(activity=>(
        <div>
        <li key={activity.id}> {activity.Activity} - {activity.calories} <button onClick={() => deleteListItem(activity.id)}>X</button>
        </li> 
        </div>
        )
        )
      }
    </ul>
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
