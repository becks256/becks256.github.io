import React from "react"
import { clsnx } from "@becks256/clsnx"
import { DARK_MODE, useColorMode } from "react-darkmode-hook"

import { Banner, Card } from "./components"
import {
  APP_DATA,
  DESIGN_WORK_DATA,
  NETWORK_DATA,
  PUBLICATION_DATA,
  SKILLS_DATA,
  WORK_DATA,
} from "./utils"

import "./App.css"

function App() {
  const [filter, setFilter] = React.useState([])

  React.useEffect(() => {
    setColorMode()
  })

  const filterHandler = (e) => {
    const text = e.currentTarget.innerText.replace(/(\W)/g, "\\$1")
    if (filter.some((item) => item === text)) {
      setFilter(filter.filter((item) => item !== text))
      return
    }
    setFilter([...filter, text])
  }

  return (
    <div className="App">
      <Banner />
      <section className="main-content sm:mx-16 my-96">
        <h1 id="work">Work</h1>
        <section className={cardSectionClasses}>
          {[WORK_DATA, DESIGN_WORK_DATA].map((group) =>
            group
              .sort((a, b) =>
                a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
              )
              .map((item, index) => (
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
                      className={clsnx({
                        "w-100": !/prepper/gi.test(item.title),
                      })}
                      alt={item.alt}
                    />
                  </a>
                </Card>
              ))
          )}
        </section>
        <h1 id="skills">Skills</h1>
        <section className={cardSectionClasses}>
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
        <section className={cardSectionClasses}>
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
                <img
                  src={item.image}
                  className={clsnx("logo", {
                    inverse: colorMode === DARK_MODE && /github/gi.test(item.title),
                  })}
                  alt={item.alt}
                />
              </a>
            </Card>
          ))}
        </section>
        <h1 id="publications">Publications</h1>
        <section className={cardSectionClasses}>
          {PUBLICATION_DATA.map((item, index) => (
            <Card
              key={`work-card-${index}`}
              title={item.title}
              href={item.link}
              description={item.description}
              type="publication"
            >
              <a
                className="flex w-100"
                href={item.link || item.image}
                target="_blank"
                rel="noreferrer"
                aria-label="view larger image"
                label="view larger image"
              >
                <img src={item.image} className="w-100" alt={item.alt} />
              </a>
            </Card>
          ))}
        </section>
      </section>
      <footer className="m-32 flex align-content--center justify-content--center">
        <p className="font-s">
          All content contained herein is the property of Daniel M Becker.
          Copyright &copy; 2023 &mdash; {APP_DATA.year}. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
