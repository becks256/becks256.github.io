import React from "react"
import "./MediaViewer.css"

export const MediaViewer = ({ media, alt, ...props }) => {
  const { image, video } = media

  return (
    <>
      {video ? (
        <video
          src={video}
          className="embedded-video"
          controls
          {...props}
        ></video>
      ) : (
        <img src={image} alt={alt} {...props} />
      )}
    </>
  )
}
