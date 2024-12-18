import { clsnx } from "@becks256/clsnx"
import React from "react"
import "./Card.css"
import { Tag } from "../"
import { ExternalLinkIcon } from "../Icon/Icons/ExternalLinkIcon"
import { Modal } from "../Modal/Modal"
import { ModalContext } from "../../App"
import { MediaViewer } from "../MediaViewer/MediaViewer"

export const Card = ({ type = "product", data }) => {
  const {
    title,
    link: href,
    description,
    techStack,
    cta,
    date,
    media,
    alt = "",
  } = data
  const { image } = media
  const { setModalHidden } = React.useContext(ModalContext)
  const [showModal, setShowModal] = React.useState(false)
  const showModalHandler = (e) => {
    setShowModal(true)
    setModalHidden(false)
  }
  const closeModalHandler = (e) => {
    setShowModal(false)
    setModalHidden(true)
  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      showModalHandler(e)
    }
  }

  let headerClasses = ""
  const isPublication = type === "publication"
  const isNetwork = type === "network"
  const isProduct = type === "product"

  return (
    <>
      {showModal && (
        <Modal
          title="Image Preview"
          contentClassName="flex flex-column"
          closeHandler={closeModalHandler}
        >
          <MediaViewer media={media} alt={alt} />
        </Modal>
      )}

      <div
        className={clsnx(
          {
            ProductCard: isProduct,
            NetworkCard: isNetwork,
            PublicationCard: isPublication,
          },
          "Card overflow-hidden pb-48 pt-24"
        )}
        style={{ gap: "24px" }}
      >
        <section className="px-48 flex align-items--center justify-content--between">
          <h3
            className={headerClasses}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </h3>
          {date && <p className="Card--date">{date}</p>}
        </section>
        <section className="Card-imageContainer">
          <span
            className={clsnx({
              "has-video": !!media?.video,
            })}
            inert="true"
          />
          <span
            className={clsnx("flex cursor-zoom", {
              "w-100": !/prepper/gi.test(title),
            })}
            onClick={showModalHandler}
          >
            <img
              tabIndex={0}
              src={image}
              onClick={showModalHandler}
              onKeyDown={handleKeyDown}
              className={clsnx({
                "w-100": !/prepper/gi.test(title),
              })}
              alt={alt}
            />
          </span>
        </section>
        <section
          className="px-48"
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            justifyContent: "space-between",
          }}
        >
          <div className="Card--description">{description}</div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {href && (
              <a
                className="font-bold flex gap-8"
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
                  <Tag kind="special" key={index} tag="span">
                    {tech}
                  </Tag>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}
