import {
  soulfolioSnip,
  photoshopSnip,
  myPriceSnip,
  drprepperLogo,
  dapperSnip,
  metaSnip,
  pluralsightSnip,
  fccIcon,
  githubLogo,
  jsfiddleLogo,
  npmLogo,
  linkedinLogo,
  soundcloudLogo,
  websiteGraderSnip,
  designSystemVersioningStrategy,
  youTubeLogo,
  logoDesignExamples,
  codeWheelSnip,
  lookseeSnip,
  headshot,
  metaVideo
} from "../assets"

import React from "react"

import { Message } from "../components"

const MERN = ["MongoDB", "Express.js", "React", "Node"]

export const WORK_DATA = [
  {
    link: "https://www.soulfolioco.com/design",
    media: { image: soulfolioSnip },
    title: "Soulfolio Co",
    description: (
      <>
        Soulfolioco.com is a collaborative web app for creating personalized
        gifts. It features, among other things, a collaborative project space
        and an image editor for personalizing built-in and user-provided images.
        The back-end includes a print production system, which creates
        print-ready files for manufacture after the product is purchased.
      </>
    ),
    techStack: MERN,
    alt: "soulfolioco.com screenshot",
    cta: "View Site",
    date: "2022-2023",
  },
  {
    link: undefined,
    media: { image: photoshopSnip },
    title: "DesignerPower UXP",
    description: (
      <>
        DesignerPower is a Photoshop UXP plugin, which features several modules,
        including those to optimize files for production and a connector for the
        Widen DAM system. DesignerPower enables designers to minimize context
        switching by giving them the power they need to push image assets and
        the necessary metadata that goes with them to their Digital Asset
        Management System, which increases adoption and consistency, as well as
        ensures content freshness for consumers.
      </>
    ),
    techStack: ["Adobe UXP Framework", "React"],
    alt: "designer power uxp plugin screenshot",
    date: "2023-2024",
  },
  {
    link: undefined,
    media: { image: myPriceSnip },
    title: "MyPrice",
    description: (
      <>
        MyPrice is a custom developed solution for an enterprise client whose
        product quotes suffered from a findability problem. This application
        features a file system crawler that seeks out pricing quotes in a shared
        network and imports the information into a database. Users are able to
        search the database with an intuitive front-end that features a shopping
        basket where they can collect price quotes for multiple different
        products and export them to the required format for their customer.
      </>
    ),
    techStack: ["MongoDB", "EJS", "Express.js", "Node"],
    alt: "my price web app screenshot",
    date: "2020-2021",
  },
  {
    link: undefined,
    media: { image: drprepperLogo },
    title: "Dr. Prepper",
    description: (
      <>
        Dr. Prepper is a fully-automated, self-healing product rendering and
        print production system. It's primarily a headless application, but it
        does feature a simple React UI that enables non-developers (designers &
        sales) to initialize and stop processes. The primary interface is a
        series of drop folders that accept image files of any shape, size, and
        type, and the outputs of the system are production-ready art files along
        with the necessary product renderings of the provided art on the product
        it was dropped for. This enables rapid deployment of product and artwork
        to the appropriate ecommerce channels at a ~10x faster rate than could
        be manually accomplished.
      </>
    ),
    techStack: ["Adobe ExtendScript", "React", "Express.js", "Node", "ASP.NET"],
    alt: "dr prepper logo",
    date: "2015-2018",
  },
  {
    link: "https://clumsy-salty-cloth.glitch.me/",
    media: { image: lookseeSnip },
    title: "Looksee",
    description: (
      <>
        <p>
          Looksee was a web app that featured a simple interface to gather
          feedback from prospective buyers on artwork and product designs.
          Images were curated into collections by merchandising associates and
          then shared with a select group of customers. Customers could then
          heart images and add comments to them, which would be used to inform
          the merchandising team on how to move forward with designs, whether
          that be change requests or as-is for prospective sale.
        </p>
        <p>
          The initial POC featured an even simpler UI, similar to a dating app,
          where users could thumbs up or thumbs down images, and the
          merchandising team could see the results in real-time.
        </p>
      </>
    ),
    techStack: ["MongoDB", "EJS", "Express.js", "Node"],
    alt: "looksee web app screenshot",
    date: "2019-2020",
    cta: "View Demo App",
  },
  {
    link: undefined,
    media: { image: dapperSnip },
    title: "Dapper",
    description: (
      <>
        Dapper is a POC web app that would enable non-developers to directly
        manipulate the base color values of the Kroger Design System's color
        system, and deploy modified theme and color changes directly to
        production. The foreseeable value in allowing for on-demand color
        changes rests in themeability of the banner application and the ability
        to accomplish it without developer assistance.
      </>
    ),
    techStack: MERN,
    alt: "dapper web app screenshot",
    date: "2021",
  },
  {
    link: "https://www.kickstarter.com/projects/gadgetek/meta-the-microcontroller-enhanced-tablet-accessory",
    media: {
      image: metaSnip,
      video: metaVideo,
    },
    title: "META - The Microcontroller Enhanced Tablet Accessory",
    description: (
      <>
        META was the first ever tablet case to feature an advanced embedded
        microcontroller with user configurability. It was aimed at the Surface
        Pro line of Microsoft tablet computers and enabled users to work more
        efficiently in a keyboard-less configuration by introducing programmable
        buttons that could be mapped to any keyboard shortcut and attached to
        the device in an elegant and unobtrusive manner.
      </>
    ),
    techStack: ["C++", "Arduino IDE"],
    alt: "meta product screenshot",
    cta: "View Project",
    date: "2015-2016",
  },
  {
    link: "https://www.kickstarter.com/projects/1944993710/890789663?ref=duf72x&token=8ff33972",
    media: { image: codeWheelSnip },
    title: "The Code Wheel Project",
    description: (
      <>
        This never launched (but maybe still someday) KickStarter project dating
        back to 2013 (!) was an invention of mine that aimed to enhance the QR
        code to store more data than a traditional one. The idea was to use a
        circular QR code with a limited color palette to encode more data than
        the binary black and white palette could. For those unfamiliar, a QR
        code simply encodes data in binary and presents that as a block of black
        and white squares. Black squares typically represent 1 and white squares
        0. The goal of the color wheel project was to have colors in addition to
        black and white that could represent combinations of 0 and 1, for
        example, red could represent 00, green 01, blue 10, and yellow 11,
        allowing for 4x the data to be encoded in the same space as a
        traditional QR code.
      </>
    ),
    techStack: null,
    alt: "code wheel concept art screenshot",
    cta: "View Project",
    date: "2013",
  },
  // {
  //   title: "DesignerPower Agent",
  // }
]

