import React, { useState, useEffect } from "react"
import { Title, Text, Box, Icon, Button, zmp } from "zmp-framework/react"
import store from "../../store"
import propTypes from "prop-types"
const IntroSlider = ({ data = [] }) => {
  const [currentActive, setCurrentActive] = useState(0)

  const refs = data.reduce((acc, val, i) => {
    acc[i] = React.createRef()
    return acc
  }, {})

  const scrollToActive = (i) => {
    setCurrentActive(i)
    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    })
  }

  const next = () => {
    const total = data.length
    if (currentActive >= total - 1) {
      store.dispatch("setOnboarding", false)
    } else {
      scrollToActive(currentActive + 1)
    }
  }

  return (
    <div className="carousel-wrapper">
      <Box m="0" p="10">
        <div className="carousel">
          {data.map((item, index) => (
            <div key={item.key} ref={refs[index]} className="w-full flex-shrink-0">
              <Box m={0}></Box>
              <Title size="large" className="font-extrabold text-blue-dark">
                {item.title}
              </Title>
              <Box m={0} mt={4}>
                <Text size="small" className="font-thin text-blue-dark-text">
                  {item.content}
                </Text>
              </Box>
            </div>
          ))}
        </div>

        <Box mx="0" mt="7" flex justifyContent="space-between" alignItems="center">
          <ul className="carousel-dots">
            {data.map((item, index) => (
              <li
                key={item.key}
                className={`carousel-dot${
                  currentActive === index ? " carousel-dot-active" : ""
                }`}
              />
            ))}
          </ul>
          <Button typeName="primary" className="carousel-control" onClick={next}>
            <Icon zmp="zi-arrow-right" />
          </Button>
        </Box>
      </Box>
    </div>
  )
}

IntroSlider.propTypes = {
  data: propTypes.array,
}
export default IntroSlider
