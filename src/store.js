import { createStore } from "zmp-core/lite"
import { getBlogs, getCategories, getStories, login } from "./services/blogs"
import { getUserInfo } from "./services/zalo"
const store = createStore({
  state: {
    user: null,
    loadingCategories: false,
    categories: [],
    showBlogsLoadingSkeleton: false,
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
    showBlogsLoadingSkeleton({ state }) {
      return state.showBlogsLoadingSkeleton
    },
    stories({ state }) {
      return state.stories
    },
    loadingStories({ state }) {
      return state.loadingStories
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

    async getLatestBlogs({ state }, { skip, limit, showSkeleton, reset = false }) {
      if (showSkeleton) {
        state.showBlogsLoadingSkeleton = true
      }
      const { blogs } = await getBlogs({ skip, limit })
      state.latestBlogs = {
        skip,
        limit,
        data: reset ? [...blogs] : [...state.latestBlogs.data, ...blogs],
        hasMore: blogs.length && blogs.length === limit,
      }
      if (showSkeleton) {
        setTimeout(() => {
          state.showBlogsLoadingSkeleton = false
        }, 500)
      }
    },
    async getCategories({ state }) {
      state.loadingCategories = true
      const categories = await getCategories()
      state.categories = categories
      setTimeout(() => {
        state.loadingCategories = false
      }, 500)
    },
    async getStories({ state }) {
      state.loadingStories = true
      const stories = await getStories()
      state.stories = stories
      setTimeout(() => {
        state.loadingStories = false
      }, 500)
    },
    async login({ dispatch }) {
      const { userInfo } = await getUserInfo()
      if (userInfo) {
        dispatch("setUser", userInfo)
      }
    },
  },
})

export default store
