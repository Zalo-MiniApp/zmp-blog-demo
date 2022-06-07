import { createStore } from "zmp-core/lite"
import { zmp } from "zmp-framework/react"
import {
  getBlog,
  getBlogs,
  getCategories,
  getStories,
  login,
} from "./services/blogs"

const store = createStore({
  state: {
    jwt: null,
    user: null,
    loadingCategories: false,
    categories: [],
    loadingBlogs: false,
    scrollPosition: [],
    latestBlogs: {
      limit: 10,
      skip: 0,
      data: [],
      hasMore: false,
    },
    loadingStories: false,
    stories: [],
    onboarding: true,
  },
  getters: {
    scrollPosition({ state }) {
      return state.scrollPosition
    },
    user({ state }) {
      return state.user
    },
    categories({ state }) {
      return state.categories
    },
    loadingCategories({ state }) {
      return state.loadingCategories
    },
    latestBlogs({ state }) {
      return state.latestBlogs
    },
    loadingBlogs({ state }) {
      return state.loadingBlogs
    },
    stories({ state }) {
      return state.stories
    },
    loadingStories({ state }) {
      return state.loadingStories
    },
    jwt({ state }) {
      return state.jwt
    },
    onboarding({ state }) {
      return state.onboarding
    },
  },
  actions: {
    setScrollPosition({ state }, data) {
      state.scrollPosition = data
    },
    setOnboarding({ state }, onboarding) {
      state.onboarding = onboarding
    },
    setUser({ state }, user) {
      state.user = user
    },
    setJwt({ state }, jwt) {
      state.jwt = jwt
    },
    async getLatestBlogs({ state }, { skip, limit, showSkeleton, reset = false }) {
      if (showSkeleton) {
        state.loadingBlogs = true
      }
      const { blogs } = await getBlogs({ skip, limit })
      state.latestBlogs = {
        skip,
        limit,
        data: reset ? [...blogs] : [...state.latestBlogs.data, ...blogs],
        hasMore: blogs.length && blogs.length === limit,
      }
      if (showSkeleton) {
        state.loadingBlogs = false
      }
    },
    async getCategories({ state }) {
      state.loadingCategories = true
      const categories = await getCategories()
      state.categories = categories
      state.loadingCategories = false
    },
    async getStories({ state }) {
      state.loadingStories = true
      const stories = await getStories()
      state.stories = stories

      state.loadingStories = false
    },
    async login({ dispatch }) {
      const user = await login()
      if (user) {
        dispatch("setUser", user)
      }
    },
  },
})

export default store
