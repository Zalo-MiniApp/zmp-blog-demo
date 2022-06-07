import HomePage from "./pages/index"
import ArticlePage from "./pages/article"
import BlogsPage from "./pages/blogs"
import MenuPage from "./pages/menu"
import OnBoardingPage from "./pages/onboarding"
import SearchPage from "./pages/search"
import DetailPage from "./pages/detail"
const page = "pages/menu"
export default [
  {
    path: "/",
    // component: HomePage,
    asyncComponent: () => import("./pages/index"),
  },
  {
    path: "/blogs/",
    alias: "/blogs",
    // component: BlogsPage,
    asyncComponent: () => import("./pages/blogs"),
  },
  {
    path: "/detail/",
    alias: "/detail",
    // component: DetailPage,
    asyncComponent: () => import("./pages/detail"),
  },
  {
    path: "/article/",
    // component: ArticlePage,
    asyncComponent: () => import("./pages/article"),
  },
  {
    path: "/search/",
    // component: SearchPage,
    asyncComponent: () => import("./pages/search"),
  },
  {
    path: "/menu/",
    // component: MenuPage,
    asyncComponent: () => import(`.\/${page}`),
  },
]
