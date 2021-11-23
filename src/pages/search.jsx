import React from "react"
import { Page, Card, Text, Box } from "zmp-framework/react"
import NavigationBar from "@components/NavigationBar"
import useScrollPosition from "@hooks/useScrollPosition"
import ComingSoon from "@components/ComingSoon"

const SearchPage = ({ zmproute }) => {
  useScrollPosition('/search')
  return (
    <Page>
      <NavigationBar active={zmproute.path} />
      <ComingSoon pageName="Search" />
    </Page>
  )
}
export default SearchPage
