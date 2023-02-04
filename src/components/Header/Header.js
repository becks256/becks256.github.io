import React, { useEffect, useState } from "react"
import { DarkmodeToggle } from "react-darkmode-hook"
import { MobileNav } from "../"

import "./Header.css"

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    /mobile/gi.test(navigator?.userAgent) && setIsMobile(true)
    window.innerWidth < 900 && setIsMobile(true)
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

  const LINK_DATA = [
    { href: "#networks", innerText: "Networks" },
    { href: "#skills", innerText: "Skills" },
    { href: "#work", innerText: "Work" },
    { href: "/", innerText: "Home" },
  ]

  return isMobile ? (
    <MobileNav links={LINK_DATA} />
  ) : (
    <nav className="Header">
      <DarkmodeToggle className="px-16 pointer flex-no-shrink" />
      {LINK_DATA.map((item, index) => (
        <a key={`headerlink-${index}`} href={item.href} className="Header-link">
          {item.innerText}
        </a>
      ))}
    </nav>
  )
}
