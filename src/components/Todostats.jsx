export default function TodoStats( { tasks }) {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.status === 'done').length;
    const pending = total - completed;

    return (
        <div className="my-4 lg:mt-auto">
            <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col">
                    <span className="text-6xl font-bold text-cyan-800">{completed}</span>
                    <span>Completed</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-6xl font-bold text-cyan-800">{pending}</span>
                    <span>In process</span>
                </div>

            </div>

        </div>
    )

}