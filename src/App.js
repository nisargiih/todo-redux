import './App.css';
import { useState } from 'react';
import { ADD_TASK_START, DELETE_TASK_START, UPDATE_TASK_START } from "./action/action"
import { connect, useDispatch, useSelector } from 'react-redux'
import { Connect } from 'react-redux';

// function EditData(props) {
//   const dispatch = useDispatch()
//   return (
//     <button onClick={() => dispatch({ type: UPDATE_TASK_START, id: props.id })}>Edit</button>
//   )
// }

function App(props) {

  const [task, setTask] = useState('')
  const dispatch = useDispatch()

  // const data1 = useSelector((state) => state.tasks)
  // const data1 = useSelector((state) => state.tasks[0].id)
  // console.log(data1)

  const displayTask = props.taskData.tasks
  // console.log(displayTask[0].isEdit)

  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* {displayTask.isDone ? <p>true</p> : <></>} */}
      <input value={task} onChange={(e) => (setTask(e.target.value))}></input>
      <button onClick={() => dispatch({
        type: ADD_TASK_START,
        task: {
          id: displayTask.length + 1,
          task,
          isDone: false,
          isEdit: false,
        },
      }, setTask(''))} >Add Task
      </button>
      {displayTask.map((task, itr) =>
        <>
          <p>{task.id}</p>
          <p>{task.task}</p>
          <button onClick={() => dispatch({ type: UPDATE_TASK_START, id: task.id, task: 'Ready to update', isEdit: true })}>Edit</button>
          <button onClick={() => dispatch({ type: DELETE_TASK_START, id: task.id })}>Delete</button>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    taskData: state
  }
}

export default connect(mapStateToProps, null)(App);







{/* <button onClick={() => dispatch({
        type: UPDATE_TASK_START,
        data: 'addTask'
      })} >update Task</button>
      <button onClick={() => dispatch({
        type: DELETE_TASK_START,
        data: 'addTask'
      })} >delete Task</button> */}