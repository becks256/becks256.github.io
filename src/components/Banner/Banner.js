import React from "react"
import { Header } from "../"
import "./Banner.css"

export const Banner = () => {
  return (
    <>
      <section className="Banner">
        <Header />
        <section className="flex flex-column">
          <h1>Hi!</h1>
          <h1>I'm Dan</h1>
          <h2>
            I love to build web apps and am just beginning my journey to AI & ML expertise.
          </h2>
        </section>
      </section>
      <section className="Banner--background"></section>
    </>
  )
}
