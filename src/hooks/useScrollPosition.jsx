import { useState, useEffect } from "react"
import { zmp } from "zmp-framework/react"
import store from "../store"

export default (pathname = "/") => {
  const [scrollTop, setScrollTop] = useState(0);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    let newScrollPosition = [];

    // Lấy vị trí scroll đã lưu trong store
    const scrollPosition = store.getters.scrollPosition.value || [];

    // Xác định vị trí
    const index = scrollPosition.findIndex((v) => v.pathname === pathname);

    if (index !== -1) {
      // Nếu không scroll khôi phục vị trí đã lưu trong store
      if (!isScroll)
        document
          .querySelector(".page-current .page-content")
          .scrollTo(0, scrollPosition[index].position);

      // cập nhật nhật scroll position
      newScrollPosition = [...scrollPosition];
      newScrollPosition.splice(index, 1, {
        pathname,
        position: scrollTop,
      });


      // lưu vào store
      store.dispatch("setScrollPosition", newScrollPosition);

      return;
    }

    // Nếu vị trí scroll chưa được lưu trong store, khởi tạo và scroll lên đầu trang
    newScrollPosition = [
      ...scrollPosition,
      {
        pathname: pathname,
        position: 0,
      },
    ];
    store.dispatch("setScrollPosition", newScrollPosition);
    document.querySelector(".page-current .page-content").scrollTo(0, 0);
  }, [scrollTop, pathname, isScroll]);

  // Xác định vị trí scroll
  const windowScrollTop = () => {
    const position = document.querySelector(
      ".page-current .page-content"
    ).scrollTop;
    setIsScroll(true);
    setScrollTop(position);
  };

  useEffect(() => {
    zmp.$(".page-current .page-content").on("scroll", windowScrollTop);
    return () =>
      zmp.$(".page-current .page-content").off("scroll", windowScrollTop);
  }, []);

  return pathname;
}
