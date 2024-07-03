import React from "react"
import { Header } from "../"
import "./Banner.css"
import { CaretDownIcon } from "../Icon/Icons/CaretDownIcon"

export const Banner = () => {
  return (
    <>
      <section className="Banner">
        <Header />
        {/* <div className="Banner--icon">
          <span className="chevron orange"></span>
          <span className="chevron red"></span>
          <span className="chevron lt-purple"></span>
          <span className="chevron purple"></span>
          <span className="chevron white"></span>
        </div> */}
        <section className="Banner--content flex flex-column">
          <h1>Hi!</h1>
          <h1>I'm Dan</h1>
          <h2>
            I love to create tech solutions, like web apps and services. I love
            it even more when those solutions empower users to do unique &
            meaningful things.
          </h2>
        </section>
        <CaretDownIcon className="Banner--icon" fill={"#fff"} />
      </section>
      <section className="Banner--background"></section>
    </>
  )
}
