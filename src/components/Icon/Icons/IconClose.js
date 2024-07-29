import React from "react"
import { Icon } from "../Icon"

export const IconClose = ({ fill, size, className, ...other }) => (
  <Icon {...other} className={className} size={size}>
    <path
      d="M87.4,79.4L58,50l29.4-29.4c1.9-1.9,2.1-4.7,0.5-6.3l-2.2-2.2c-0.8-0.8-2.1-1.2-3.3-1c-1.1,0.2-2.1,0.7-3,1.5L50,42
        L20.6,12.6c-1.9-1.9-4.7-2.1-6.3-0.5l-2.2,2.2c-1.6,1.6-1.4,4.4,0.5,6.3L42,50L12.6,79.4c-1.9,1.9-2.1,4.7-0.5,6.3l2.2,2.2
        C15.1,88.6,16,89,17,89c1.2,0,2.5-0.5,3.6-1.6L50,58l29.4,29.4c1,1,2.4,1.6,3.6,1.6c1,0,2-0.4,2.7-1.1l2.2-2.2
        C89.5,84,89.3,81.3,87.4,79.4z"
    />
  </Icon>
)