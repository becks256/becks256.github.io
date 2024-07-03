import React, { useEffect, useState } from "react"
import { DarkmodeToggle } from "react-darkmode-hook"
import { MobileNav } from "../"

import "./Header.css"

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false)
  const ref = React.useRef()

  useEffect(() => {
    ;/mobile/gi.test(navigator?.userAgent) && setIsMobile(true)
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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight - 90) {
        ref.current.classList.add("Header--condensed")
      } else {
        ref.current.classList.remove("Header--condensed")
      }
    })
  }, [])

  const clickHandler = (e, item) => {
    e.preventDefault()

    if (item.href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    // Select your header and the target element
    const headerHeight = ref.current.offsetHeight + 50 // Adjust this to your header's selector
    const targetElement = document.querySelector(item.href)

    if (targetElement) {
      // Calculate the position you want to scroll to
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight

      // Smooth scroll to the calculated position
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  const LINK_DATA = [
    { href: "#publications", innerText: "Publications" },
    { href: "#skills", innerText: "Skills" },
    { href: "#projects", innerText: "Projects" },
    { href: "#networks", innerText: "Networks" },
    { href: "/", innerText: "Home" },
  ]

  return isMobile ? (
    <MobileNav links={LINK_DATA} />
  ) : (
    <nav ref={ref} className="Header">
      <DarkmodeToggle className="px-16 pointer flex-no-shrink" />
      {LINK_DATA.map((item, index) => (
        <a
          key={`headerlink-${index}`}
          href={item.href}
          className="Header-link"
          onClick={(e) => clickHandler(e, item)}
        >
          {item.innerText}
        </a>
      ))}
    </nav>
  )
}
