import React, { useRef, useEffect, useState } from "react"
import { CaretDownIcon } from "../Icon/Icons/CaretDownIcon"
import { clsnx } from "@becks256/clsnx"

import "./Accordion.css"

export const Accordion = ({
  summary,
  children,
  defaultOpen = false,
  className,
}) => {
  const contentRef = useRef(null)
  const [open, setOpen] = useState(defaultOpen)
  const [height, setHeight] = useState(defaultOpen ? "auto" : 0)

  useEffect(() => {
    if (!contentRef.current) return

    if (open) {
      const scrollHeight = contentRef.current.scrollHeight
      setHeight(scrollHeight)
      const timeout = setTimeout(() => setHeight("auto"), 300)
      return () => clearTimeout(timeout)
    } else {
      const currentHeight = contentRef.current.scrollHeight
      setHeight(currentHeight)
      requestAnimationFrame(() => setHeight(0))
    }
  }, [open])

  return (
    <div className={clsnx("overflow-hidden", className)}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="App-AccordionButton w-100 font-bold p-0"
        type="button"
      >
        <span className="flex align-items--center gap-8">
          <CaretDownIcon
            fill="currentColor"
            className={clsnx({ closed: !open, open })}
          />
          {summary}
        </span>
      </button>
      <div
        ref={contentRef}
        style={{
          height,
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
        className="px-4 pt-2 pb-4 color-primary"
      >
        {children}
      </div>
    </div>
  )
}

export default Accordion
