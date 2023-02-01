import React, { useEffect, useState } from "react"
import { DarkmodeToggle } from "react-darkmode-hook"
import { MobileNav } from "../"

import "./Header.css"

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    ;/mobile/gi.test(navigator.userAgent) && setIsMobile(true)
    window.addEventListener("resize", () => {
      let width = window.innerWidth
      setIsMobile(width < 900)
    })
    return () =>
      window.removeEventListener("resize", () => {
        let width = window.innerWidth
        setIsMobile(width < 900)
      })
  }, [])

  return isMobile ? (
    <MobileNav />
  ) : (
    <nav className="Header">
      <DarkmodeToggle className="px-16 pointer flex-no-shrink" />
      <a
        href="https://github.com/becks256"
        className="Header-link"
        target="_blank"
        rel="noreferrer"
      >
        @becks256
      </a>
      <a
        href="https://github.com/Rebel-IST"
        className="Header-link"
        target="_blank"
        rel="noreferrer"
      >
        @Rebel-IST
      </a>
      <a
        href="https://jsfiddle.net/user/fiddles/titled/"
        className="Header-link"
        target="_blank"
        rel="noreferrer"
      >
        JSFiddle
      </a>
      <a href="#skills" className="Header-link">
        Skills
      </a>
      <a href="#work" className="Header-link">
        Work
      </a>
      <a href="/" className="Header-link">
        Home
      </a>
    </nav>
  )
}
