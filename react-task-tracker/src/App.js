import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Task 1',
        description: 'Description 1',
        date: '2020-01-01',
        reminder: true
    },
    {
        id: 2,
        text: 'Task 2',
        description: 'Description 2',
        date: '2020-01-02',
        reminder: true
    },
    {
        id: 3,
        text: 'Task 3',
        description: 'Description 3',
        date: '2020-01-03',
        reminder: false
    },
])
// Delete Task
const deleteTask = (id) => {
  console
}

  return (
    <div className="container">
      <Header title ='Hello world' />
      <Tasks tasks = {tasks}/>
    </div>

  );
}

export default App;
