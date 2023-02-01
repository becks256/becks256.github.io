import React from "react"
import { DarkmodeToggle } from "react-darkmode-hook"
import "./MobileNav.css"

export const MobileNav = () => {
  return (
    <section style={{position: "fixed", top: 0, left: 0, height: "100vh"}}>
      <input type="checkbox" id="hamburger-input" className="burger-shower" />
      <label id="hamburger-menu" htmlFor="hamburger-input">
        <section>
          <span></span>
          <span></span>
          <span></span>
        </section>
        <nav id="sidebar-menu">
          <h3 className="mt-64 mb-32">Menu</h3>
          <ul>
            <li>
              <a href="/" >
                Home
              </a>
            </li>
            <li>
              <a href="#work" >
                Work
              </a>
            </li>
            <li>
              <a href="#skills" >
                Skills
              </a>
            </li>
            <li>
              <a
                href="https://github.com/becks256"
                target="_blank"
                rel="noreferrer"
              >
                @becks256
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Rebel-IST"
                target="_blank"
                rel="noreferrer"
              >
                @Rebel-IST
              </a>
            </li>
            <li>
              <a
                href="https://jsfiddle.net/user/fiddles/titled/"
                target="_blank"
                rel="noreferrer"
              >
                JSFiddle
              </a>
            </li>
            <li>
              <DarkmodeToggle className="pointer flex-no-shrink" />
            </li>
          </ul>
        </nav>
      </label>
      <div className="overlay"></div>
    </section>
  )
}
