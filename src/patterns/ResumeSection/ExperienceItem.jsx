import React from "react"
import { clsnx } from "@becks256/clsnx"
import "./ExperienceItem.css"
import { Tag } from "../../components"

export const ExperienceItem = ({ data }) => {
  const {
    title,
    company,
    location,
    date,
    description,
    logo,
    alt,
    tenure,
    note,
    url,
    skills,
  } = data
  return (
    <div className="Card ExperienceItem overflow-hidden pb-48 pt-24 justify-content--between">
      <section className="flex flex-column gap-8">
        <section className="ExperienceItem-header flex justify-content--between mx-48 mt-16 align-items--center">
          {logo && (
            <a href={url} target="_blank">
              <img
                src={logo}
                alt={alt}
                className="ExperienceItem-logo mode-aware mb-16"
              />
            </a>
          )}
          <Tag kind="special" className="ExperienceItem-tenure">
            {tenure}
          </Tag>
        </section>
        <section className="px-48 flex justify-content--between font-italic">
          <p className="ExperienceItem-company">
            {company} | {location}
          </p>
          <p className="ExperienceItem-date">{date}</p>
        </section>
        <h3 className="ExperienceItem-title px-48">{title}</h3>
        {note && (
          <span className="ExperienceItem-note mx-48">
            <b>Note:</b> {note}
          </span>
        )}
      </section>
      <ul className="ExperienceItem-description flex flex-column gap-8 px-48 ml-16">
        {description.map((item, index) => (
          <li className="font-m" key={`expdesc-${index}`}>
            {item}
          </li>
        ))}
      </ul>
      {skills.length && (
        <section className="px-48 mt-24 flex flex-column align-self--end">
          <h2>Skills</h2>
          <section className="ExperienceItem-skills flex gap-8 flex-wrap">
            {skills.map((skill, index) => (
              <Tag key={`skill-${index}`}>{skill}</Tag>
            ))}
          </section>
        </section>
      )}
    </div>
  )
}
