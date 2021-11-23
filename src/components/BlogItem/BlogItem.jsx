import React from "react"
import {
  Card,
  Link,
  Box,
  Text,
  Title,
  SkeletonBlock,
  SkeletonText,
} from "zmp-framework/react"
import { Like, Time, Bookmark } from "@components/Icons"
import { shortenLargeNumber } from "@utils/number"
import moment from "moment"
import './styles.scss'

const BlogItem = ({
  loading,
  title,
  id,
  description,
  thumbnail,
  createdAt,
  like,
  liked,
  saved,
  style,
}) => {
  const handleLike = () => { }

  const handleSave = () => { }

  if (loading) {
    return (
      <Box style={style} mx="0" my="3" className="blog">
        <Card inset className="overflow-hidden shadow-3	p-0">
          <Link noLinkClass>
            <Box m="0" flex flexDirection="row" alignItems="stretch">
              <div className="blog-thumbnail overflow-hidden">
                <SkeletonBlock width={92} height={120} effect="fade" />
              </div>
              <Box
                m="0"
                py="5"
                mx="5"
                flex
                flexDirection="column"
                className="flex-1"
              >
                <SkeletonText effect="fade">Lorem ipsum </SkeletonText>
                <SkeletonText effect="fade">
                  Lorem ipsum dolor sit amet consectetur
                </SkeletonText>
              </Box>
            </Box>
          </Link>
        </Card>
      </Box>
    )
  }
  return (
    <Box style={style} mx="0" my="3" className="blog">
      <Card inset className="overflow-hidden shadow-3	p-0">
        <Link noLinkClass>
          <Box m="0" flex flexDirection="row" alignItems="stretch">
            <div className="blog-thumbnail overflow-hidden">
              <img src={thumbnail} alt={title} />
            </div>
            <Box m="0" py="5" mx="5" flex flexDirection="column" className="flex-1">
              <Title className="blog-title text-blue font-extrabold">{title}</Title>
              <Text
                size="small"
                bold
                className="desc text-blue-dark overflow-ellipsis"
              >
                {description}
              </Text>
              <Box m="0" flex flexDirection="row" justifyContent="flex-end">
                <Box m="0" flex flexDirection="row" alignItems="center">
                  <Like onClick={handleLike} liked={liked} />
                  <Text className="like text-blue-dark">
                    {shortenLargeNumber(like, 1)}
                  </Text>
                </Box>
                <Box m="0" ml="2" flex flexDirection="row" alignItems="center">
                  <Time />
                  <Text className="time text-blue-dark">
                    {moment(createdAt).fromNow()}
                  </Text>
                </Box>
                <Box m="0" ml="2">
                  <Bookmark onClick={handleSave} saved={saved} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Link>
      </Card>
    </Box>
  )
}

export default BlogItem
