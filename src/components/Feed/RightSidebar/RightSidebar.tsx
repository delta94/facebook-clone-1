import React from "react";
import { List, ListItem, ListItemText, Avatar, ListItemAvatar, IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import "./RightSidebar.scss";

const names = [
  "James Smith",
  "Michael Smith",
  "Robert Smith",
  "Maria Garcia",
  "David Smith",
  "Maria Rodriguez",
  "Mary Smith",
  "Maria Hernandez",
  "Maria Martinez",
  "James Johnson",
  "John Smith",
  "Joe Smith",
  "James Smith",
  "Michael Smith",
  "Robert Smith",
  "Maria Garcia",
  "David Smith",
  "Maria Rodriguez",
  "Mary Smith",
  "Maria Hernandez",
  "Maria Martinez",
  "James Johnson",
  "John Smith",
  "Joe Smith",
];

const generateAvatar = () => {
  let number = Math.floor(Math.random() * 8);

  if (number === 0) {
    number++;
  }

  return number;
};

const RightSidebar = () => {
  return (
    <List className="right-sidebar">
      <ListItem>
        <ListItemText primary="Contacts" />
        {[MoreHorizIcon, SearchIcon, VideoCallIcon].map((Icon, index) => (
          <IconButton key={index}>
            <Icon />
          </IconButton>
        ))}
      </ListItem>
      {names.map((name, index) => (
        <ListItem key={index} button className={index === names.length - 1 ? "last" : ""}>
          <ListItemAvatar className="avatar-wrapper">
            <Avatar className="avatar" alt="avatar" src={`https://material-ui.com/static/images/avatar/${generateAvatar()}.jpg`} />
          </ListItemAvatar>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  );
};

export default RightSidebar;