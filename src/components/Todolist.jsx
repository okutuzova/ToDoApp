import { useState } from "react";
import TodoItem from "./todoitem";
import { PlusIcon, TrashIcon, FloppyDiskBackIcon } from "@phosphor-icons/react";

function TodoList({ tasks: initialTasks }) {
    const [tasks, setTasks] = useState(initialTasks);
    const [isAdding, setIsAdding] = useState(false);
    const [newTaskText, setNewTaskText] = useState('');

    function handleClick(e) {
        console.log("clicked", e.target);
        setIsAdding(true);
    }

    function handleSave() {
        if (newTaskText.trim() === '') return;


        const newTask = {
            id: Date.now(),
            text: newTaskText,
            status: 'pending',
        };
        setTasks([...tasks, newTask]);
        setNewTaskText('');
        setIsAdding(false);
    }

    function handleCancel() {
        setNewTaskText('');
        setIsAdding(false);
    }

    function handleDelete(id) {
        setTasks(tasks.filter((task) => task.id!== id));
    }

    function toggleComplete(id) {
        setTasks(tasks.map((task) =>
            task.id === id? {...task, status: task.status === 'done'? 'pending' : 'done'} : task));
    }
    return (
        <>
        <ul>
            {tasks.map((task) => < TodoItem key={task.id} task={task} onDelete={handleDelete} onToggleComplete={toggleComplete}/>)}

            {isAdding && (
                <li className="bg-gray-200 py-2 px-3 rounded-md my-3 flex items-center">
                    <span className="inline-block w-[12px] h-[12px] rounded-full mr-2 bg-gray-400"></span>
                    <input
                    type="text"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    className="bg-white px-2 border border-stone-900 w-full"
                    placeholder="Enter a new task..."
                     />
                     <div className="flex gap-2 ml-auto">


                        {/* save button */}
                        <button className="flex items-center gap-3" onClick={handleSave}>
                    <FloppyDiskBackIcon size={24} />
                        </button>
                        {/* delete button */}
                        <button className="flex items-center gap-3" onClick={handleCancel}>
                    <TrashIcon size={24} />
                        </button>
                     </div>
                </li>)}
        </ul>
        <button
            onClick={handleClick}
            className="bg-cyan-900 px-3 py-1 p-2 cursor-pointer rounded-md text-white flex justify-center items-center gap-2 hover:bg-cyan-800 mx-auto"
        ><PlusIcon size={24} />Add a Task

        </button>
        </>
    )
}

export default TodoList;