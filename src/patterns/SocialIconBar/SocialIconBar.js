import React from "react"
import { clsnx } from "@becks256/clsnx"
import { NETWORK_DATA } from "../../utils"
import { MediaViewer } from "../../components"
import "./SocialIconBar.css"

export const SocialIconBar = () => {
  return (
    <div className="social-icon-bar">
      {NETWORK_DATA.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
      ).map(({ link, media, title, description, alt }) => (
        <a
          key={title}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
          title={title}
        >
          <span className="sr-only">{title}</span>
          <MediaViewer
            media={media}
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
