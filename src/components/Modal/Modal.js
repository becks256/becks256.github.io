import React, { useContext, useRef } from "react"
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
  console.log("modalHidden", modalHidden)
  const modalRef = useRef()

  const clickHandler = (e) => {
    if (closeHandler) {
      closeHandler()
      return
    }
    setModalHidden(() => true)
  }

  const imageOnlyModalMarkup = (
    <div {...props} ref={modalRef} className="App-image-modal fade-in">
      <div className="App-image-modal--dialogue">
        <div
          className={`App-modal--header color-${headerTextColor || "gray-10"}`}
        >
          <span className="App-image-modal--close-btn">
            <IconClose
              size="l"
              className="pointer"
              //className="clickable-icon color-static-text--inverse faux-link"
              onClick={clickHandler}
            />
          </span>
        </div>
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
