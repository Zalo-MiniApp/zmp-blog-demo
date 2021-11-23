import React from "react"
import sdk from "zmp-sdk"
import { zmpready, Box } from "zmp-framework/react"
const ViewStory = () => {
  zmpready(() => {
    sdk.setNavigationBarColor({ color: "" })
  })

  return (
    <Box m="0">
      <div></div>
    </Box>
  )
}
export default ViewStory
