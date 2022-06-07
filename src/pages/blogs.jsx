import React, { useState, useRef, useEffect, useCallback } from "react"
import Post from "@components/Post"
import {
  Title,
  Box,
  Page,
  SkeletonText,
  List,
  ListItem,
  Navbar,
  NavTitle,
  useStore,
  zmp,
} from "zmp-framework/react"
import store from "../store"
import Header from "@components/Header"

const ListPost = ({ zmproute }) => {
  const allowInfinite = useRef(true)
  const vlEl = useRef(null)
  const { data, skip = 0, limit = 10, hasMore } = useStore("latestBlogs")
  const [vlData, setVlData] = useState({
    items: data,
  })
  const loading = useStore("loadingBlogs")

  let pageContent = null

  useEffect(() => {
    if (!data.length) {
      store.dispatch("getLatestBlogs", { skip: 0, limit: 10, showSkeleton: true })
    }
  }, [])

  useEffect(() => {
    allowInfinite.current = hasMore
    if (vlEl.current) {
      const virtualList = vlEl.current.zmpVirtualList()
      virtualList.items = [...data]
      virtualList.update()
    }
  }, [data])

  const renderExternal = (vl, newData) => {
    setVlData({ ...newData })
  }

  const loadMore = () => {
    if (!allowInfinite.current) return
    allowInfinite.current = false
    if (hasMore) {
      store.dispatch("getLatestBlogs", {
        skip: skip + limit,
        limit,
        showSkeleton: false,
      })
    }
  }

  const refreshPage = (done) => {
    store
      .dispatch("getLatestBlogs", {
        skip: 0,
        limit,
        showSkeleton: true,
        reset: true,
      })
      .finally(() => {
        done()
      })
  }

  if (loading) {
    pageContent = (
      <div className="posts">
        <Post loading />
        <Post loading />
        <Post loading />
      </div>
    )
  } else {
    pageContent = (
      <List
        ref={vlEl}
        noHairlines
        className="list-post"
        virtualList
        noHairlinesBetween
        virtualListParams={{
          items: data,
          renderExternal,
          height: 146,
        }}
      >
        <ul>
          {vlData.items.map((item, index) => (
            <Post
              key={item.id}
              virtualListIndex={data.findIndex((it) => it.id === item.id)}
              style={{ top: `${vlData.topPosition}px` }}
              {...item}
              title={`${item.id}, ${item.title}`}
              vlTopPosition={vlData.topPosition}
              vtitle={`${item.id}, ${item.title}`}
            />
          ))}
        </ul>
      </List>
    )
  }
  return (
    <Page
      ptr
      onPtrRefresh={refreshPage}
      onPageBeforeIn={() => {
        zmp.toolbar.hide("#main-nav", false)
      }}
      infinite
      infiniteDistance={50}
      infinitePreloader={!loading && hasMore}
      onInfinite={loadMore}
    >
      <Header>Latest News</Header>
      <Box className="list-post" px="10" pb="10" pt={0} m="0">
        {pageContent}
      </Box>
    </Page>
  )
}

export default ListPost
