import { TrashIcon, PenIcon, CheckCircleIcon } from "@phosphor-icons/react";
function TodoItem({ task, onDelete, onToggleComplete }) {
    const { id, text, status } = task;

    function getStatus() {
        if (status === 'done') {
            return 'bg-green-500'
        } else {
            return 'bg-gray-500'
        }
    }

    return (
        <li className="bg-gray-200 py-2 px-3 rounded-md my-3 flex items-center" id={id}>
            <span className={`inline-block w-[12px] h-[12px] rounded-full mr-2 ${getStatus()}`}></span>
            <span>{text}</span>


                <div className="action-bar flex gap-2 ml-auto">
                    {/* complete button */}
                    {status === 'pending' ? (

                        <button onClick={() => onToggleComplete(id)}>
                            <span className="bg-cyan-100 px-2 py-2 rounded-md text-cyan-900 font-bold text-xs">Mark as completed</span>
                        </button>
                    ) : (
                        <button onClick={() => onToggleComplete(id)}>
                            <CheckCircleIcon size={24} color="green"/>
                        </button>
                    )}


            {/* edit button */}

            { status === 'pending' &&  (
                <button className="flex items-center gap-3">
                    <PenIcon size={24} />
            </button>
            )}

            {/* delete button */}
            <button className="flex items-center gap-3" onClick={() => onDelete(id)}>
                    <TrashIcon size={24} />
            </button>
                </div>

        </li>
    )
}

export default TodoItem;