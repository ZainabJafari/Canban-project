import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Todo } from "@/types/todo";


const KanbanBoard = ({ tasks }) => {
  const [columns, setColumns] = useState({
    todo: tasks.filter(task => task.status === 'todo'),
    inProgress: tasks.filter(task => task.status === 'inProgress'),
    done: tasks.filter(task => task.status === 'done')
  });

  const moveTask = (taskId, targetColumn) => {
    const updatedColumns = { ...columns };
    const taskToMove = updatedColumns[targetColumn].find(task => task.id === taskId);
    taskToMove.status = targetColumn;

    setColumns(updatedColumns);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex">
        <Column tasks={columns.todo} title="To Do" onDrop={() => moveTask(taskId, 'todo')} />
        <Column tasks={columns.inProgress} title="Pågående" onDrop={() => moveTask(taskId, 'inProgress')} />
        <Column tasks={columns.done} title="Klar" onDrop={() => moveTask(taskId, 'done')} />
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;
