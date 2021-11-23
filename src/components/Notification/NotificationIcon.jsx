import React from "react"
import propTypes from "prop-types"
import NotiIcon from "@static/icons/notification.svg"

const NotificationIcon = ({ hasNotification }) => {
  return (
    <span className="relative noti-icon-wrapper">
      {hasNotification && (
        <span className="absolute rounded-full bg-red noti-badge border-2 border-white"></span>
      )}
      <img src={NotiIcon} alt="noti" />
    </span>
  )
}

NotificationIcon.propTypes = {
  hasNotification: propTypes.bool,
}

export default NotificationIcon
