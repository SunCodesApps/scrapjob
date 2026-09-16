import { useEffect, useState } from "react";

import JobCard from "./JobCard";
import JobSearch from "./JobsSearch";

interface Job {
  jobId: number;
  title: string;
  description: string;
  requirements: string[];
  employmentType: string;
  salary: string;
  currency: string;
  company: string;
  location: string;
  postedAt: string;
  url: string;
}

const ITEMS_PER_PAGE = 20;

function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('')
  const [submittedSearch, setSubmittedSearch] = useState('')

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/jobs.json`)
      .then((response) => response.json())
      .then((data: Job[]) => setJobs(data));
  }, []);

  function handleSearch() { 
    setSubmittedSearch(search) 
    setCurrentPage(1)
  }

  const filteredJobs = jobs.filter((job) => {
    const term = submittedSearch.toLowerCase().trim() 
    if (!term) {
      return true
    }
    return (
      job.title.toLowerCase().includes(term) ||
      job.company.toLowerCase().includes(term) ||
      job.location.toLowerCase().includes(term) ) })

  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section>
      <JobSearch
        search={search}
        onSearchChange={setSearch}
        onSearch={handleSearch}
      />
    <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
      {filteredJobs.length > 0
        ? `${filteredJobs.length} jobs found${
            submittedSearch
              ? ` for "${submittedSearch}"`
              : ''
          }`
        : 'No jobs found.'}
    </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {currentJobs.map((job) => (
          <JobCard key={job.jobId} job={job} />
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-2">
  <button
    type="button"
    onClick={() => goToPage(currentPage - 1)}
    disabled={currentPage === 1}
    className="rounded-md bg-gray-200 px-3 py-2 text-sm text-gray-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-800 dark:text-gray-200"
  >
    Previous
  </button>

  {Array.from({ length: totalPages }, (_, index) => index + 1)
    .filter(
      (page) =>
        page === 1 ||
        page === totalPages ||
        Math.abs(page - currentPage) <= 1,
    )
    .map((page, index, pages) => (
      <span key={page} className="contents">
        {index > 0 && pages[index - 1] !== page - 1 && (
          <span className="px-2 py-2 text-gray-500">...</span>
        )}

        <button
          type="button"
          onClick={() => goToPage(page)}
          className={`rounded-md px-3 py-2 text-sm ${
            currentPage === page
              ? "bg-black text-white dark:bg-gray-700"
              : "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          }`}
        >
          {page}
        </button>
      </span>
    ))}

  <button
    type="button"
    onClick={() => goToPage(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="rounded-md bg-gray-200 px-3 py-2 text-sm text-gray-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-800 dark:text-gray-200"
  >
    Next
  </button>
</div>
    </section>
  );
}

export default Jobs;
