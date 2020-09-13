import React, { useContext, useState, SyntheticEvent } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import { Avatar, InputBase, Divider, ListItem, ListItemText } from "@material-ui/core";
import { db } from "../../../../firebase";
import firebase from "firebase";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "./PostCreator.scss";

const texts = [
  "Live Video",
  "Photo/Video",
  "Feeling/Activity"
];

const PostCreator = () => {
  const { loggedInUser, loggedInUsername } = useContext(AppContext);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    db.collection("posts").add({
      message,
      profilePic: loggedInUser.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: loggedInUser.displayName
    });

    setMessage("");
  };

  return (
    <div className="post-creator">
      <div className="top-section">
        <Avatar alt="avatar" src={loggedInUser.photoURL} />
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrapper">
            <InputBase
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="input-base"
              placeholder={`What"s on your mind ${loggedInUsername}?`}
              inputProps={{ "aria-label": "create post" }}
            />
          </div>
        </form>
      </div>
      <Divider />
      <div className="bottom-section">
        {[VideocamIcon, PhotoLibraryIcon, InsertEmoticonIcon].map((Icon, index) => (
          <ListItem button key={index}>
            <Icon className={`icon-${index}`} fontSize="large" />
            <ListItemText primary={texts[index]} />
          </ListItem>
        ))}
      </div>
    </div>
  );
};

export default PostCreator;