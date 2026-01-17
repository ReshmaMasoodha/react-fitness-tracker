import { useState } from 'react';
export const ActivityItem = ({activity,onDelete, onEdit, editId, updateActivityItem}) => {
  const [edAct,setEdAct] = useState('');
  const [edCal,setEdCal] = useState('');
  const handleSave = (event) => {
    const edActivityItem = {
      id: activity.id,
      Activity: edAct,
      calories: Number(edCal),
    };
    updateActivityItem(edActivityItem);
  };
  return(
    <>
      {editId ==activity.id && <li><input type="text" value={edAct} onChange={e=> setEdAct(e.target.value)}placeholder={activity.Activity}></input>
        <input type="number" value={edCal} onChange={e=>setEdCal(e.target.value)} placeholder={activity.calories}/><button onClick ={handleSave}> Save </button>
        </li>
      }
      {editId != activity.id &&
       <li>{activity.Activity} - {activity.calories}
       <button onClick={() => onDelete(activity.id)}>X </button>
      <button onClick={() => onEdit(activity.id)}> ✏ </button></li>
      }
    </>
  )
}