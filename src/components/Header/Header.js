import React, { useEffect } from "react"
import { DarkmodeToggle } from "react-darkmode-hook"
import { LINK_DATA } from "../"

import "./Header.css"

export const Header = () => {
  const ref = React.useRef()

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight - 90) {
        ref.current?.classList.add("Header--condensed")
      } else {
        ref.current?.classList.remove("Header--condensed")
      }
    })
  }, [])

  const clickHandler = (e, item) => {
    e.preventDefault()

    if (item.href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const headerHeight = ref.current?.offsetHeight + 50
    const targetElement = document.querySelector(item.href)

    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
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
