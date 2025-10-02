import { useState } from "react";
import { FloppyDiskBackIcon, TrashIcon } from "@phosphor-icons/react";

function EditTaskForm({ task, onUpdate, onCancel }) {
    const [editText, setEditText] = useState(task.text);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editText.trim() !== "") {
            onUpdate(task.id, editText);
            onCancel();
        }
    };

    return (
        <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 w-full">
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        className="border px-2 py-1 rounded-md flex-1"
      />
      <button type="submit"
      className="flex items-center gap-3">
                    <FloppyDiskBackIcon size={24} />
            </button>

      <button type="button"
      className="flex items-center gap-3" onClick={onCancel}>
                    <TrashIcon size={24} />
            </button>
    </form>
    )

}

export default EditTaskForm;