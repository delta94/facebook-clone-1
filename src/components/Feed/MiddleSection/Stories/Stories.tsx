import React from "react";
import { Avatar } from "@material-ui/core";
import "./Stories.scss";

const Stories = () => {
  return (
    <div className="stories">
      {[0, 1, 2, 3, 4].map((story, index) => (
        <div className={`story story-${index}`} key={index}>
          <Avatar className="avatar" alt="avatar" src={`https://material-ui.com/static/images/avatar/${index < 7 ? index + 1 : 1}.jpg`} />
        </div>
      ))}
    </div>
  );
};

export default Stories;