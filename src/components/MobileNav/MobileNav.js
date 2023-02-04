import React from "react"
import { DarkmodeToggle } from "react-darkmode-hook"
import "./MobileNav.css"

export const MobileNav = ({links}) => {
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
          {links.reverse().map((item, index) => (
            <li key={`moblenav-${index}`}>
              <a href={item.href}>
                {item.innerText}
              </a>
            </li>
          ))}
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
