import React, { useState, useCallback, useEffect } from "react"
import { zmp } from "zmp-framework/react"

export default () => {
  const [currentRoute, setCurrentRoute] = useState("/")

  useEffect(() => {
    const activeRoute = "/"
    setCurrentRoute(activeRoute)
  })

  return currentRoute
}
