import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import UserDetails from "../../UserDetails/UserDetails";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import FlagIcon from "@material-ui/icons/Flag";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import RestoreIcon from "@material-ui/icons/Restore";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./LeftSidebar.scss";

const texts = [
  "COVID-19 Information Center",
  "Pages",
  "Friends",
  "Messanger",
  "Saved",
  "Marketplace",
  "Videos",
  "Memories",
  "More"
];

const LeftSidebar = () => {
  return (
    <List className="left-sidebar">
      <UserDetails />
      {[LocalHospitalIcon, FlagIcon, PeopleIcon, ChatIcon, BookmarkIcon, StorefrontOutlinedIcon,
        OndemandVideoIcon, RestoreIcon, ExpandMoreIcon].map((Icon, index) => (
          <ListItem key={index} button>
            <Icon fontSize="large" className={`icon icon-${index}`} />
            <ListItemText primary={texts[index]} />
          </ListItem>
        ))}
    </List>
  );
};

export default LeftSidebar;