import { clsnx } from "@becks256/clsnx"
import React from "react"
import "./Icon.css"


/**
 * 
 * @prop {string} size - one of "xs", "s", "m", "l", "xl", "xxl", "xxxl" 
 * @returns 
 */
export const Icon = ({
  size = "s",
  children,
  className = "",
  ...props
}) => (
  <i {...props} className={clsnx(className, `icon icon-${size}`)}>
    <svg x="0px" y="0px" viewBox="0 0 100 100">
      {children}
    </svg>
  </i>
)
