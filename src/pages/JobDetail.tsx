import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface Job {
  jobId: number
  title: string
  description: string
  requirements: string[]
  employmentType: string
  salary: string
  currency: string
  company: string
  location: string
  postedAt: string
  url: string
}

function JobDetail() {
  const { jobId } = useParams()
  const [job, setJob] = useState<Job | null>(null)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/jobs.json`)
      .then((response) => response.json())
      .then((data: Job[]) => {
        const foundJob = data.find(
          (item) => item.jobId === Number(jobId),
        )

        setJob(foundJob ?? null)
      })
  }, [jobId])

  if (!job) {
    return (
      <section className="py-12 text-center">
        <h1 className="text-2xl font-bold">
          Job not found
        </h1>
      </section>
    )
  }

  return (
    <section className="py-8">
      <article className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {job.title}
        </h1>

        <p className="mt-2 text-lg font-medium text-gray-600 dark:text-gray-300">
          {job.company}
        </p>

        <div className="mt-6 space-y-2 text-gray-600 dark:text-gray-300">
          <p>
            <strong>Location:</strong> {job.location}
          </p>

          <p>
            <strong>Employment type:</strong>{' '}
            {job.employmentType}
          </p>

          <p>
            <strong>Salary:</strong> {job.salary}{' '}
            {job.currency}
          </p>

          <p>
            <strong>Posted:</strong> {job.postedAt}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Job description
          </h2>

          <p className="mt-3 leading-7 text-gray-700 dark:text-gray-300">
            {job.description}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Requirements
          </h2>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
            {job.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  )
}

export default JobDetail