import React from "react"

import { Box, useStore } from "zmp-framework/react"
import Story from "./Story"

const Stories = () => {
  const loading = useStore("loadingStories")
  const data = useStore("stories")
  if (loading) {
    return (
      <Box
        m="0"
        flex
        flexDirection="row"
        className="overflow-x-scroll whitespace-nowrap	flex-nowrap stories"
      >
        <Story loading />
        <Story loading />
        <Story loading />
        <Story loading />
      </Box>
    )
  }
  if (!data || !data.length) return null
  return (
    <Box
      m="0"
      flex
      flexDirection="row"
      className="overflow-x-scroll whitespace-nowrap	flex-nowrap stories"
    >
      {data.map((story) => (
        <Story key={story.id} seen={story.seen} user={story} />
      ))}
    </Box>
  )
}

export default Stories
