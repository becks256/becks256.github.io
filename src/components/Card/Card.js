import React from 'react';
import "./Card.css"

export const Card = ({title, description, children, href, techStack}) => {
  const headerClasses = "pb-16"
  return (
    <div className="Card ProductCard sm:mr-0 md:mr-32 mb-32 overflow-hidden">
      <section className="Card-imageContainer">
        {children}
      </section>
      <section className="px-16">
        {!!href && <h3 className={headerClasses}><a href={href}>{title}</a></h3>}
        {!!!href && <h3 className={headerClasses}>{title}</h3>}
        <p className="Card--description">{description}</p>
        {techStack && <p className="Card--techStack-description">Tech Stack: {techStack}</p>}
      </section>
    </div>
  )
} 