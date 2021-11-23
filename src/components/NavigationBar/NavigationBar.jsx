import React, { useRef, useState } from "react"
import propTypes from "prop-types"
import { Link, Tabbar, Text, zmp } from "zmp-framework/react"
import {
  ArticleIcon,
  HomeIcon,
  MenuIcon,
  SearchIcon,
  PlusIcon,
} from "@components/Icons"
import useCurrentRoute from "@hooks/useCurrentRoute"
import './styles.scss'

const NavigationBar = () => {
  const currentPath = useCurrentRoute()

  let activePath = currentPath
  if (currentPath[currentPath.length - 1] !== "/") {
    activePath = `${currentPath}/`
  }
  const tabHistory = useRef([activePath])

  const switchTab = (tabLink) => {

    zmp.views.current.router.navigate(tabLink, {
      browserHistory: false,
      animate: false,
    })
  }

  return (
    <Tabbar slot="fixed" bottom className="app-tabbar shadow-1" noHairline>
      <Link
        noLinkClass
        onClick={() => switchTab("/")}
        className="flex flex-col items-center	"
        tabLinkActive={activePath === "/"}
      >
        <HomeIcon active={activePath === "/"} />
        <Text
          size="xxxsmall"
          className="navbar-item-label navbar-item-label text-gray-dark font-extrabold"
        >
          Home
        </Text>
      </Link>
      <Link
        noLinkClass
        onClick={() => switchTab("/article/")}
        className="flex flex-col items-center	"
        tabLinkActive={activePath === "/article/"}
      >
        <ArticleIcon active={activePath === "/article/"} />
        <Text
          size="xxxsmall"
          className="navbar-item-label text-gray-dark font-extrabold"
        >
          Article
        </Text>
      </Link>
      <div>
        <Link
          noLinkClass
          className="write-blog rounded-full border-white bg-blue border-4 items-center	"
        >
          <PlusIcon />
        </Link>
      </div>
      <Link
        noLinkClass
        onClick={() => switchTab("/search/")}
        className="flex flex-col items-center	"
        tabLinkActive={activePath === "/search/"}
      >
        <SearchIcon active={activePath === "/search/"} />
        <Text
          size="xxxsmall"
          className="navbar-item-label text-gray-dark font-extrabold"
        >
          Search
        </Text>
      </Link>
      <Link
        noLinkClass
        className="flex flex-col items-center	"
        tabLinkActive={activePath === "/menu/"}
        onClick={() => switchTab("/menu/")}
      >
        <MenuIcon active={activePath === "/menu/"} />
        <Text
          size="xxxsmall"
          className="navbar-item-label text-gray-dark font-extrabold"
        >
          Menu
        </Text>
      </Link>
    </Tabbar>
  )
}
NavigationBar.propTypes = {}
NavigationBar.displayName = "zmp-toolbar"
export default NavigationBar
