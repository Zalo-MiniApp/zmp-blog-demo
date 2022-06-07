import { useState, useEffect } from "react"
import { zmp } from "zmp-framework/react"
import useCurrentRoute from "./useCurrentRoute"
import store from "../store"

export default function useKeepPositionScroll() {
  let pathname = useCurrentRoute()
  const [scrollTop, setScrollTop] = useState(0)
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    let newScrollPosition = []

    // get scrollPosition from sessionStorage
    const scrollPosition = store.getters.scrollPosition.value || []

    // get index
    const id = scrollPosition.findIndex((v) => v.pathname === pathname)

    // check if pathname exist in storage
    if (id !== -1) {
      // if not scroll then default scroll to position available in storage
      if (!isScroll)
        document
          .querySelector(".page-current .page-content")
          .scrollTo(0, scrollPosition[id].position)

      // update sessionStorage
      newScrollPosition = [...scrollPosition]
      newScrollPosition.splice(id, 1, {
        pathname,
        position: scrollTop,
      })

      store.dispatch("setScrollPosition", newScrollPosition)

      return
    }

    newScrollPosition = [
      ...scrollPosition,
      {
        pathname: pathname,
        position: 0,
      },
    ]
    store.dispatch("setScrollPosition", newScrollPosition)
    window.scrollTo(0, 0)
  }, [scrollTop, pathname, isScroll])

  // Get scroll top
  const windowScrollTop = () => {
    const position = document.querySelector(".page-current .page-content").scrollTop
    setIsScroll(true)
    setScrollTop(position)
  }

  useEffect(() => {
    zmp.$(".page-current .page-content").on("scroll", windowScrollTop)
    return () => zmp.$(".page-current .page-content").off("scroll", windowScrollTop)
  }, [])

  return pathname
}
