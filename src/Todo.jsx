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

// export default function ToDo({task, isDone, time= 0}) {
//     return isDone ? <li>Done: {task} time: {time}</li>: <li>Not Done: {task}</li>
// }


// export default function ToDo ({task, isDone, time=0}) {
//     return isDone $$ <li>Done Tasks: {task} time: {times}</li>
// }

// conditional rendering : 4 $$

// export default function ToDo({task, isDone, time = 0}) {
//     return isDone $$ <li>Done Tasks: {task} time: {time}</li>
// }

// condition rendering : 5 ||

// export default function ToDo({task, isDone, time = 0}) {
//     return isDone || <li>Done Tasks: {task} time: {time}</li>
// }


// conditional rendering: 6 use variable

export default function ToDo({task, isDone}) {
const displayTime = time ? time : 100;

    let listItem;

    if(isDone === true) {
        listItem = <li>Done: {task} time: {displayTime}</li>
    }
    else {
        listItem = <li>Pending: {task}</li>
    }
    return listItem;
}