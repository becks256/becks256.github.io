import React from "react"
import "./Tag.css"
import { clsnx } from "@becks256/clsnx"

export const Tag = ({ children, className, kind, ...props }) => {
  return (
    <button className={clsnx("tag", className, kind && `tag--${kind}`)} {...props}>
      {children}
    </button>
  )
}
