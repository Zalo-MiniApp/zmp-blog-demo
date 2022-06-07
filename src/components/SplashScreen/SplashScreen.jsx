import React from "react"
import Logo from "@static/images/logo.png"
export default () => {
  return (
    <div className="splash-screen">
      <div className="logo">
        <img src={Logo} alt="ZMP Blog" />
      </div>
    </div>
  )
}
