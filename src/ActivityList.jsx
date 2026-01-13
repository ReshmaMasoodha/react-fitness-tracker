import {ActivityItem} from './ActivityItem'

export const ActivityList = ({activities, onDeleteActivity}) => {
  return(
 <ul>
      {
        activities.map(activity=>(
        <ActivityItem key= {activity.id}
          activity = {activity}
          onDelete = {onDeleteActivity}
        />
        )
        )
      }
    </ul>
  )
}