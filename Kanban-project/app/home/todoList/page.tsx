"use client";
import React, { useEffect, useState } from "react";
import TaskHeader from "../../components/taskHeader";
import DropdownDefault from "../../components/DropdounDefault";
import Header from "../../components/header";
import { Todo } from "@/types/todo";
import Drag from "@/js/drag";

// const TodoList = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/todos?limit=2&skip=10")
//       .then((res) => res.json())
//       .then((data: { todos: Todo[]; total: number }) => {
//         setTodos(data.todos);
//         console.log(data.todos);
//         Drag();
//       });
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className="mx-auto max-w-5xl">
//         <TaskHeader />
//         <div className="mx-auto max-w-5xl">
//           <div className="mt-9 flex flex-col gap-9">
//             <div className="swim-lane flex flex-col gap-5.5">
//               <h4 className="text-xl font-semibold text-black dark:text-white">
//                 To Do
//               </h4>
//               <div>
//                 <div
//                   draggable="true"
//                   className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
//                 >
//                   {todos.map((todo) => (
//                      <div
//                      draggable="true"
//                      className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
//                    >
//                     <div key={todo.id}>
//                       <div className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark">
//                         <label htmlFor={todo.id} className="cursor-pointer">
//                           <div className="relative flex items-center pt-0.5">
//                             <input
//                               type="checkbox"
//                               id={todo.id}
//                               className="taskCheckbox sr-only"
//                             />
//                             <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark dark:bg-boxdark-2">
//                               <span className="text-white opacity-0">
//                                 <svg
//                                   className="fill-current"
//                                   width="10"
//                                   height="7"
//                                   viewBox="0 0 10 7"
//                                   fill="none"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                   <path
//                                     fillRule="evenodd"
//                                     clipRule="evenodd"
//                                     d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
//                                     fill=""
//                                   />
//                                 </svg>
//                               </span>
//                             </div>
//                             <h1>{todo.todo}</h1>
//                           </div>
//                         </label>
//                         <DropdownDefault />
//                       </div>
//                     </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div
//                   draggable="true"
//                   className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
//                 >
//                   <h4 className="text-xl font-semibold text-black dark:text-white">
//                     in progress jkjkjkjk
//                   </h4>
//                 </div>
//                 <div
//                   draggable="true"
//                   className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
//                 >
//                   <div>
//                     <h4 className="text-xl font-semibold text-black dark:text-white">
//                       Done
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   );
// };

// export default TodoList;

// const TodoList = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/todos?limit=5&skip=10")
//       .then((res) => res.json())
//       .then((data: { todos: Todo[]; total: number }) => {
//         setTodos(data.todos);
//       });
//   }, []);

