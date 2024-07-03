import React from "react"
import { clsnx } from "@becks256/clsnx"
import { useColorMode } from "react-darkmode-hook"

import { Banner, Card, SocialIconBar, Tag } from "./components"
import {
  APP_DATA,
  DESIGN_WORK_DATA,
  PUBLICATION_DATA,
  SKILLS_DATA,
  WORK_DATA,
} from "./utils"

import "./App.css"

function App() {
  const { setColorMode } = useColorMode()
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

  const headerClasses = "heading-m"
  const cardSectionClasses = "flex flex-wrap mb-96 gap-48"

  const techItems = WORK_DATA.reduce((acc, item) => {
    if (!item.techStack?.length) return acc
    item.techStack.forEach((techItem) => {
      acc.add(techItem)
    })
    return acc
  }, new Set())

  const filteredWork = [WORK_DATA, DESIGN_WORK_DATA]
    .map((group) =>
      group.filter((item) => {
        if (!filter.length) return true
        return item.techStack?.some((name) =>
          name.match(new RegExp(filter || ".*?", "i"))
        )
      })
    )
    .flat()

  return (
    <div className="App">
      <Banner />
      <section className="main-content sm:mx-16 my-96">
        <h1 className={headerClasses} id="networks">
          Networks
        </h1>
        <p>Follow my work or connect with me on social media!</p>
        <section className={cardSectionClasses}>
          <SocialIconBar />
        </section>
        <h1 className={headerClasses} id="projects">
          Projects
        </h1>
        <section className="Card pb-24 flex-column px-24 mb-24 pt-8 gap-8">
          <p>Filter work by technology</p>
          <section className="flex flex-row gap-8 flex-wrap">
            {Array.from(techItems)
              .sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))
              .map((techItem, index) => (
                <Tag
                  kind={
                    filter.some((item) => item.replace(/\\/g, "") === techItem)
                      ? "special"
                      : ""
                  }
                  key={`tag-${index}`}
                  onClick={filterHandler}
                  className="pointer"
                >
                  {techItem}
                </Tag>
              ))}
          </section>
        </section>
        <p className="font-m font-bold">
          {filteredWork.length} Projects match the selected filters
        </p>
        <section className={clsnx(cardSectionClasses, "grid-section")}>
          {filteredWork.length > 0 &&
            filteredWork.map((item, index) => (
                <Card
                  key={`work-card-${index}`}
                  title={item.title}
                  href={item.link}
                  description={item.description}
                  techStack={item.techStack}
                cta={item.cta}
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
            ))}
        </section>
        <h1 className={headerClasses} id="skills">
          Skills
        </h1>
        <section className={clsnx(cardSectionClasses, "grid-section")}>
          {SKILLS_DATA.sort((a, b) =>
            a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
          ).map((item, index) => (
            <Card
              key={`work-card-${index}`}
              title={item.title}
              href={item.link}
              description={item.description}
              techStack={item.techStack}
              cta={item.cta}
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
        <h1 className={headerClasses} id="publications">
          Publications
        </h1>
        <section className={clsnx(cardSectionClasses, "grid-section")}>
          {PUBLICATION_DATA.map((item, index) => (
            <Card
              key={`work-card-${index}`}
              title={item.title}
              href={item.link}
              description={item.description}
              type="publication"
              cta={item.cta}
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
