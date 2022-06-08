import React, { useState, useEffect, useRef } from "react"
import { zmpready, App, View, TabView, zmp } from "zmp-framework/react"
import store from "../store"
import NavigationBar from "./NavigationBar"

const MyApp = () => {
  const [activeTab, setActiveTab] = useState("main")

  useEffect(() => {
    zmpready(() => {
      store.dispatch("login")
    })
  }, [])

  // ZMP Parameters
  const zmpparams = {
    name: "ZMP Blog", // App name
    theme: "auto", // Automatic theme detection
    store: store,
    touch: {
      iosTouchRipple: false,
      mdTouchRipple: false,
    },
  }

  return (
    <App {...zmpparams}>
      <TabView name="main-app" className="safe-areas">
        <NavigationBar activeTab={activeTab} />
        <View
          stackPages
          id="view-main"
          onTabShow={() => {
            setActiveTab("main")
            zmp.views.main.router.updateCurrentUrl("/")
          }}
          main
          tabActive
          tab
          initRouterOnTabShow
          url="/"
        ></View>
        <View
          id="view-article"
          initRouterOnTabShow
          name="article"
          tab
          url="/article/"
          onTabShow={() => {
            setActiveTab("article")
            zmp.views.article.router.updateCurrentUrl("/article/")
          }}
        ></View>
        <View
          id="view-search"
          initRouterOnTabShow
          name="search"
          tab
          onTabShow={() => {
            setActiveTab("search")
            zmp.views.search.router.updateCurrentUrl("/search/")
          }}
          url="/search/"
        ></View>
        <View
          id="view-menu"
          initRouterOnTabShow
          onTabShow={() => {
            setActiveTab("menu")
            zmp.views.menu.router.updateCurrentUrl("/menu/")
          }}
          name="menu"
          tab
          url="/menu/"
        ></View>
      </TabView>
    </App>
  )
}
export default MyApp
