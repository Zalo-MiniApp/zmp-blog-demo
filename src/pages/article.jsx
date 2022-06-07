import React from "react"
import { Page, Card, Text, Box } from "zmp-framework/react"
import NavigationBar from "@components/NavigationBar"
const articlePage = ({ zmproute }) => {
  return (
    <Page className="article-pages">
      {/* <NavigationBar active={zmproute.path} /> */}
      <Card inset title="article">
        <Box textAlign="center">
          <Text>Comming soon</Text>
        </Box>
      </Card>
    </Page>
  )
}
export default articlePage
