import { clsnx } from "@becks256/clsnx"
import React from "react"
import "./Card.css"

export const Card = ({
  title,
  description,
  children,
  href,
  techStack,
  type = "product",
}) => {
  const headerClasses = "py-16"
  return (
    <div
      className={clsnx(
        { ProductCard: type === "product", NetworkCard: type === "network", PublicationCard: type === "publication" },
        "Card overflow-hidden"
      )}
    >
      <section className="Card-imageContainer">{children}</section>
      <section className="px-32">
        {!!href && (
          <h3 className={headerClasses}>
            <a href={href} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h3>
        )}
        {!!!href && <h3 className={headerClasses}>{title}</h3>}
        <div className="Card--description">{description}</div>
        {techStack && (
          <p className="Card--techStack-description">
            <span className="underline">Tech Stack</span>: {techStack}
          </p>
        )}
      </section>
    </div>
  )
}