export const DESIGN_WORK_DATA = [
  {
    media: { image: logoDesignExamples },
    title: "Logo Design Examples",
    description: (
      <>
        I'm formally educated as a graphic designer and spent 13 years in the
        home decor industry as a designer turned software engineer, and as a
        freelance designer. Here are a few examples of logos I've designed over
        the years.
      </>
    ),
    alt: "logo design examples",
  },
]

export const SKILLS_DATA = [
  {
    link: "https://app.pluralsight.com/profile/dbecker85",
    media: { image: pluralsightSnip },
    title: "Pluralsight",
    description:
      "See my Skill IQs on Pluralsight, most notably the expert level rankings of 94th, 97th, and 98th percentiles for JavaScript, HTML, and CSS respectively as of 2022.",
    alt: "pluralsight user profile screenshot",
    cta: "View Profile",
  },
]

export const NETWORK_DATA = [
  {
    link: "https://github.com/daniel-becker-kr",
    media: { image: githubLogo },
    title: "GitHub @daniel-becker-kr",
    description: "GitHub (work)",
    alt: "daniel-becker-kr github public profile",
  },
  {
    link: "https://github.com/becks256",
    media: { image: githubLogo },
    title: "GitHub @becks256",
    description: "GitHub (personal)",
    alt: "becks256 github public profile",
  },
  // {
  //   link: "https://jsfiddle.net/user/becks256/fiddles",
  //  media: {image: jsfiddleLogo,},
  //   title: "JSFiddle",
  //   description: "Check out my random javascript experiments on JSFiddle.",
  //   alt: "becks256 js fiddle public profile",
  // },
  {
    link: "https://www.npmjs.com/~becks256",
    media: { image: npmLogo },
    title: "npm",
    description: "npm",
    alt: "becks256 npm public profile",
  },
  {
    link: "https://www.linkedin.com/in/becks256/",
    media: { image: linkedinLogo },
    title: "LinkedIn",
    description: "LinkedIn",
    alt: "Dan Becker's LinkedIn public profile",
  },
  {
    link: "https://soundcloud.com/becks256",
    media: { image: soundcloudLogo },
    title: "SoundCloud",
    description: "SoundCloud",
    alt: "becks256 soundcloud public profile",
  },
  {
    link: "https://youtu.be/1puvTPIDgPo?feature=shared",
    title: "YouTube",
    description: "YouTube",
    alt: "becks256 youtube public profile",
    media: { image: youTubeLogo },
  },
  {
    link: "https://www.freecodecamp.org/becks256",
    title: "freeCodeCamp",
    description: "freeCodeCamp",
    alt: "becks256 freeCodeCamp public profile",
    media: { image: fccIcon },
  },
]

