import React from "react"
import { Page, Card, Box, Button, zmp } from "zmp-framework/react"
const MenuPage = ({ zmproute }) => {
  return (
    <Page className="menu-page">
      <Card inset title="Menu">
        <Box textAlign="center">
          <Box>
            <Button
              responsive
              typeName="primary"
              onClick={() => {
                zmp.tab.show("#view-main")
                zmp.views.main.router.navigate("/blogs/")
              }}
            >
              Open Blogs
            </Button>
          </Box>
        </Box>
      </Card>
    </Page>
  )
}
export default MenuPage
