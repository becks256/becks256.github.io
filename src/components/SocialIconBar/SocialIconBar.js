import React from "react"
import { NETWORK_DATA } from "../../utils"
import { clsnx } from "@becks256/clsnx"
import "./SocialIconBar.css"

export const SocialIconBar = () => {
  const [hoveredItem, setHoveredItem] = React.useState(false)

  const handleMouseEnter = (e) => setHoveredItem(e.currentTarget.title)
  const handleMouseLeave = () => setHoveredItem(null)

  return (
    <div className="social-icon-bar">
      {NETWORK_DATA.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
      ).map(({ link, image, title, description, alt }) => (
        <a
          key={title}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
          title={title}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={ref => ref && ref.title === title && ref.style.setProperty('--hover-height', ref.offsetHeight + 100 + 'px')}
        >
          <span className="sr-only">{title}</span>
          <img
            src={image}
            className={clsnx("social-icon logo", {
              "mode-aware": /github|free/gi.test(title),
            })}
            alt={alt}
          />
          <span
            className={clsnx("social-icon-tooltip", {
              visible: hoveredItem === title,
            })}
          >
            {description}
          </span>
        </a>
      ))}
    </div>
  )
}
