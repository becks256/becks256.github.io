import React from "react"
import { Icon } from "../Icon"

export const CaretDownIcon = ({ fill, size, className, ...other }) => (
  <Icon {...other} className={className} size={size}>
    <path
      fill={fill}
      d="M43.5,79.3L2.2,32c-4.9-5.6-0.9-14.3,6.5-14.3h82.7c4.8,0,8.6,3.9,8.6,8.6c0,2.1-0.8,4.1-2.1,5.7L56.5,79.3
	c-3.1,3.6-8.6,4-12.2,0.8C44,79.9,43.8,79.6,43.5,79.3L43.5,79.3z"
    />
  </Icon>
)
