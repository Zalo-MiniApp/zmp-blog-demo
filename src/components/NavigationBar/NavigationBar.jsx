import React, { useRef, useState, useEffect } from "react"
import propTypes from "prop-types"
import { Link, Tabbar, Text, zmp } from "zmp-framework/react"
import { ArticleIcon, HomeIcon, MenuIcon, SearchIcon } from "@components/Icons"

const NavigationBar = ({ activeTab }) => {
  return (
    <Tabbar id="main-nav" bottom className="app-tabbar shadow-1" xư>
      <Link
        noLinkClass
        className="flex flex-col items-center	"
        tabLink="#view-main"
        tabLinkActive
      >
        <HomeIcon active={activeTab === "main"} />
        <Text
          size="xxxsmall"
          className="navbar-item-label navbar-item-label text-gray-dark font-extrabold"
        >
          Home
        </Text>
      </Link>
      <Link
        noLinkClass
        className="flex flex-col items-center	"
        tabLink="#view-article"
      >
        <ArticleIcon active={activeTab === "article"} />
        <Text
          size="xxxsmall"
          className="navbar-item-label text-gray-dark font-extrabold"
        >
          Article
        </Text>
      </Link>
      <Link
        noLinkClass
        className="flex flex-col items-center	"
        tabLink="#view-search"
      >
        <SearchIcon active={activeTab === "search"} />
        <Text
          size="xxxsmall"
          className="navbar-item-label text-gray-dark font-extrabold"
        >
          Search
        </Text>
      </Link>
      <Link noLinkClass className="flex flex-col items-center	" tabLink="#view-menu">
        <MenuIcon active={activeTab === "menu"} />
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
