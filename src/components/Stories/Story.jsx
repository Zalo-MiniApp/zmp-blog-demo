import React from "react"
import propTypes, { any, string } from "prop-types"
import { Avatar, Box, Text, SkeletonBlock, SkeletonText } from "zmp-framework/react"
import classNames from "classnames"
import avatar1 from "@static/images/user-1.png"
import avatar2 from "@static/images/user-2.png"
import avatar3 from "@static/images/user-3.png"
import avatar4 from "@static/images/user-4.png"
import avatar5 from "@static/images/user-5.png"
const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5]
const Story = ({ user, seen, loading }) => {
  if (loading) {
    return (
      <Box m="0" className="story" flex flexDirection="column" alignItems="center">
        <Box m="0" className="relative avatar-wrapper">
          <SkeletonBlock borderRadius="24px" width={68} height={68} />
        </Box>
        <SkeletonText className="story-name text-blue-dark-text">
          FirstName
        </SkeletonText>
      </Box>
    )
  }
  const classes = classNames("absolute avatar-border", {
    "avatar-seen": seen,
    "avatar-not-seen": !seen,
  })
  const avatarIndex = (user.id % 4) + 1
  return (
    <Box m="0" className="story" flex flexDirection="column" alignItems="center">
      <Box m="0" className="relative avatar-wrapper">
        <Avatar src={avatars[avatarIndex]}></Avatar>
        <div className={classes}></div>
      </Box>
      <Text className="story-name text-blue-dark-text">{user.firstName}</Text>
    </Box>
  )
}

Story.propTypes = {
  user: propTypes.shape({
    avatar: any,
    name: string,
    [string]: any,
  }),
  seen: propTypes.bool,
}

export default Story
