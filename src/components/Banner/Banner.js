import React from "react"
import { Header } from "../"
import "./Banner.css"

export const Banner = () => {
  return (
    <>
      <section className="Banner">
        <Header />
        <div className="Banner--icon">
          <span class="chevron orange"></span>
          <span class="chevron red"></span>
          <span class="chevron lt-purple"></span>
          <span class="chevron purple"></span>
          <span class="chevron white"></span>
        </div>
        <section className="flex flex-column">
          <h1>Hi!</h1>
          <h1>I'm Dan</h1>
          <h2>
            I love to create tech solutions, like web apps and services. I love
            it even more when those solutions empower users to do unique &
            meaningful things.
          </h2>
        </section>
      </section>
      <section className="Banner--background"></section>
    </>
  )
}
