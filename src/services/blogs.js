import config from "../config"
import store from "../store"
import blogs from "../data/blogs.json"
import categories from "../data/categories.json"
import stories from "../data/stories.json"
const base = config.BASE_URL
const DEFAULT_DELAY = 300
export const login = async (accessToken) => {
  const user = await new Promise((resolve) => {
    resolve({
      jwt: "access_token",
      id: "20",
      firstName: "Duong",
      lastName: "Vu",
    })
  })
  return user
}

export const getBlogs = ({ id, skip = 0, limit = 10 }) => {
  let res = {
    blogs: [],
    total: 0,
  }
  if (id === undefined) {
    res.blogs = blogs.slice(skip, skip + limit)
    res.total = res.blogs.length
  } else {
    res.blogs = blogs.filter((item) => item.id === id).slice(skip, skip + limit)
    res.total = res.blogs.length
  }
  return new Promise((resolve) => setTimeout(() => resolve(res), DEFAULT_DELAY))
}

export const getBlog = ({ id }) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject({ msg: "inivalid blog id" })
    } else {
      let blog = blogs.findOne((blog) => blog.id === id)
      if (blog) {
        setTimeout(() => {
          resolve(blog)
        }, DEFAULT_DELAY)
      } else {
        reject({ msg: "not found" })
      }
    }
  })
}

export const getCategories = () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(categories), DEFAULT_DELAY)
  )
}

export const getStories = async (payload) => {
  return new Promise((resolve) => setTimeout(() => resolve(stories), DEFAULT_DELAY))
}
