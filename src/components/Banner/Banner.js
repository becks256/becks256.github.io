import React from "react"
import { Header, MobileNav, WebGLBanner } from "../"
import { InfoIcon } from "../Icon/Icons/InfoIcon"
import { CaretDownIcon } from "../Icon/Icons/CaretDownIcon"
import "./Banner.css"

export const Banner = ({ isMobile }) => {
  const [showTooltip, setShowTooltip] = React.useState(false)
  return (
    <>
      <section className="Banner">
        <div className="Banner--info-icon"
          onClick={() => {
            console.log("clicked")
            setShowTooltip(!showTooltip)
          }}
          onMouseOver={() => setShowTooltip(true)}
          onMouseOut={() => setShowTooltip(false)}
        >
          <InfoIcon fill="#FFFFFF" />
        </div>
        {showTooltip && (
          <div
            className="Banner--tooltip"
          >
            These linear elements represent the intersections of human
            experiences, inspired by my studies of Josef Albers' color theory.
            Each line symbolizes a journey, with intersections marking moments
            of shared experience and growth.
          </div>
        )}
        {isMobile ? <MobileNav /> : <Header />}
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
      <div style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
        {/* <section className="Banner--background"></section> */}
        <WebGLBanner />
      </div>
    </>
  )
}
