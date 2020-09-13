
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Grid } from "@material-ui/core";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import MiddleSection from "./MiddleSection/MiddleSection";
import RightSidebar from "./RightSidebar/RightSidebar";

const Feed = () => {
  const { getUserFromLS } = useContext(AppContext);

  useEffect(() => {
    getUserFromLS();
    // eslint-disable-next-line
  }, []);

  return (
    <Grid container justify="space-between">
      <Grid item xs={3} xl={2}>
        <LeftSidebar />
      </Grid>
      <Grid item xs={6} md={5} xl={4}>
        <MiddleSection />
      </Grid>
      <Grid item xs={3} xl={2}>
        <RightSidebar />
      </Grid>
    </Grid>
  );
};

export default Feed;