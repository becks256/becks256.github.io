import { clsnx } from "@becks256/clsnx"
import React from "react"
import "./Card.css"
import { Tag } from "../"
import { ExternalLinkIcon } from "../Icon/Icons/ExternalLinkIcon"

export const Card = ({
  title,
  description,
  children,
  href,
  techStack,
  type = "product",
  cta,
  date
}) => {
  const headerClasses = ""

  const isPublication = type === "publication"
  const isNetwork = type === "network"
  const isProduct = type === "product"

  return (
    <div
      className={clsnx(
        {
          ProductCard: isProduct,
          NetworkCard: isNetwork,
          PublicationCard: isPublication,
        },
        "Card overflow-hidden pb-48 pt-24"
      )}
    >
      <section className="px-48 flex align-items--center justify-content--between">
        <h3 className={headerClasses}>{title}</h3>
        {date && <p className="Card--date">{date}</p>}
      </section>
      <section className="Card-imageContainer">{children}</section>
      <section className="px-48">
        <div className="Card--description">{description}</div>
        {href && (
          <a
            className="font-bold flex gap-8 mb-24"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {cta || "View Project"}
            <ExternalLinkIcon />
          </a>
        )}
        
        {techStack?.length && (
          <div className="Card--techStack">
            {techStack.map((tech, index) => (
              <Tag kind="special" key={index}>
                {tech}
              </Tag>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