export const APP_DATA = {
  year: new Date().getFullYear(),
}

export const PUBLICATION_DATA = [
  {
    link: "https://www.rebel-ist.com/how-i-scored-100-on-hubspots-website-grader/",
    title: "How I Scored 100 on HubSpot's Website Grader",
    description: (
      <>
        Here I chronicled my journey of scoring 100 on HubSpot's Website Grader.
        this post details the technical and non-technical steps taken to achieve
        a perfect score. It's a great read for anyone looking to improve a
        site's performance, particularly if hosted with IIS.
        <Message kind="info" className="my-16">
          This post was originally published in 2016. The business that acquired
          rebel-ist moved all content to a WordPress site, effectively rewriting
          the publication history.
        </Message>
      </>
    ),
    media: { image: websiteGraderSnip },
    cta: "View Post",
  },
  {
    title: "Design System Unified Versioning Strategy",
    description: (
      <>
        This is a design system versioning strategy that I wrote for the Kroger
        Design System. It details tiers of support from design down through
        component library implementation, as well as the bundling of platform
        libraries into a single package for deployment where all align on a
        common version number and release cadence. It also entertains the idea
        of adopting <code>calver</code> as the version numbering scheme, which
        would enable the system to be more predictable, and to be able to
        communicate the nature of the changes in a more meaningful way.
      </>
    ),
    media: { image: designSystemVersioningStrategy },
  },
]

export const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

export const getElapsedYears = (year) => new Date().getFullYear() - year

export const ABOUT_ME_DATA = {
  title: "About Me",
  media: { image: headshot },
  description: (
    <div className="lg:px-48 mb-24 mt-32">
      <p>
        Hi, I’m a software engineer with a BFA in graphic design, blending
        creativity with technology to push boundaries in web development and
        process automation. My journey has evolved, and I’m now steering toward
        a future as an AI researcher. Actively engaged in AI/ML projects, I’ve
        recently earned a certificate in AI development with Python, gaining
        hands-on experience in deep learning and computer vision. I’m also
        awaiting acceptance into an AI Master’s program, furthering my
        commitment to this exciting field.
      </p>
      <p>
        Early in my career, I developed a program that could assemble artistic
        compositions from labeled assets with creative randomness—recreating my
        own artistic process in code. Though not predictive or probabilistic,
        the work was inspired by ML projects of the time, such as “The Next
        Rembrandt” and pix2pix. In hindsight, it had some alignment with AI in
        terms of labeling, but was primarily instructional. Now, with a deeper
        understanding of AI, I’m excited to continue expanding my knowledge in
        this rapidly growing field.
      </p>
      <p>
        Curiosity and invention drive everything I do. Whether it’s creating a
        web application, automating a process, or experimenting with AI models,
        I love the challenge of bringing new ideas to life and constantly
        pushing myself to learn more.
      </p>
      <p>
        While I’m well-versed in the MERN stack, I’m always exploring new
        technologies and methodologies. My current focus is on advancing my AI
        expertise, but I remain passionate about delivering impactful software
        solutions and staying at the forefront of innovation.
      </p>
      <p>
        Outside of tech, I’ve been playing guitar for over{" "}
        {getElapsedYears(2000)} years and producing ambient music for{" "}
        {getElapsedYears(2011)} years. Creativity in all its forms fuels me,
        whether it’s coding or composing soundscapes.
      </p>
    </div>
  ),
}

