import React, { useState, useCallback } from "react"
import { Page, Box, Row, Col } from "zmp-framework/react"
import Image from "@components/Image"
import Slider from "@components/IntroSlider"
import Img1 from "@static/images/onboarding-1.png"
import Img2 from "@static/images/onboarding-2.png"
import Img3 from "@static/images/onboarding-3.png"
import Img4 from "@static/images/onboarding-4.png"
const data = [
  {
    key: "0",
    title: "Read the article you want instantly",
    content:
      "You can read thousands of articles on ZMP Blog, save them in the application and share them with your loved ones.",
  },
  {
    key: "1",
    title: "1 Read the article you want instantly",
    content:
      "You can read thousands of articles on ZMP Blog, save them in the application and share them with your loved ones.",
  },
  {
    key: "2",
    title: "2 Read the article you want instantly",
    content:
      "You can read thousands of articles on ZMP Blog, save them in the application and share them with your loved ones.",
  },
  {
    key: "3",
    title: "Read the article you want instantly",
    content:
      "You can read thousands of articles on ZMP Blog, save them in the application and share them with your loved ones.",
  },
]
const OnBoarding = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <Page className="onboarding">
      <Box p="10" mt={10} flex justifyContent="center">
        <div className="onboarding-images-wrapper">
          <Box
            className="onboarding-images-row"
            m={0}
            mb={4}
            flex
            flexDirection="row"
            alignItems="stretch"
          >
            <Box m={0} mr={0}>
              <Image className="onboarding-image" src={Img1} />
            </Box>
            <Box m={0} ml={3}>
              <Image className="onboarding-image" src={Img2} />
            </Box>
          </Box>
          <Box
            className="onboarding-images-row"
            m={0}
            mt={4}
            flex
            flexDirection="row"
            alignItems="stretch"
          >
            <Box m={0} mr={0}>
              <Image className="onboarding-image" src={Img3} />
            </Box>
            <Box m={0} ml={3}>
              <Image className="onboarding-image" src={Img4} />
            </Box>
          </Box>
        </div>
      </Box>
      <Box m={0}>
        <Slider data={data} />
      </Box>
    </Page>
  )
}

export default OnBoarding
