import {useState, useEffect} from 'react'

export const ActivityForm = (props) => {
  const[activity,setActivity] = useState('');
  const[calories,setCalories] = useState('');
  const [error,setError] = useState('');
  const [errorCal,setErrorCal] = useState('');
  const  checkInputFields = Number(calories)<=0||!activity.trim();
  const handleChange = (event) => {
    setError('');
    setActivity(event.target.value);
  }
  const handleChangeCal = (event) => {
    setErrorCal('');
    setCalories(event.target.value);
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    if (activity.length == 0){
      setError('Field cant be empty');
    }
    else if(calories.length==0){
      setErrorCal('Field cant be empty');
    }
    else if(Number(calories)<=0){
        setErrorCal('Calories cant be negative or zero')
      }
    else{
    let i = Date.now();
    const ListItem ={
      id: i,
      Activity: activity,
      calories: Number(calories),
      date: new Date(),
    }
      setActivity('');
      setCalories('');
      props.onAddActivity(ListItem);
    }
  };
  return (
  <form onSubmit = {handleSubmit}>
    <h2>Activity </h2>
    <input type = "text" value ={activity} onChange ={handleChange}></input>
     {error && <p style={{color:'red', fontSize:'0.8rem'}}>{error}</p>}
    <h2>Calories</h2>
    <input type="number" value={calories} onChange={handleChangeCal}></input>
    {errorCal && <p style = {{color:'red',fontSize:'0.8rem'}}>{errorCal}</p>}
    <button disabled ={checkInputFields} type="submit">Add</button>
  </form>
  )
  
}