//   const handleDragStart = (
//     e: React.DragEvent<HTMLDivElement>,
//     todoId: string
//   ) => {
//     e.dataTransfer.setData("text/plain", todoId);
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: string) => {
//     const todoId = e.dataTransfer.getData("text/plain");
//     // Update the todo status here based on the drop target
//     // You need to implement the logic to update the todos state accordingly
//   };

//   return (
//     <>
//       <Header />
//       <div className="mx-auto max-w-5xl">
//         <TaskHeader />
//         <div className="mx-auto max-w-5xl">
//           <div className="mt-9 flex flex-col gap-9">
//             <div className="swim-lane flex flex-col gap-5.5">
//               <h4 className="text-xl font-semibold text-black dark:text-white">
//                 To Do
//               </h4>
//               <div
//                 onDrop={(e) => handleDrop(e, "todo")}
//                 onDragOver={(e) => e.preventDefault()}
//               >
//                 {todos.map((todo) => (
//                   <div
//                     key={todo.id}
//                     draggable="true"
//                     onDragStart={(e) => handleDragStart(e, todo.id)}
//                     className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
//                   >
//                     <label htmlFor={todo.id} className="cursor-pointer">
//                       <div className="relative flex items-center pt-0.5">
//                         <input
//                           type="checkbox"
//                           id={todo.id}
//                           className="taskCheckbox sr-only"
//                         />
//                         <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark dark:bg-boxdark-2">
//                           <span className="text-white opacity-0">
//                             <svg
//                               className="fill-current"
//                               width="10"
//                               height="7"
//                               viewBox="0 0 10 7"
//                               fill="none"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
//                                 fill=""
//                               />
//                             </svg>
//                           </span>
//                         </div>
//                         <h1>{todo.todo}</h1>
//                       </div>
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TodoList;


const TodoList = () => {
  const [todosTodo, setTodosTodo] = useState<Todo[]>([]);
  const [todosInProgress, setTodosInProgress] = useState<Todo[]>([]);
  const [todosDone, setTodosDone] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos?limit=5&skip=10")
      .then((res) => res.json())
      .then((data: { todos: Todo[]; total: number }) => {
        setTodosTodo(data.todos);
      });
  }, []);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    todoId: string
  ) => {
    e.dataTransfer.setData("text/plain", todoId);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: string) => {
    e.preventDefault();
    const todoId = e.dataTransfer.getData("text/plain");
  
    let todo: Todo | undefined;
    let sourceList: Todo[] | undefined;
  
    // Leta efter uppgiften i alla listor
    if (todoId) {
      sourceList = todosTodo.find((todo) => todo.id === todoId)
        ? todosTodo
        : todosInProgress.find((todo) => todo.id === todoId)
          ? todosInProgress
          : todosDone.find((todo) => todo.id === todoId)
            ? todosDone
            : undefined;
  
      if (sourceList) {
        todo = sourceList.find((todo) => todo.id === todoId);
      }
    }
  
    // Ta bort uppgiften från ursprungslistan
    if (sourceList && todo) {
      sourceList = sourceList.filter((t) => t.id !== todoId);
    }
  
    // Om uppgiften hittas, uppdatera tillståndet för den nya listan
    if (todo) {
      switch (status) {
        case "todo":
          setTodosTodo([...todosTodo, todo]);
          break;
        case "inprogress":
          setTodosInProgress([...todosInProgress, todo]);
          break;
        case "done":
          setTodosDone([...todosDone, todo]);
          break;
        default:
          break;
      }
    }
  };
  
  

  return (
    <>
      <Header />
      <div className="mx-auto max-w-5xl">
        <TaskHeader />
        <div className="mx-auto max-w-5xl">
          <div className="mt-9 flex flex-col gap-9">
            <div className="swim-lane flex flex-col gap-5.5">
              <h4 className="text-xl font-semibold text-black dark:text-white">
                To Do
              </h4>
              <div
                onDrop={(e) => handleDrop(e, "todo")}
                onDragOver={(e) => e.preventDefault()}
              >
                {todosTodo.map((todo) => (
                  <div
                    key={todo.id}
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, todo.id)}
                    className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
                  >
                    <label htmlFor={todo.id} className="cursor-pointer">
                      <div className="relative flex items-center pt-0.5">
                        <input
                          type="checkbox"
                          id={todo.id}
                          className="taskCheckbox sr-only"
                        />
                        <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark dark:bg-boxdark-2">
                          <span className="text-white opacity-0">
                            <svg
                              className="fill-current"
                              width="10"
                              height="7"
                              viewBox="0 0 10 7"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
                                fill=""
                              />
                            </svg>
                          </span>
                        </div>
                        <h1>{todo.todo}</h1>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {/* In Progress */}
<div className="swim-lane flex flex-col gap-5.5">
  <h4 className="text-xl font-semibold text-black dark:text-white">
    In Progress
  </h4>
  <div
    onDrop={(e) => handleDrop(e, "inprogress")}
    onDragOver={(e) => e.preventDefault()}
  >
    {todosInProgress.map((todo) => (
      <div
        key={todo.id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, todo.id)}
        className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
      >
        <label htmlFor={todo.id} className="cursor-pointer">
          <div className="relative flex items-center pt-0.5">
            <input
              type="checkbox"
              id={todo.id}
              className="taskCheckbox sr-only"
            />
            <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark dark:bg-boxdark-2">
              <span className="text-white opacity-0">
                <svg
                  className="fill-current"
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
                    fill=""
                  />
                </svg>
              </span>
            </div>
            <h1>{todo.todo}</h1>
          </div>
        </label>
      </div>
    ))}
  </div>
</div>

{/* Done */}
<div className="swim-lane flex flex-col gap-5.5">
  <h4 className="text-xl font-semibold text-black dark:text-white">
    Done
  </h4>
  <div
    onDrop={(e) => handleDrop(e, "done")}
    onDragOver={(e) => e.preventDefault()}
  >
    {todosDone.map((todo) => (
      <div
        key={todo.id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, todo.id)}
        className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
      >
        <label htmlFor={todo.id} className="cursor-pointer">
          <div className="relative flex items-center pt-0.5">
            <input
              type="checkbox"
              id={todo.id}
              className="taskCheckbox sr-only"
            />
            <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark dark:bg-boxdark-2">
              <span className="text-white opacity-0">
                <svg
                  className="fill-current"
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
                    fill=""
                  />
                </svg>
              </span>
            </div>
            <h1>{todo.todo}</h1>
          </div>
        </label>
      </div>
    ))}
  </div>
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
