import React, { useState, useRef, useEffect, useCallback } from "react"
import BlogItem from "@components/BlogItem"
import {
  Title,
  Box,
  Page,
  List,
  useStore,
} from "zmp-framework/react"
import store from "../store"

const Blogs = ({ zmproute }) => {
  const allowInfinite = useRef(true)
  const vlEl = useRef(null)
  const { data, skip = 0, limit = 10, hasMore } = useStore("latestBlogs")
  const [vlData, setVlData] = useState({
    items: data,
  })
  const loading = useStore("showBlogsLoadingSkeleton")

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
        showSkeleton: false,
        reset: true,
      })
      .finally(() => {
        done()
      })
  }

  if (loading) {
    pageContent = (
      <div className="blog-list">
        <BlogItem loading />
        <BlogItem loading />
        <BlogItem loading />
      </div>
    )
  } else {
    pageContent = (
      <List
        ref={vlEl}
        noHairlines
        className="blog-list"
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
            <BlogItem
              key={item.id}
              virtualListIndex={data.findIndex((it) => it.id === item.id)}
              style={{ top: `${vlData.topPosition}px` }}
              {...item}
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
      infinite
      infiniteDistance={50}
      infinitePreloader={!loading && hasMore}
      onInfinite={loadMore}
    >
      <Box className="blog-list" p="10" m="0">
        <Box m="0" flex flexDirection="row" justifyContent="space-between">
          <Title size="normal" className="font-extrabold text-blue-dark">
            Latest
          </Title>
        </Box>
        {pageContent}
      </Box>
    </Page>
  )
}

export default Blogs
