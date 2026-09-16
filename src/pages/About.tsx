import { classes } from "../styles/classes"

function Home() {
  return (<>
      <section className="px-12 max-w-7xl p-6 pt-12">
        <div className="mx-auto lg:w-2/3">

        <h1 className={classes.h1}>About ScrapJob</h1>

        <p className={classes.pAbout}>ScrapJob is a fictional job portal created specifically for web scraping practice.</p>

        <p className={classes.pAbout}>The website contains fictitious job listings from different companies, locations, and technology areas. The data is generated automatically to provide a constantly changing dataset for scraping and data engineering exercises.</p>

        <p className={classes.pAbout}>Some job titles and descriptions intentionally contain minor formatting and textual variations. These imperfections are designed to simulate the kind of inconsistencies that can occur in real-world data.</p>

        <p className={classes.pAbout}>ScrapJob is not a real recruitment platform. All companies, job vacancies, and other information presented on the website are fictional.</p>

        <h2 className={classes.h2}>For Developers</h2>

        <p className={classes.pAbout}>ScrapJob can be used as a practice source for projects involving:</p>
        <ul className="list-disc pl-12">
            <li className={classes.li}>Web scraping</li>
            <li className={classes.li}>Pagination and link extraction</li>
            <li className={classes.li}>Data validation</li>
            <li className={classes.li}>Text normalization</li>
            <li className={classes.li}>ETL pipelines</li>
            <li className={classes.li}>Data quality</li>
            <li className={classes.li}>Data engineering</li>
        </ul>

        </div>
      </section>
      
    </>
  )
}

export default Home