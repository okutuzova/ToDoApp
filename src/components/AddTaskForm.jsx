import { TrashIcon, FloppyDiskBackIcon } from "@phosphor-icons/react";

export default function AddTaskForm({
  newTaskText,
  setNewTaskText,
  onSave,
  onCancel,
}) {
  return (
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
        <button className="flex items-center gap-3" onClick={onSave}>
          <FloppyDiskBackIcon size={24} />
        </button>
        {/* delete button */}
        <button className="flex items-center gap-3" onClick={onCancel}>
          <TrashIcon size={24} />
        </button>
      </div>
    </li>
  );
}
