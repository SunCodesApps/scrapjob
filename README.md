# ScrapJob

ScrapJob is a fictional job portal created for **web scraping practice**.

The website provides realistic-looking job listings with companies, locations, employment types, salaries, descriptions, requirements, and publication dates.

All job listings and company information are fictitious.

## Purpose

The main purpose of ScrapJob is to provide a controlled website that can be used as a source for web scraping and data engineering projects.

The data contains both structured fields and free-text fields, allowing scraping projects to practice:

* HTML extraction
* Pagination
* Following links to detail pages
* Text normalization
* Data validation
* Structured data transformation
* Data quality checks

## Features

* Job vacancy listings
* Job detail pages
* Job search
* Pagination
* Dark mode
* Multiple companies and locations
* Different employment types
* Salary and currency information
* Daily generated job listings

## Data

The job listings are generated from a set of predefined templates, companies, locations, and salary ranges.

Some variations are intentionally introduced into job titles and descriptions to simulate imperfections commonly found in real-world scraped data.

Structured fields are kept consistent so that they can be used reliably during the extraction and transformation process.

## Technology

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router

## Data Generation

Job listings are generated automatically and stored as JSON.

The generated dataset is replaced periodically rather than continuously appended, keeping the dataset size controlled while providing fresh content for scraping exercises.

## Intended Use

ScrapJob is intended for:

* Web scraping practice
* ETL development
* Data engineering exercises
* Data validation and normalization
* Testing scraping pipelines

It is not a real employment platform, and the companies, vacancies, and other information presented on the website are fictional.

## License

This project is licensed under the MIT License.

Copyright (c) 2026 Rogério Kurek

See the [LICENSE](LICENSE) file for more details.