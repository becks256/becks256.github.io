import {
  soulfolioSnip,
  photoshopSnip,
  myPriceSnip,
  drprepperLogo,
  dapperSnip,
  metaSnip,
  pluralsightSnip,
  fccSnip,
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
} from "../assets"

import React from "react"

import { Message } from "../components"

export const WORK_DATA = [
  {
    link: "https://www.soulfolioco.com",
    image: soulfolioSnip,
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
    techStack: "MERN",
    alt: "soulfolioco.com screenshot",
  },
  {
    link: undefined,
    image: photoshopSnip,
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
    techStack: "Adobe UXP Framework & React",
    alt: "designer power uxp plugin screenshot",
  },
  {
    link: undefined,
    image: myPriceSnip,
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
    techStack: "MongoDB, EJS, Express, Node",
    alt: "my price web app screenshot",
  },
  {
    link: undefined,
    image: drprepperLogo,
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
    techStack: "Adobe ExtendScript, React, Express, Node, Powershell",
    alt: "dr prepper logo",
  },
  {
    link: undefined,
    image: dapperSnip,
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
    techStack: "MERN",
    alt: "dapper web app screenshot",
  },
  {
    link: "https://www.kickstarter.com/projects/gadgetek/meta-the-microcontroller-enhanced-tablet-accessory",
    image: metaSnip,
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
    techStack: "C++ & Arduino IDE",
    alt: "meta product screenshot",
  },
  {
    link: "https://www.kickstarter.com/projects/1944993710/890789663?ref=duf72x&token=8ff33972",
    image: codeWheelSnip,
    title: "The Code Wheel Project",
    description: (
      <>
        This never launched (but maybe still someday) KickStarter project dating back to 2013 (!) was an invention of mine that aimed to enhance the QR code to store more data than a traditional one. The idea was to use a circular QR code with a limited color palette to encode more data than the binary black and white palette could could. For those unfamiliar, a QR code simply encodes data in binary and presents that as a block of black and white squares. Black squares typically represent 1 and whites squares 0.  The goal of the color wheel project was to have colors in addition to black and white that could represent combinations of 0 and 1, for example, red could represent _00_, green 01, blue 10, and yellow 11, allowing for 4x the data to be encoded in the same space as a traditional QR code.
      </>
    ),
    techStack: "TBD",
    alt: "code wheel concept art screenshot",
  },
]

export const DESIGN_WORK_DATA = [
  {
    image: logoDesignExamples,
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

export const NETWORK_DATA = [
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
    description:
      "Check out some things I developed under contract for Rebel-IST on GitHub",
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
    description: "See my work experience and history on LinkedIn.",
    alt: "Dan Becker's LinkedIn public profile",
  },
  {
    link: "https://soundcloud.com/becks256",
    image: soundcloudLogo,
    title: "SoundCloud",
    description: "Have a listen to some noise I've created on SoundCloud.",
    alt: "becks256 soundcloud public profile",
  },
  {
    link: "https://youtu.be/1puvTPIDgPo?feature=shared",
    title: "YouTube",
    description:
      "Watch this timelapse of my wife and I painting a massive mural on the side of a barn",
    alt: "becks256 youtube public profile",
    image: youTubeLogo,
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
    image: websiteGraderSnip,
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
    image: designSystemVersioningStrategy,
  },
]
