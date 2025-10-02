function FilterButtons({filter, setFilter}) {
  return (
    <div className="my-4 lg:mt-auto lg:mb-0">
      <div className="flex flex-wrap gap-8 items-center justify-start my-6">
        <button
          onClick={() => setFilter("pending")}
          className={`uppercase font-medium rounded-md px-2 text-cyan-900 hover:bg-gray-200 hover:text-cyan-900
        cursor-pointer ${
          filter === "pending"
            ? "bg-cyan-900 text-white"
            : "bg-gray-300 text-cyan-900 hover:bg-gray-200"
        }`}
        >
          pending
        </button>
        <button
        onClick={() => setFilter("done")}
          className= {`uppercase font-medium rounded-md px-2 text-cyan-900 hover:bg-gray-200 hover:text-cyan-900
        cursor-pointer ${
            filter === "done"
             ? "bg-cyan-900 text-white"
              : "bg-gray-300 text-cyan-900 hover:bg-gray-200"
          }`
        }
        >
          done
        </button>

        {filter !== "all" && (
          <button
            onClick={() => setFilter("all")}
            className="uppercase font-medium rounded-md px-2 cursor-pointer bg-red-300 text-red-900 hover:bg-red-400"
          >
            Remove filters
          </button>
        )}
      </div>
    </div>
  );
}
export default FilterButtons;
