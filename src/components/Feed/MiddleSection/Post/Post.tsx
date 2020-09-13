import React from "react";
import { Post as PostInterface } from "../../../../interfaces/interfaces";
import { Avatar, Divider, ListItem, ListItemText, Link, Typography, IconButton } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ReplyIcon from "@material-ui/icons/Reply";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./Post.scss";

const texts = [
  "Like",
  "Comment",
  "Share"
];

interface Props {
  post: PostInterface;
}

const displayDate = (timestamp: any) => {
  let displayDate = "";

  if (timestamp) {
    const date = timestamp.toDate();
    const l10nHE = new Intl.DateTimeFormat("he-IL");
    displayDate = l10nHE.format(new Date(date)).split(".").join("/");
  }

  return displayDate;
};

const Post: React.FC<Props> = ({ post }) => {
  return (
    <div className="post">
      <div className="top-section">
        <div className="left-side">
          <Avatar alt="avatar" className="user-picture" src={post.data.profilePic} />
          <div>
            <Link>{post.data.username}</Link>
            <Typography component="small" variant="subtitle2">{displayDate(post.data.timestamp)}</Typography>
          </div>
        </div>
        <div className="right-side">
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      <div className="middle-section">
        <Typography component="p" variant="subtitle1">{post.data.message}</Typography>
      </div>
      <Divider />
      <div className="bottom-section">
        {[ThumbUpIcon, ChatBubbleOutlineIcon, ReplyIcon].map((Icon, index) => (
          <ListItem button key={index}>
            <Icon />
            <ListItemText primary={texts[index]} />
          </ListItem>
        ))}
        <ListItem button>
          <Avatar className="avatar" alt="avatar" src={post.data.profilePic} />
          <ArrowDropDownIcon />
        </ListItem>
      </div>
    </div >
  );
};

export default Post;