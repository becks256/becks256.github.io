import React from "react"
import { DarkmodeToggle } from "react-darkmode-hook"

import "./Header.css"

export const Header = () => {
  return (
    <nav className="Header">
      <DarkmodeToggle className="px-16 pointer" />
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
