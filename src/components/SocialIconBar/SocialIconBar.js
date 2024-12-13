import React from "react"
import { NETWORK_DATA } from "../../utils"
import { clsnx } from "@becks256/clsnx"
import "./SocialIconBar.css"

export const SocialIconBar = () => {
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
        >
          <span className="sr-only">{title}</span>
          <img
            src={image}
            className={clsnx("social-icon logo", {
              "mode-aware": /github|free/gi.test(title),
            })}
            alt={alt}
          />
          <span className="social-icon-tooltip truncate">{description}</span>
        </a>
      ))}
    </div>
  )
}
