import {ActivityItem} from './ActivityItem'

export const ActivityList = ({activities, onDeleteActivity, onEditActivity, editId, updateAct}) => {
  return(
 <ul>
      {
        activities.map(activity=>(
        <ActivityItem key= {activity.id}
          activity = {activity}
          onEdit = {onEditActivity}
          editId = {editId}
          onDelete = {onDeleteActivity}
          updateActivityItem = {updateAct}
        />
        )
        )
      }
    </ul>
  )
}