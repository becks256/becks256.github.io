import React from "react"
import { Icon } from "../Icon"

export const InfoIcon = ({ fill, size, className, ...other }) => (
  <Icon {...other} className={className} size={size}>
    <path
      fill={fill}
      d="M50,3.5C24.3,3.5,3.5,24.3,3.5,50S24.3,96.5,50,96.5S96.5,75.7,96.5,50S75.7,3.5,50,3.5z M50,19.4
	c2.8,0,5.1,2.3,5.1,5.1s-2.3,5.1-5.1,5.1s-5.1-2.3-5.1-5.1S47.2,19.4,50,19.4z M55,76.5c0,2.3-1.6,4.1-3.7,4.1h-2.7
	c-0.9,0-1.8-0.4-2.5-1c-0.8-0.8-1.2-1.9-1.2-3l-0.1-32.7c0-2.3,1.6-4.1,3.7-4.1h2.9c1,0,1.8,0.4,2.5,1c0.7,0.7,1.2,1.8,1.2,3
	L55,76.5z"
    />
  </Icon>
)