import React, { useEffect } from "react"
import { Page, Title, Text, Box, useStore, Button } from "zmp-framework/react"
import NotificationIcon from "@components/Notification"
import Stories from "@components/Stories"
import NavigationBar from "@components/NavigationBar"
import Categories from "@components/Categories"
import Latest from "@components/Latest"
import store from "../store"
import useScrollPosition from "@hooks/useScrollPosition"
const HomePage = () => {
  const user = useStore("user")
  useScrollPosition("/")

  useEffect(() => {
    if (!store.getters["stories"].value.length) {
      store.dispatch("getStories")
    }
    if (!store.getters["categories"].value.length) {
      store.dispatch("getCategories")
    }
    if (!store.getters["latestBlogs"].value.data.length) {
      store.dispatch("getLatestBlogs", { limit: 10, skip: 0, reset: true, showSkeleton: true })
    }
  }, [])

  const fetchData = (done) => {
    store.dispatch("getStories")
    store.dispatch("getCategories")
    store.dispatch("getLatestBlogs", { limit: 10, skip: 0, reset: true, showSkeleton: true })
    if (done) {
      done()
    }
  }

  return (
    <Page ptr onPtrRefresh={fetchData} name="home" className="home-page">
      <NavigationBar active="/" />
      <Box m="0" px="10" mt="10">
        <Box m="0" flexDirection="row" justifyContent="space-between">
          <Box m="0">
            {user && (
              <Text size="xlarge" className="text-blue-dark-text">
                Hi, {user.name}!
              </Text>
            )}
            <Title size="large" className="font-extrabold text-blue-dark">
              Explore today’s
            </Title>
          </Box>
          <NotificationIcon hasNotification />
        </Box>
      </Box>
      <Box m="0" pt="5" px="0">
        <Stories />
      </Box>
      <Box m="0" pt="5" px="0">
        <Categories />
      </Box>
      <Box m="0">
        <Latest />
      </Box>
    </Page>
  )
}
export default HomePage
