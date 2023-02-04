import { clsnx } from '@becks256/clsnx'
import React from 'react';
import "./Card.css"

export const Card = ({title, description, children, href, techStack, type="product"}) => {
  const headerClasses = "pb-16"
  return (
    <div className={clsnx({"ProductCard": type === "product", "NetworkCard": type === "network"}, "Card mb-32 overflow-hidden")}>
      <section className="Card-imageContainer">
        {children}
      </section>
      <section className="px-16">
        {!!href && <h3 className={headerClasses}><a href={href} target="_blank" rel="noreferrer">{title}</a></h3>}
        {!!!href && <h3 className={headerClasses}>{title}</h3>}
        <p className="Card--description">{description}</p>
        {techStack && <p className="Card--techStack-description">Tech Stack: {techStack}</p>}
      </section>
    </div>
  )
} 