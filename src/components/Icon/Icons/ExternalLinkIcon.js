import React from "react"
import { Icon } from "../Icon"

export const ExternalLinkIcon = ({ fill, size, className, ...other }) => (
  <Icon {...other} className={className} size={size}>
    <path
      fill={fill}
      d="M87.9,38.9c-1-0.4-2.2-0.2-2.9,0.6l-3.8,3.8c-0.5,0.5-0.8,1.3-0.8,2v39.7c0,3.3-2.6,5.9-5.9,5.9H15.1
        c-3.3,0-5.9-2.6-5.9-5.9V25.5c0-3.3,2.6-5.9,5.9-5.9h39.7c0.8,0,1.4-0.4,1.8-0.7l3.9-3.9c0.8-0.8,1-2,0.6-3c-0.4-1-1.4-1.6-2.4-1.6
        H15.1C6.8,10.4,0,17.2,0,25.5v59.4C0,93.2,6.8,100,15.1,100h59.4c8.3,0,15.1-6.8,15.1-15.1V41.4C89.6,40.3,88.9,39.3,87.9,38.9z"
    />
    <path
      fill={fill}
      d="M96.9,0H70C68.3,0,67,1.4,67,3.1v2.5c0,1.7,1.4,3.1,3.1,3.1h15.1L42.5,51.4c-0.6,0.6-0.9,1.4-0.9,2.2c0,0.8,0.3,1.6,0.9,2.2
        l1.8,1.8c0.6,0.6,1.4,0.9,2.2,0.9c0,0,0,0,0,0c0.8,0,1.6-0.3,2.2-0.9l42.7-42.7V30c0,1.7,1.4,3.1,3.1,3.1h2.5c1.7,0,3.1-1.4,3.1-3.1
        V3.1C100,1.4,98.6,0,96.9,0z"
    />
  </Icon>
)
