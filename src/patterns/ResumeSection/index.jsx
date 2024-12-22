import React from "react"
import { ExperienceItem } from "./ExperienceItem"
import { RESUME_DATA } from "../../utils/resumeData"

export const ResumeSection = () => {
  return (
    <section className="ResumeSection mb-96 grid-section">
      {RESUME_DATA.map((data, index) => (
        <ExperienceItem key={`expitem-${index}`} data={data} />
      ))}
    </section>
  )
}
