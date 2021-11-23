import React from "react"
import { Page, Card, Text, Box } from "zmp-framework/react"
import NavigationBar from "@components/NavigationBar"
import ComingSoon from "@components/ComingSoon"
import useScrollPosition from "@hooks/useScrollPosition"

const MenuPage = ({ zmproute }) => {
  useScrollPosition('/menu')

  return (
    <Page>
      <NavigationBar active={zmproute.path} />
      <ComingSoon pageName="Menu" />
    </Page>
  )
}
export default MenuPage
