export const ActivityItem = ({activity,onDelete}) => {
  return(
    <li>
      {activity.Activity} - {activity.calories}
      <button onClick={() => onDelete(activity.id)}>X </button>
    </li>
  )
}