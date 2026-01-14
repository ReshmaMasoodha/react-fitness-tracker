import {useState, useEffect} from 'react'

export const ActivityForm = (props) => {
  const[activity,setActivity] = useState('');
  const[calories,setCalories] = useState(0);
  const handleSubmit = (event) =>{
    event.preventDefault();
    if (activity.length == 0||calories===0){
      window.alert("Enter both fields");
    }
    else if(Number(calories)<=0){
        window.alert("calories can't be negative or zero")
      }
    else{
    let i = Date.now();
    const ListItem ={
      id: i,
      Activity: activity,
      calories: Number(calories),
    }
      setActivity('');
      setCalories('');
      props.onAddActivity(ListItem);
    }
  };
  return (
  <form onSubmit = {handleSubmit}>
    <h2>Activity </h2>
    <input type = "text" value ={activity} onChange ={(e) => setActivity(e.target.value)}></input>
    <h2>Calories</h2>
    <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)}></input>
    <button type="submit">Add</button>
  </form>
  )
  
}
