import React, { useState } from "react";
import { AppBar, Toolbar, Grid, List, ListItem, IconButton } from "@material-ui/core";
import UserDetails from "../UserDetails/UserDetails";
import FacebookLogo from "../../images/FacebookLogo.webp";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import AddIcon from "@material-ui/icons/Add";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(0);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="navbar-wrapper">
      <AppBar position="fixed" className="navbar" color="inherit">
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item xs={3} xl={3} className="grid-left">
              <img src={FacebookLogo} alt="navbar-img" onClick={refreshPage} height="45" />
              <div className="search-wrapper">
                <div className="search-icon">
                  <SearchIcon />
                </div>
                <InputBase
                  className="input-base"
                  placeholder="Search Facebook"
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Grid>

            <Grid item xs={6} xl={5} className="grid-middle">
              <Grid container className="icons-grid">
                {[HomeIcon, FlagIcon, SubscriptionsOutlinedIcon, StorefrontOutlinedIcon, SupervisedUserCircleOutlinedIcon].map((Icon, index) => (
                  <Grid key={index} item xs={2} className={`icon-wrapper ` + (active === index ? "active" : "")} onClick={() => setActive(index)}>
                    <ListItem button>
                      <Icon fontSize="large" />
                    </ListItem>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={3} className="grid-right">
              <UserDetails />
              <List className="icons-grid">
                {[AddIcon, QuestionAnswerIcon, NotificationsActiveIcon, ArrowDropDownIcon].map((Icon, index) => (
                  <IconButton key={index} className="icon-wrapper">
                    <Icon />
                  </IconButton>
                ))}
              </List>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;