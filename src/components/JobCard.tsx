import { Link } from "react-router-dom";

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

interface JobCardProps {
  job: Job;
}

function JobCard({ job }: JobCardProps) {
  return (
    <article className="animate-fade-in rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        {job.title}
      </h2>

      <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
        {job.company}
      </p>

      <p className="mt-3 text-gray-700 dark:text-gray-300">{job.description}</p>

      <div className="mt-4 space-y-1 text-sm text-gray-600 dark:text-gray-300">
        <p>{job.location}</p>
        <p>{job.employmentType}</p>
        <p>
          Salary: {job.salary} {job.currency}
        </p>
      </div>

      <div className="mt-5">
        <Link
          to={job.url}
          className="inline-block rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          View job
        </Link>
      </div>
    </article>
  );
}

export default JobCard;
