import { defineConfig } from "vite"
import path from "path"
import reactRefresh from "@vitejs/plugin-react-refresh"
// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    root: "./src",
    base: "",
    server: {
      // host: true,
    },
    plugins: [reactRefresh()],
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@static": path.resolve(__dirname, "src/static"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@utils": path.resolve(__dirname, "src/utils"),
      },
    },
  })
}
