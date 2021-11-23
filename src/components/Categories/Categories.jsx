import React, { useEffect, useRef, useState } from "react"
import { Box, useStore, Swiper, SwiperSlide } from "zmp-framework/react"
import "swiper/css"

import Category from "./Category"

const Categories = () => {
  const loading = useStore("loadingCategories")
  const categories = useStore("categories")
  if (loading) {
    return (
      <Box m={0} className="categories">
        <Category loading />
      </Box>
    )
  }
  return (
    <Swiper slidesPerView="auto" className="categories">
      {categories.map((category, index) => (
        <SwiperSlide key={category.id}>
          <Category categoryName={category.name} thumbnail={category.thumbnail} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Categories
