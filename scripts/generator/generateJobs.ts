import { writeFileSync } from 'fs'
import { resolve } from 'path'

import { jobTemplates } from '../../data/jobTemplates.ts'
import { locations } from '../../data/locations.ts'
import { companies } from '../../data/companies.ts'
import { salaryTemplates } from '../../data/salaryTemplates.ts'
import { varyTitle, varyDescription } from '../helpers/textVariations.ts'

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

function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)]
}

function formatSalary(min: number, max: number): string {
  return `${min.toLocaleString('en-US')} - ${max.toLocaleString('en-US')}`
}

function generateJobs(count: number): Job[] {
  const jobs: Job[] = []

  for (let i = 1; i <= count; i++) {
    const template = randomItem(jobTemplates)
    const company = randomItem(companies)
    const location = randomItem(locations)
    const salaryTemplate = randomItem(salaryTemplates)

    jobs.push({
      jobId: i,
      title: varyTitle(template.title),
      description: varyDescription(template.description),
      requirements: template.requirements,
      employmentType: template.employmentType,
      salary: formatSalary( salaryTemplate.min, salaryTemplate.max, ),
      currency: location.currency,
      company: company.name,
      location: location.state
        ? `${location.city}, ${location.state}, ${location.country}`
        : `${location.city}, ${location.country}`,
      postedAt: new Date().toISOString(),
      url: `/jobs/${i}`,
    })
  }

  return jobs
}

const jobs = generateJobs(14000)

const outputPath = resolve(
  process.cwd(),
  'public/data/jobs.json',
)

writeFileSync(
  outputPath,
  JSON.stringify(jobs, null, 2),
  'utf-8',
)

console.log(`Generated ${jobs.length} jobs.`)