export const FEEDBACK_DATA = [
  {
    name: "Amelia Y.",
    feedback:
      "Dan is a highly collaborative developer who enjoys interacting with others and sharing ideas. He's talented with both engineering and design, and this allows him to execute with a high level of thoughtfulness and consistent excellence. He shows an enthusiasm for web development that is refreshing to work with. He's a great communicator with a friendly personality, and would be an excellent leader.",
  },
  {
    name: "Amy D.",
    feedback:
      "Dan demonstrated his innovative and strategic thinking and passion for innovation at Katalyst. I had the pleasure of getting to know him via Katalyst and he was a great team player that pushed the team to think bigger.",
  },
  {
    name: "Andy G.",
    feedback:
      "Dan is a critical thinker who has served the KDS Site team well by providing clear strategic direction. He excels at breaking large projects down into workable chunks and has helped the site team produce very accurate estimates for the work. This positive influence led the Site team to achieve all of our committed objectives and key results in Q2. Dan works well with others and has been an incredible help coaching and developing some of the junior members of the site team.",
  },
  {
    name: "Andy G.",
    feedback:
      "Dan works well with others, communicates clearly, and helps coach and develop others by sharing best practices and pairing with junior developers. He is one of the most productive members of the team and does so with a positive attitude that radiates an uplifting atmosphere.",
  },
  {
    name: "Anonymous",
    feedback:
      "A big part of being on a team like KDS, providing and maintaining a system with such extensive reach across the organization, is effective communication. Dan has been doing an awesome job of communicating upcoming KDS changes and new capabilities at web guild and through Teams.",
  },
  {
    name: "Anonymous",
    feedback:
      "Dan Becker stands out as a highly valuable member of our team. His openness in sharing ideas is one of his key strengths. Dan's proactive approach to tasks is admirable. He's quick to take initiative and ensures that everyone is informed and on the same page. His updates during team meetings are clear and thorough, which helps in keeping the team aligned and focused.",
  },
  {
    name: "Anonymous",
    feedback:
      "Dan has absolutely done an exceptional job these last two quarters. With the departure of [the previous engineering lead], Dan was tasked to lead the team updating KDS-react to the new color system, as well as performing all the work to update Esperanto's codebase to work with the new color system. Through Dan's leadership, the new KDS CX support team was able to complete all of their work and hit almost all of their deadlines with little setbacks. He has been communicative, supportive, and diligent in fulfilling the team's goal of delivering the color system and has followed through with determination and skill.",
  },
  {
    name: "Anonymous",
    feedback:
      "Dan has an outsized positive influence on our small team, by his positive leadership and expertise in the KDS web space. He's very approachable and always willing to share knowledge or troubleshoot a problem.",
  },
  {
    name: "Anonymous",
    feedback:
      "Dan has been great at collaborating with our team, and flexing to provide us something to use sooner by breaking down bigger problems into smaller steps. He makes us feel seen and like we're important team members.",
  },
  {
    name: "Anonymous",
    feedback:
      "Dan is a great communicator who is approachable, relatable, and excellent at describing current status and blockers to progress in status meetings. I've noticed him anticipate KDS consumer needs ahead of time while working on the color system conversion.",
  },
  {
    name: "Anonymous",
    feedback:
      "Dan is able to communicate clearly and effectively. During a recent project that impacted numerous teams, Dan worked with other groups to ensure all parties involved understood the impact of the changes he worked on. Dan has been willing to answer questions, help coach others not as familiar in the space, and clearly puts the customer first.",
  },
  {
    name: "Anonymous",
    feedback:
      "Dan is an excellent communicator who contributes to most conversations, is genuinely interested in everyone’s input and opinions, and is able to understand others’ concerns and work that into his solutions. He’s always willing to jump in where he thinks he can assist and will offer insights from his broad experience to help the team achieve a resolution.",
  },
  {
    name: "Anonymous",
    feedback:
      "Dan is highly creative and excellent at identifying and developing innovative ideas, and he takes the customer into consideration when developing new concepts. He's action-oriented and focused in a way that's motivating and inspiring to others, but he's also willing to slow down and explain concepts and decisions and seek feedback from the team.",
  },
  {
    name: "Anonymous",
    feedback:
      "Dan is highly motivated and proactive about identifying work to be done, and about suggesting ways to improve processes and team interactions. He’s able to plan and execute a course of action efficiently and is attentive to priorities while taking note of issues that may need to be addressed later.",
  },
  {
    name: "Anonymous",
    feedback:
      "Dan is passionate about his work and consistently delivers meaningful results. He can regularly be found in pairing and mobbing sessions. He seeks feedback and guidance and makes strong attempts to resolve conflict and consider all differences and perspectives.",
  },
  {
    name: "Anonymous",
    feedback:
      "Dan uses his broad knowledge of innovation principles to generate solutions and evaluate problems. He has been effective in collaborating with designers and NGPOS to expand the UI customization that we offer through themes.",
  },
  {
    name: "Anonymous",
    feedback:
      "I was and continue to be happy to have Dan on the team and focused on system objectives. His open, honest, and empathetic nature has helped bring the web devs together during a time of great change. Dan's experience as both a team leader and individual contributor, in combination with his skills in listening, understanding, reiterating, and communicating, have created a kind of bolstering around and within collaborative efforts.",
  },
  {
    name: "Anthony I.",
    feedback:
      "Dan has far exceeded normal expectations of an engineer at his level. He has been highly effective on several different projects, which I credit to his solid technical skills, ability to apply useful patterns of thinking to problems, openness to feedback, and outstanding productivity habits. Dan has been a team member who workstream leads can rely on to push a project forward.",
  },
  {
    name: "Brandon M.",
    feedback:
      "Dan has been a key leader and an amazing team member on the new color system implementation project. He has led the web team to success and has assisted the native teams as well. His updates are always clear and concise, and he provides clear and strategic direction.",
  },
  {
    name: "Christopher W.",
    feedback:
      "Dan was a fantastic partner during the Kroger Katalyst workshop, contributing excellent ideas and critical thought. He helped evaluate and reimagine our idea more than once. Dan also agreed to be our 'pitch man', singularly delivering the presentation for our proposed solution.",
  },
  {
    name: "Elizabeth R.",
    feedback:
      "The token approach strategy that Dan documented was thorough and thoughtful. He reached out to connect on design deliverables and timing - he was proactive and easy to collaborate with.",
  },
  {
    name: "Gerald F.",
    feedback:
      "Dan does everything right. He is humble, yet forthcoming. Polite in his directness. Effective at communication in a variety of forums. He delivers high-quality code and has come to understand the depth and breadth of KDS offerings. His expertise in innovation and leadership were essential to our experimentation with NGPOS and large format touch theme capabilities.",
  },
  {
    name: "Heather K.",
    feedback:
      "Dan is an impressive associate! Dan persisted and truly led the team to broaden their thinking and explore alternative outcomes. He listened to everyone's viewpoints, he synthesized the information, and he influenced without being dominant. Within a short timeframe, the strong personalities started to listen and were open to new ideas.",
  },
  {
    name: "Jacob S.",
    feedback:
      "Dan has done a great job of helping out our team, particularly with the shoppable weekly ad. He was a big part of finding and executing a short-term and long-term plan for getting the bold Nunito font available in Esperanto.",
  },
  {
    name: "Jake S.",
    feedback:
      "Dan excels in leading through positive influence and coaching others. He values others' opinions and encourages team discussions, even if it goes against what others are saying.",
  },
  {
    name: "Jeremiah B.",
    feedback:
      "Dan exhibits the KLM behaviors by proactively initiating ongoing collaborative meetings and seeking to strengthen our offering to the customer. He has partnered with other design leaders to make our connection between the Figma libraries and what is in the KDS code as tight as possible.",
  },
  {
    name: "Justin N.",
    feedback:
      "Dan is always actively looking into something new, voicing opinions, and asking questions. He has proven himself to be an asset to the team. Dan was instrumental in the success of the KDS web core team this year, quickly completing work and suggesting improvements along the way.",
  },
  {
    name: "Orville B.",
    feedback:
      "Dan is a good communicator and able to share his ideas in a clear, organized fashion. He achieves results through teamwork, always ready and willing to pair with others, help out, and offer suggestions to get past or improve upon an idea. His work is of high quality and he sweats the details, even spellchecking code before submitting it.",
  },
  {
    name: "Paul C.",
    feedback:
      "Dan is a high performer, executes with excellence, is flexible, and a huge asset to the team. When Dan speaks up, he always contributes in a positive way to help move things forward for the team.",
  },
]

export const getRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const LINK_DATA = [
  { href: "#publications", innerText: "Publications" },
  { href: "#skills", innerText: "Skills" },
  { href: "#projects", innerText: "Projects" },
  { href: "#networks", innerText: "Networks" },
  { href: "#experience", innerText: "Experience" },
  // { href: "#about", innerText: "About Me" },
  // { href: "/", innerText: "Home" },
]
