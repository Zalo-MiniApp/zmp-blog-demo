import React from "react"
import Post from "@components/Post"
import { Title, Box, Link, SkeletonText, useStore } from "zmp-framework/react"

const Latest = () => {
  const { data } = useStore("latestBlogs")
  const loading = useStore("loadingBlogs")
  if (loading) {
    return (
      <Box className="latest" px="10" m="0">
        <Box m="0" flex flexDirection="row" justifyContent="space-between">
          <SkeletonText effect="fade">Latest News</SkeletonText>
        </Box>
        <div className="posts">
          <Post loading />
        </div>
      </Box>
    )
  }
  return (
    <Box className="latest" px="10" m="0">
      <Box m="0" flex flexDirection="row" justifyContent="space-between">
        <Title size="normal" className="font-extrabold text-blue-dark">
          Latest News
        </Title>
        <Link href="/blogs">More</Link>
      </Box>
      <div className="posts">
        {data.slice(0, 5).map((item) => (
          <Post {...item} key={item.id} />
        ))}
      </div>
    </Box>
  )
}

export default Latest
