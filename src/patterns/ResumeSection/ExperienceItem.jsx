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
    <div className="Card ExperienceItem overflow-hidden pb-48 pt-24">
      <section className="ExperienceItem-container flex flex-column justify-content--between flex-grow gap-48">
        <section className="flex flex-column gap-8">
          <section className="ExperienceItem-header flex justify-content--between mx-48 mt-16 align-items--center">
            {logo && (
              <a href={url} target="_blank" rel="noreferrer">
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
          <section className="ExperienceItem-employment-info px-48 flex justify-content--between font-italic">
            <p className="ExperienceItem-company">
              {company} | {location}
            </p>
            <p className="ExperienceItem-date">{date}</p>
          </section>
          <section className="ExperienceItem-content px-48">
            <h3 className="ExperienceItem-title">{title}</h3>
            {note && (
              <p className="ExperienceItem-note">
                <b>Note:</b> {note}
              </p>
            )}
          </section>
          <ul className="ExperienceItem-description flex flex-column gap-8 ml-16 px-48">
            {description.map((item, index) => (
              <li className="font-m" key={`expdesc-${index}`}>
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="flex flex-column gap-32 px-48">
          {skills.length && (
            <section className="ExperienceItem-skills flex gap-8 flex-wrap">
              {skills.map((skill, index) => (
                <Tag key={`skill-${index}`}>{skill}</Tag>
              ))}
            </section>
          )}
        </section>
      </section>
    </div>
  )
}
