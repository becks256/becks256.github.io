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
        <div
          className="Banner--info-icon"
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
          <div className="Banner--tooltip">
            During my first year in art school, I was fascinated with color
            theory and the works of Josef Albers. I created a large study of
            color interactions inspired by his work, but my approach was also
            intended to explore the connections between people and the shared
            experiences that shape us. This notion was embodied in a visual form
            represented by linear elements intersecting and having effects on
            one another, while also generally exploring the world of color
            interaction . This banner is a my first deep dive into WebGL and a
            digital recreation of that study.
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
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100vw",
        }}
      >
        {/* <section className="Banner--background"></section> */}
        <WebGLBanner />
      </div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgb(40,40,40)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -3,
        }}
      ></div>
    </>
  )
}
