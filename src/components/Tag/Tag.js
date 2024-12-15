import React from "react"
import "./Tag.css"
import { clsnx } from "@becks256/clsnx"

export const Tag = ({ children, className, kind, tag: Tag = 'button', ...props }) => {
  return (
    <Tag className={clsnx("tag", className, kind && `tag--${kind}`)} {...props}>
      {children}
    </Tag>
  )
}
