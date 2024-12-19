import React from "react"
import { ddcgLogo, gadgetekLogo, krogerLogo, rebelLogo } from "../assets"
import { Highlight } from "../components"
const calculateTenure = (startYear, endYear) => {
  const currentYear = new Date().getFullYear()
  return `${(endYear || currentYear) - startYear} years`
}
export const RESUME_DATA = [
  {
    title: "Sr. Software Engineer & Co-Tech Lead, Kroger Design System",
    company: "The Kroger Co.",
    location: "Cincinnati, OH",
    date: "Feb 2021 – Present",
    description: [
      <>
        Jointly <Highlight>re-architected</Highlight> the web platform library
        offerings, reducing the number of libraries from 6 to 3.
      </>,
      <>
        Developed automated asset generation processes for tokens and icons,
        resulting in <Highlight>89% faster release times</Highlight>.
      </>,
      <>
        Utilized graph traversal algorithms to transform Figma variables fetched
        via REST API into CSS token stylesheets.
      </>,
      <>
        <Highlight>Led the development</Highlight> of a custom{" "}
        <Highlight>HTML to TSX (React + TypeScript)</Highlight> component
        generation framework.
      </>,
      <>
        Developed a CSS mask-image solution to deliver icons for the web
        platform, <Highlight>reducing icon bundle size by 40%.</Highlight>
      </>,
      <>
        Partnered with the Web Performance Team to test and implement
        font-loading strategies, driving <Highlight>$5.9M</Highlight> in
        annualized incremental revenue.
      </>,
      <>
        Led a four-person statement of work team to migrate the kroger.com web
        app to an updated component library.
      </>,
      <>
        Developed an automated codebase crawler and audit tool to locate
        outdated APIs, reducing migration time by 80%.
      </>,
    ],
    logo: krogerLogo,
    url: "https://www.kroger.com/",
    alt: "Kroger Logo",
    tenure: calculateTenure(2021),
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Gatsby",
      "MongoDB",
      "CSS",
      "HTML",
      "Responsive Design",
      "Web Accessibility",
      "Figma",
      "Git",
      "Rollup",
      "Vite",
      "REST APIs",
      "Video editing",
    ],
  },
  {
    title: "IT Leader & Full Stack Engineer",
    company: "Designs Direct Creative Group",
    location: "Covington, KY",
    date: "Dec 2007 – Jan 2021",
    note: (
      <>
        Began as a designer in 2007, growing to manage a team of 3 designers for
        the largest account by revenue, and transitioning full-time to full
        stack engineer in 2015.
      </>
    ),
    description: [
      <>
        Delivered one new tool, app, or service every month consistently for 11
        months in 2020, offsetting <Highlight>$200K</Highlight> in operational
        costs, and streamlining workflows across design, merchandising, and
        production teams.
      </>,
      <>
        Architected an automated product rendering system for 31 product
        categories using Node.js, Express.js, React, and Adobe ExtendScript,
        increasing design output by <Highlight>477%</Highlight> and avoiding
        over <Highlight>$500K</Highlight> in costs annually.
      </>,
      <>
        Developed a server-side-rendered factory quote data scraper & browser
        using Node.js, Express.js, EJS, and MongoDB,{" "}
        <Highlight>reducing time</Highlight> spent on manual data entry tasks{" "}
        <Highlight>by more than 780 hours</Highlight> annually.
      </>,
      <>
        Built an automated image parser to extract layout details to enable tens
        of thousands of personalize-able designs to be integrated into
        Walgreen's Photo Kiosk image editor.
      </>,
    ],
    logo: ddcgLogo,
    url: "https://www.designsdirectllc.com/",
    alt: "Designs Direct Creative Group Logo",
    tenure: calculateTenure(2007, 2021),
    skills: [
      "JavaScript",
      "Python",
      "JSON",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "CSS",
      "HTML",
      "Responsive Design",
      "REST APIs",
      "Adobe ExtendScript",
      "Adobe UXP",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Senior Leadership",
    ],
  },
  {
    title: "Founder & Product Inventor",
    company: "Gadgetek",
    location: "Wilder, KY",
    date: "Jan 2013 – Dec 2015",
    note: (
      <>
        Invented and launched the META microcontroller-enhanced tablet
        accessory, managing all aspects of product development, intellectual
        property, and crowdfunding.
      </>
    ),
    description: [
      <>
        Conceptualized and developed the META accessory from ideation to a fully
        production-ready prototype, including{" "}
        <Highlight>embedded electronics</Highlight>,{" "}
        <Highlight>prototyping</Highlight>, and preparation for factory
        manufacturing.
      </>,
      <>
        Drafted and filed <Highlight>patent</Highlight> applications and
        trademarks to secure intellectual property rights for the product.
      </>,
      <>
        Designed, engineered, and fabricated prototypes using C++, Arduino, 3D
        printing, and CAD software.
      </>,
      <>
        <Highlight>Launched a Kickstarter</Highlight> campaign to secure
        funding, creating all campaign materials including video editing,
        marketing copy, and graphics.
      </>,
      <>
        Coordinated <Highlight>sourcing and logistics</Highlight> with
        manufacturing partners, establishing relationships to prepare for mass
        production.
      </>,
      <>
        Led the integration of microcontrollers and electronics into the
        accessory, leveraging expertise in <Highlight>Arduino</Highlight> and
        custom firmware development.
      </>,
      <>
        Independently managed all aspects of product development and business
        planning, gaining valuable experience despite the campaign not meeting
        funding goals.
      </>,
    ],
    logo: gadgetekLogo,
    url: "https://www.kickstarter.com/projects/gadgetek/meta-the-microcontroller-enhanced-tablet-accessory",
    alt: "Meta Kickstarter Campaign",
    tenure: calculateTenure(2013, 2015),
    skills: [
      "Patent Writing",
      "Trademarks",
      "Sourcing",
      "Prototyping",
      "Embedded Electronics",
      "C++",
      "Arduino",
      "Kickstarter",
      "3D Printing",
      "CAD",
      "Campaigning",
      "Video Editing",
      "Production",
      "Crowdfunding",
      "Logistics",
      "Entrepreneurship",
    ],
  },
  // {
  //   title: "COO & Executive VP",
  //   company: "Rebel Internet Systems & Technologies",
  //   location: "Springboro, OH",
  //   date: "Oct 2016 – Feb 2021",
  //   description: [
  //     <>
  //       Led a small team of IT technicians to manage the day-to-day operations of
  //       a web hosting and development company.
  //     </>,
  //     <>
  //       Migrated the company's web hosting infrastructure to a new data center,
  //       reducing costs by <Highlight>30%</Highlight>.
  //     </>,
  //   ],
  //   logo: rebelLogo,
  //   url: "https://www.rebel-ist.com/",
  //   alt: "Rebel Internet Systems & Technologies Logo",
  //   tenure: calculateTenure(2016, 2021),
  //   skills: [
  //     "Leadership",
  //     "Team Management",
  //     "Web Hosting",
  //     "Data Center Migration",
  //     "Cost Reduction",
  //   ],
  // }
]
