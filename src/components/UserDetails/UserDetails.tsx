import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ListItem, ListItemAvatar, ListItemText, Avatar } from "@material-ui/core";

const UserDetails = () => {
  const { loggedInUser, loggedInUsername } = useContext(AppContext);

  return (
    <ListItem button className="user-details">
      <ListItemAvatar>
        <Avatar alt="avatar" src={loggedInUser.photoURL} className="user-avatar" />
      </ListItemAvatar>
      <ListItemText primary={loggedInUsername} />
    </ListItem>
  );
};

export default UserDetails;