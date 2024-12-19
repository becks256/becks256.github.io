import React from "react"
import { clsnx } from "@becks256/clsnx"
import { ExperienceItem } from "./ExperienceItem"
import { RESUME_DATA } from "../../utils/resumeData"

export const ResumeSection = () => {
  return (
    <section className="ResumeSection flex flex-wrap mb-96 gap-48 grid-section">
      {RESUME_DATA.map((data, index) => (
        <ExperienceItem key={`expitem-${index}`} data={data} />
      ))}
      {/* Designs Direct Creative Group | Covington, KY
IT Leader & Full Stack Engineer Dec 2007 – Jan 2021
Note: Began as a designer in 2007, growing to manage a team of 3 designers for the largest account by revenue, and transitioning full-time to full stack engineer in 2015.
•
Delivered one new tool, app, or service every month consistently for 11 months in 2020, offsetting $200K in operational costs, and streamlining workflows across design, merchandising, and production teams.
•
Architected an automated product rendering system for 31 product categories using Node.js, Express.js, React, and Adobe ExtendScript, increasing design output by 477% and avoiding over $500K in costs annually.
•
Developed a server-side-rendered factory quote data scraper & browser using Node.js, Express.js, EJS, and MongoDB, reducing time spent on manual data entry tasks by more than 780 hours annually.
•
Built an automated image parser to extract layout details to enable tens of thousands of personalize-able designs to be integrated into Walgreen's Photo Kiosk image editor.
Projects
MyPrice Agent Summer 2024
•
Engineered and integrated a TensorFlow-based predictive model (1.45% MAE) that instantly generates pricing and specs for new product entries—replacing a 30-hour-per-week overseas quoting process, saving $50K annually, and reducing turnaround from a full day to real-time.
DesignerPowerUXP Winter 2023
•
Created an Adobe UXP Photoshop plugin using React, integrating the Widen DAM API for in-app metadata management & OpenAI API integration for image analysis and automatic metadata generation.
Soulfolioco.com Spring 2022
•
Built a collaborative gift platform with the MERN stack, integrating a custom React image editor, Stripe payments, automated print pre-production with ImageMagick, and scalable cross-device image rendering.
Education
College of Mount St. Joseph 2006 – 2009
•
Bachelor of Fine Art in Graphic Design, Magna cum laude (3.8 GPA)
Skills & Certifications
Skills
•
JavaScript, TypeScript, Python, JSON, React, Node.js, Express.js, Gatsby, MongoDB, CSS, HTML, Responsive Design, Web Accessibility, Figma, AI/ML, TensorFlow, CNNs, scikit-learn, OpenCV, Git, Rollup, Vite, REST APIs
Certified Learning
•
CS50: Introduction to Artificial Intelligence with Python, Harvard University Online, 2024
•
Practitioner of Human-Centered Design, LUMA Institute, 2024
•
JavaScript Algorithms and Data Structures, freeCodeCamp, 2020
•
Web APIs and Microservices, freeCodeCamp, 2020 */}
    </section>
  )
}
