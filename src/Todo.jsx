// export default function ToDO({task}) {
//     return(
//         <li>Task: {task}</li>
//     )
// }

// export default function ToDo({task, isDone, time=0}) {
//     if (isDone === true) {
//         return <li>Done: {task} Duration: {time}</li>
//     }
//     else {
//         return <li>Pending: {task}</li>
//     }
// }

export default function ToDo({task, isDone, time= 0}) {
    return isDone ? <li>Done: {task} time: {time}</li>: <li>Not Done: {task}</li>
}