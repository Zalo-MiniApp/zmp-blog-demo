import React from "react"
import propTypes, { string } from "prop-types"
import classNames from "classnames"

const Image = ({ src, alt, srcSet, style, className }) => {
  const classes = classNames("image-card", className)
  return (
    <div className={classes}>
      <img srcSet={srcSet} src={src} alt={alt} style={style} />
    </div>
  )
}

Image.propTypes = {
  src: propTypes.string || propTypes.instanceOf(ImageData),
  alt: propTypes.string,
  srcSet: propTypes.any,
  style: propTypes.object,
  className: propTypes.string,
}

export default Image
