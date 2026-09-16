interface JobSearchProps {
  search: string
  onSearchChange: (value: string) => void
  onSearch: () => void
}

function JobSearch({
  search,
  onSearchChange,
  onSearch,
}: JobSearchProps) {
  return (
    <div className="mb-8 rounded-lg bg-transparent">
      <div className="flex flex-col sm:flex-row w-1/3">
        <input
          type="text"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              onSearch()
            }
          }}
          placeholder="Search jobs..."
          className="flex-1 rounded-l-md border border-gray-700 bg-white px-4 py-2 text-gray-900 outline-none focus:border-gray-500 dark:bg-gray-800 dark:text-white"
        />

        <button
          type="button"
          onClick={onSearch}
          className="rounded-r-md bg-black dark:bg-gray-700 px-5 py-2 font-medium text-white hover:bg-gray-600"
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default JobSearch