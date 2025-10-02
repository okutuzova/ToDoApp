import { useState } from "react";
import TodoItem from "./todoitem";
import TodoStats from "./Todostats";
import FilterButtons from "./Filterbuttons";
import AddTaskForm from "./AddTaskForm";
import EmptyState from "./EmptyState";
import { PlusIcon } from "@phosphor-icons/react";


function TodoList({ tasks: initialTasks }) {
    const [tasks, setTasks] = useState(initialTasks);
    const [isAdding, setIsAdding] = useState(false);
    const [newTaskText, setNewTaskText] = useState('');
    const [filter, setFilter] = useState('all');
    const [editingTaskId, setEditingTaskId] = useState(null);


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

    function handleUpdate(id, newText) {
        setTasks(tasks.map((task) =>
            task.id === id ? {...task, text: newText } : task
        ));
        setEditingTaskId(null);
    }

    const filteredTasks =
        filter === 'all'
        ? tasks
        : tasks.filter((task) => task.status === filter);

        return (
        <>
        <div className="lg:flex lg:justify-between items-end">
            {/* Filter Buttons */}
            <FilterButtons filter={filter} setFilter={setFilter}/>
            {/* Task Stats */}
            <TodoStats tasks={tasks} />
        </div>

        <ul>
            {filteredTasks.length === 0 && !isAdding && <EmptyState />}
            {filteredTasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    onDelete={handleDelete}
                    onToggleComplete={toggleComplete}
                    onUpdate={handleUpdate}
                    editingTaskId={editingTaskId}
                    setEditingTaskId={setEditingTaskId}
                />
            ))}
            {isAdding && (
                <AddTaskForm
                    newTaskText={newTaskText}
                    setNewTaskText={setNewTaskText}
                    onSave={handleSave}
                    onCancel={handleCancel}
                /> )}
        </ul>

        <button
            onClick={() => setIsAdding(true)}
            className="bg-cyan-900 px-3 py-1 p-2 cursor-pointer rounded-md text-white flex justify-center items-center gap-2 hover:bg-cyan-800 mx-auto"
        >
            <PlusIcon size={24} />Add a Task

        </button>
        </>
    )
}

export default TodoList;