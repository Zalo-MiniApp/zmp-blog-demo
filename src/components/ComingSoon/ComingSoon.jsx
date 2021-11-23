import React from "react"
import {
  Text,
  Box,
  Page,
  Title
} from "zmp-framework/react"
import comingSoonImg from '@static/images/coming-soon.png'
import './styles.scss'

const ComingSoon = ({ pageName }) => (
  <Box p="10" m="0" className="h-screen">
    <Box m="0" flex flexDirection="row" justifyContent="space-between">
      <Title size="normal" className="font-extrabold text-blue-dark">
        {pageName}
      </Title>
    </Box>
    <Box className="h-full" alignItems="center" flex flexDirection="column" justifyContent="center">
      <img src={comingSoonImg} alt="commingSoon" />
      <Box textAlign="center">
        <Text>Coming soon...</Text>
      </Box>
    </Box>
  </Box>
)

export default ComingSoon
