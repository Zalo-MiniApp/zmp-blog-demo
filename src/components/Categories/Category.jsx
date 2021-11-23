import React, { forwardRef, useRef, useImperativeHandle } from "react"
import { Box, SkeletonBlock } from "zmp-framework/react"

const Category = forwardRef(({ loading, categoryName, thumbnail, active }, ref) => {
  const elRef = useRef(null)

  useImperativeHandle(ref, () => elRef.current)
  if (loading) {
    return (
      <Box my={0} mr={0} ml={10} ref={elRef} className="category-wrapper">
        <SkeletonBlock className="category"></SkeletonBlock>
      </Box>
    )
  }
  return (
    <Box ref={elRef} m={0} className="category-wrapper">
      <div className="category">
        <div className="category-shadow shadow-3"></div>
        <span className="category-name">{categoryName}</span>
      </div>
    </Box>
  )
})

export default Category
