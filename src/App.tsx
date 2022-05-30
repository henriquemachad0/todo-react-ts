import React, { useState } from 'react';

// components
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';


// css
import styles from './App.module.css'

// interface
import { ITask } from './interfaces/Task'

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if (display) {
      modal!.classList.remove("hide")
    } else {
      modal!.classList.add("hide")
    }
  }

  const editTask = (): void => {
    hideOrShowModal(true)
  }

return (
  <div>
    <Modal children={
      <TaskForm
        btnText="Editar tarefa"
        taskList={taskList}
      />
    } />
    <Header />
    <main className={styles.main}>
      <div>
        <h2>O que você vai fazer?</h2>
        <TaskForm btnText="Criar tarefa" taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div>
        <h2>Suas tarefas:</h2>
        <TaskList 
        taskList={taskList} 
        handleDelete={deleteTask} 
        handleEdit={editTask}
        />
      </div>
    </main>
    <Footer />
  </div>
);
}

export default App;
