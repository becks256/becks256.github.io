import React, { useContext, useEffect } from "react"
import { createPortal } from "react-dom"
import { ModalContext } from "../../App"
import { IconClose } from "../Icon/Icons/IconClose"
import "./Modal.css"

const Modal = ({
  children,
  title,
  contentClassName,
  closeHandler,
  dialogClassName,
  headerTextColor,
  ...props
}) => {
  const { modalHidden, setModalHidden } = useContext(ModalContext)

  const closeWithButtonHandler = (e) => {
    if (closeHandler) {
      closeHandler()
      return
    }
    setModalHidden(true)
  }

  const closeWithBackgroundHandler = (e) => {
    if (e.target === e.currentTarget) {
      closeWithButtonHandler()
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeWithButtonHandler()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [modalHidden])

  const imageOnlyModalMarkup = (
    <div {...props} onClick={closeWithBackgroundHandler} className="App-image-modal fade-in">
      <div className="App-image-modal--dialogue">
        <button onClick={closeWithButtonHandler} className="App-image-modal--close-btn" aria-label="Close modal dialog">
          <IconClose
            size="m"
            className="pointer"
            //className="clickable-icon color-static-text--inverse faux-link"
          />
        </button>
        <section>
          <div
            className={`App-modal--content fade-in ${contentClassName || ""}`}
          >
            {children}
          </div>
        </section>
      </div>
    </div>
  )

  return (
    <>{!modalHidden && createPortal(imageOnlyModalMarkup, document.body)}</>
  )
}

export { Modal }
