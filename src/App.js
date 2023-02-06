import "./App.css"
import { Banner, Card } from "./components"
import {
  pluralsightSnip,
  fccSnip,
  soulfolioSnip,
  photoshopSnip,
  myPriceSnip,
  dapperSnip,
  metaSnip,
  drprepperLogo,
  githubLogo,
  jsfiddleLogo,
  linkedinLogo,
  npmLogo,
  soundcloudLogo,
} from "./assets"
import { clsnx } from "@becks256/clsnx"

function App() {
  const WORK_DATA = [
    {
      link: "https://www.soulfolioco.com",
      image: soulfolioSnip,
      title: "Soulfolio Co",
      description:
        "Soulfolioco.com is a collaborative web app for creating personalized gifts.  It features, among other things, a collaborative project space and an image editor for personalizing built-in and user uploaded images, which can then be purchased for manufacture and delivery to the intended recipient.",
      techStack: "MERN",
      alt: "soulfolioco.com screenshot",
    },
    {
      link: undefined,
      image: photoshopSnip,
      title: "DesignerPower UXP",
      description:
        "Photoshop UXP plugin with multiple modules for optimizing files for production and a connector for the Widen DAM system",
      techStack: "Adobe UXP Framework & React",
      alt: "designer power uxp plugin screenshot",
    },
    {
      link: undefined,
      image: myPriceSnip,
      title: "MyPrice",
      description:
        "MyPrice is a custom developed solution for an enterprise client whose product quotes suffered from a findability problem. This application features a file system crawler that seeks out pricing quotes in a shared network and imports the information into a database. Users are able to search the database with an intuitive front-end that features a shopping basket where they can collect price quotes for multiple different products and export them to the required format for their customer.",
      techStack: "MongoDB, EJS, Express, Node",
      alt: "my price web app screenshot",
    },
    {
      link: undefined,
      image: drprepperLogo,
      title: "Dr. Prepper",
      description:
        "Dr. Prepper is a fully-automated, self-healing product rendering and print production system. It's primarily a headless application, but it does feature a simple React UI that enables non-developers (designers & sales) to initialize and stop processes. The primary interface is a series of drop folders that accept image files of any shape, size, and type, and the outputs of the system are production-ready art files along with the necessary product renderings of the provided art on the product it was dropped for. This enables rapid deployment of product and artwork to the appropriate ecommerce channels at a ~10x faster rate than could be manually accomplished.",
      techStack: "Adobe ExtendScript, React, Express, Node, Powershell",
      alt: "dr prepper logo",
    },
    {
      link: undefined,
      image: dapperSnip,
      title: "Dapper",
      description:
        "Dapper is a POC web app that would enable non-developers to directly manipulate the base color values of the Kroger Design System's color system, and deploy modified theme and color changes directly to production. The foreseeable value in allowing for on-demand color changes rests in themeability of the banner application and the ability to accomplish it without developer assistance.",
      techStack: "MERN",
      alt: "dapper web app screenshot",
    },
    {
      link: "https://www.kickstarter.com/projects/gadgetek/meta-the-microcontroller-enhanced-tablet-accessory",
      image: metaSnip,
      title: "META - The Microcontroller Enhanced Tablet Accessory",
      description:
        "META was the first ever tablet case to feature an advanced embedded microcontroller with user configurability.  It was aimed at the Surface Pro line of Microsoft tablet computers and enabled users to work more efficiently in a keyboard-less configuration by introducing programmable buttons that could be mapped to any keyboard shortcut and attached to the device in an elegant and unobtrusive manner",
      techStack: "C++ & Arduino IDE",
      alt: "meta product screenshot",
    },
  ]

  const SKILLS_DATA = [
    {
      link: "https://app.pluralsight.com/profile/dbecker85",
      image: pluralsightSnip,
      title: "Pluralsight",
      description: "See my SkillIQ on Pluralsight.",
      alt: "pluralsight user profile screenshot",
    },
    {
      link: "https://www.freecodecamp.org/becks256",
      image: fccSnip,
      title: "freeCodeCamp",
      description: "View my freeCodeCamp.org public profile.",
      alt: "freeCodeCamp user profile screenshot",
    },
  ]

  const NETWORK_DATA = [
    {
      link: "https://github.com/becks256",
      image: githubLogo,
      title: "GitHub @becks256",
      description: "Check out my personal profile on GitHub.",
      alt: "becks256 github public profile",
    },
    {
      link: "https://github.com/Rebel-IST",
      image: githubLogo,
      title: "GitHub @Rebel-IST",
      description: "Check out my contractor profile on GitHub",
      alt: "rebel internet systems and technologies github public profile.",
    },
    {
      link: "https://jsfiddle.net/user/becks256/fiddles",
      image: jsfiddleLogo,
      title: "JSFiddle",
      description: "Check out my random javascript experiments on JSFiddle.",
      alt: "becks256 js fiddle public profile",
    },
    {
      link: "https://www.npmjs.com/~becks256",
      image: npmLogo,
      title: "npm",
      description: "See the few random things I've published to npm.",
      alt: "becks256 npm public profile",
    },
    {
      link: "https://www.linkedin.com/in/becks256/",
      image: linkedinLogo,
      title: "LinkedIn",
      description: "Visit my LinkedIn profile.",
      alt: "Dan Becker LinkedIn public profile",
    },
    {
      link: "https://soundcloud.com/becks256",
      image: soundcloudLogo,
      title: "SoundCloud",
      description: "Have a listen to some noise I've created on SoundCloud.",
      alt: "becks256 soundcloud public profile",
    },
  ]

  const APP_DATA = {
    year: new Date().getFullYear(),
  }

  return (
    <div className="App">
      <Banner />
      <section className="md:mx-96 sm:mx-16 my-96">
        <h1 id="work">Work</h1>
        <section className="flex flex-wrap mb-64 gap-32">
          {WORK_DATA.sort((a, b) =>
            a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
          ).map((item, index) => (
            <Card
              key={`work-card-${index}`}
              title={item.title}
              href={item.link}
              description={item.description}
              techStack={item.techStack}
            >
              <a
                className={clsnx("flex", {
                  "w-100": !/prepper/gi.test(item.title),
                })}
                href={item.link || item.image}
                target="_blank"
                rel="noreferrer"
                aria-label="view larger image"
                label="view larger image"
              >
                <img
                  src={item.image}
                  className={clsnx({ "w-100": !/prepper/gi.test(item.title) })}
                  alt={item.alt}
                />
              </a>
            </Card>
          ))}
        </section>
        <h1 id="skills">Skills</h1>
        <section className="flex flex-wrap mb-64 gap-32">
          {SKILLS_DATA.sort((a, b) =>
            a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
          ).map((item, index) => (
            <Card
              key={`work-card-${index}`}
              title={item.title}
              href={item.link}
              description={item.description}
              techStack={item.techStack}
            >
              <a
                className={clsnx("flex", {
                  "w-100": !/prepper/gi.test(item.title),
                })}
                href={item.link || item.image}
                target="_blank"
                rel="noreferrer"
                aria-label="view larger image"
                label="view larger image"
              >
                <img
                  src={item.image}
                  className={clsnx({ "w-100": !/prepper/gi.test(item.title) })}
                  alt={item.alt}
                />
              </a>
            </Card>
          ))}
        </section>
        <h1 id="networks">Networks</h1>
        <section className="flex flex-wrap mb-64 gap-32">
          {NETWORK_DATA.sort((a, b) =>
            a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
          ).map((item, index) => (
            <Card
              key={`work-card-${index}`}
              title={item.title}
              href={item.link}
              description={item.description}
              techStack={item.techStack}
              type="network"
            >
              <a
                className="flex"
                href={item.link || item.image}
                target="_blank"
                rel="noreferrer"
                aria-label="view larger image"
                label="view larger image"
              >
                <img src={item.image} className="logo" alt={item.alt} />
              </a>
            </Card>
          ))}
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
