import { Box, Grid } from "@mui/material";
import React from "react";
import StickyBox from "react-sticky-box";
import SideBar from "./SideBar";

function Layout({ children }: { children: any }) {
  return (
    <Grid>
      <Grid
        style={{
          display: "grid",
          margin: "auto",
          alignItems: "flex-start",
          position: "relative",
          gridTemplateColumns: "2fr 10fr",
        }}
      >
        <StickyBox offsetTop={20} offsetBottom={20}>
          <Grid>
          <SideBar />
          </Grid>
        </StickyBox>
        <Box>{children}</Box>
      </Grid>
    </Grid>
  );
}

export default Layout;
