import React from "react"
import { Page, Card, Text, Box } from "zmp-framework/react"
import NavigationBar from "@components/NavigationBar"
const SearchPage = ({ zmproute }) => {
  return (
    <Page className="search-page">
      {/* <NavigationBar active={zmproute.path} /> */}

      <Card inset title="Search">
        <Box textAlign="center">
          <Text>Comming soon</Text>
        </Box>
      </Card>
    </Page>
  )
}
export default SearchPage
