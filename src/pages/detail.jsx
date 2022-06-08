import React, { useEffect } from "react"
import { Page, Card, Text, Box, zmp } from "zmp-framework/react"
import Header from "@components/Header"

const Detail = ({ zmproute }) => {
  return (
    <Page
      onPageBeforeIn={() => {
        zmp.toolbar.hide("#main-nav")
      }}
      className="detail-page"
    >
      <Header back>Lorem ipsum dolor sit amet</Header>
      <Card inset title="Blogs">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </Card>
    </Page>
  )
}
export default Detail
