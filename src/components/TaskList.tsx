import * as React from 'react';

// interface 
import { ITask } from '../interfaces/Task';

export interface Props {
    taskList: ITask[]
}

const TaskList = ({ taskList }: Props) => {
    return (
        <>
            {taskList.length > 0 ? (
                taskList.map((task) => (
                    <div key={task.id}>
                        <p>{task.title}</p>
                    </div>
                ))
            ) : (
                <p>Não há tarefas cadastradas</p>
            )}
        </>
    );
}



export default TaskList