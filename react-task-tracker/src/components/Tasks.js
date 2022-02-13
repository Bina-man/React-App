// const tasks = [
//     {
//         id: 1,
//         text: 'Task 1',
//         description: 'Description 1',
//         reminder: true
//     },
//     {
//         id: 2,
//         text: 'Task 1',
//         description: 'Description 1',
//         reminder: true
//     },
//     {
//         id: 3,
//         text: 'Task 1',
//         description: 'Description 1',
//         reminder: false
//     },
// ]

import Task from "./Task"

const Tasks = ({tasks}) => {
    
    return (
        <>
            {tasks.map((task) => (<Task key={task.id} task={task} />))}
        </>
    )
}

export default Tasks