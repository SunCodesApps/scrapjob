import Jobs from "../components/Jobs"
import { classes } from "../styles/classes"

function JobVacancies() {
  return (<>
      <section className={"mx-auto max-w-7xl p-6 pt-12"}>
        <h1 className={classes.h1}>
          ScrapJob - Fictional Job Vacancies
        </h1>
        <small className={classes.smallInfo}>All job listings and company information are fictitious.</small>
      </section>
      <hr className="my-0 mx-auto w-9/10 border-gray-300" />
      <section id="jobs" className="mx-auto max-w-7xl mt-4 p-6 px-12">
        <Jobs />
      </section>
    </>
  )
}

export default JobVacancies