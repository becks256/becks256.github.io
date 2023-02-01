import "./App.css"
import { Banner, Card } from "./components"
import {
  certOne,
  certTwo,
  certThree,
  pluralsightSnip,
  fccSnip,
  soulfolioSnip,
  photoshopSnip,
  myPriceSnip,
  dapperSnip,
  metaSnip,
} from "./assets"

function App() {
  const APP_DATA = {
    pluralsightLink: "https://app.pluralsight.com/profile/dbecker85",
    fccLink: "https://www.freecodecamp.org/becks256",
    soulfolioLink: "https://www.soulfolioco.com",
    metaLink:
      "https://www.kickstarter.com/projects/gadgetek/meta-the-microcontroller-enhanced-tablet-accessory",
    year: new Date().getFullYear(),
  }
  return (
    <div className="App">
      <Banner />
      <section className="md:mx-96 sm:mx-16 my-96">
        <h1 id="work">Work</h1>
        <section className="flex flex-wrap mb-64">
          <Card
            title="Soulfolio Co"
            href={APP_DATA.soulfolioLink}
            description="A collaborative environment for friends and family to build a unique and personalized gift, together"
            techStack="MERN"
          >
            <a
              className="flex w-100"
              href={APP_DATA.soulfolioLink}
              target="_blank"
              rel="noreferrer"
              aria-label="view larger image"
              label="view larger image"
            >
              <img
                src={soulfolioSnip}
                className="w-100"
                alt="soulfolioco.com screenshot"
              />
            </a>
          </Card>
          <Card
            title="DesignerPower UXP"
            description="Photoshop UXP plugin with multiple modules for optimizing files for production and a connector for the Widen DAM system"
            techStack="Adobe UXP Framework & React"
          >
            <a
              className="flex w-100"
              href={photoshopSnip}
              target="_blank"
              rel="noreferrer"
              aria-label="view larger image"
              label="view larger image"
            >
              <img
                src={photoshopSnip}
                className="w-100"
                alt="designer power uxp plugin screenshot"
              />
            </a>
          </Card>
          <Card
            title="MyPrice"
            description="A system of system that scrapes and aggregates data from excel spreadsheets, presents the information in an organized and accessible manner, and enables the sales force to select items and export them in the required format"
            techStack="MongoDB, EJS, Express, Node"
          >
            <a
              className="flex w-100"
              href={myPriceSnip}
              target="_blank"
              rel="noreferrer"
              aria-label="view larger image"
              label="view larger image"
            >
              <img
                src={myPriceSnip}
                className="w-100"
                alt="my price web app screenshot"
              />
            </a>
          </Card>
          <Card
            title="Dapper"
            description="POC MERN stack app that would enable non-developers to directly manipulate the color system and deploy theme and color changes directly to production"
            techStack="MERN"
          >
            <a
              className="flex w-100"
              href={dapperSnip}
              target="_blank"
              rel="noreferrer"
              aria-label="view larger image"
              label="view larger image"
            >
              <img
                src={dapperSnip}
                className="w-100"
                alt="dapper web app screenshot"
              />
            </a>
          </Card>
          <Card
            title="META - The Microcontroller Enhanced Tablet Accessory"
            description="META was the first ever tablet case to feature embedded electronics.  It was aimed at the Surface Pro line of Microsoft tablet computers and enabled users to work more efficiently in a keyboard-less configuration by introducing programmable buttons that could be mapped to any keyboard shortcut."
            techStack="C++ & Arduino IDE"
            href={APP_DATA.metaLink}
          >
            <a
              className="flex w-100"
              href={metaSnip}
              target="_blank"
              rel="noreferrer"
              aria-label="view larger image"
              label="view larger image"
            >
              <img
                src={metaSnip}
                className="w-100"
                alt="dapper web app screenshot"
              />
            </a>
          </Card>
        </section>
        <h1 id="skills">Skills</h1>
        <section className="flex flex-wrap mb-64">
          <Card
            title="Pluralsight Profile"
            description="Link to Pluralsight profile containing verified Skill IQs"
            href={APP_DATA.pluralsightLink}
          >
            <a
              className="flex w-100"
              href={APP_DATA.pluralsightLink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={pluralsightSnip}
                className="w-100"
                alt="pluralsight user profile screenshot"
              />
            </a>
          </Card>
          <Card
            title="freeCodeCamp Profile"
            description="Link to freeCodeCamp profile containing certifications"
            href={APP_DATA.fccLink}
          >
            <a className="flex w-100" href={APP_DATA.fccLink} target="_blank" rel="noreferrer">
              <img
                src={fccSnip}
                className="w-100"
                alt="freeCodeCamp user profile screenshot"
              />
            </a>
          </Card>
        </section>
      </section>
      <footer className="m-32 flex align-content--center justify-content--center">
        <p className="font-s">
          All content contained herein is the property of Daniel M Becker.
          Copyright &copy; {APP_DATA.year}. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
