import Jobs from "../components/Jobs"
import { classes } from "../styles/classes"

function Home() {
  return (<>
      <section className={"mx-auto max-w-7xl p-6 pt-12"}>
        <h1 className={classes.h1}>
          ScrapJob
        </h1>

        <p className="mt-4 text-lg pInfo">
          This website was created for web scraping practice.
        </p>
        <small className={classes.smallInfo}>All job listings and company information are fictitious.</small>
      </section>
      <hr className="my-0 mx-auto w-9/10 border-gray-300" />
      <section id="jobs" className="mx-auto max-w-7xl mt-4 p-6 px-12">
        <Jobs />
      </section>
    </>
  )
}

export default Home