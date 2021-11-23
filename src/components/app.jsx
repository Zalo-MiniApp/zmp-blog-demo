import React, { useState, useEffect } from "react"
import { zmpready, App, View } from "zmp-framework/react"
import store from "../store"
import SplashScreen from "@components/SplashScreen"

const MyApp = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true)

  useEffect(() => {
    zmpready(() => {
      store.dispatch("login")
    })
  }, [])

  const hideSplashScreen = () => {
    if (showSplashScreen) {
      setTimeout(() => {
        setShowSplashScreen(false)
      }, 500)
    }
  }

  // ZMP Parameters
  const zmpparams = {
    name: "Blog Club", // App name
    theme: "auto", // Automatic theme detection
    store: store,
    touch: {
      iosTouchRipple: false,
      mdTouchRipple: false,
    },
    on: {
      pageAfterIn: hideSplashScreen,
    },
  }

  return (
    <App {...zmpparams}>
      {showSplashScreen && <SplashScreen />}
      <View
        name="main-app"
        iosSwipeBack={false}
        main
        className="safe-areas"
        url="/"
      />
    </App>
  )
}
export default MyApp
