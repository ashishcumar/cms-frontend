import Layout from "@/components/Layout";
import {
  Draft_Bg,
  Draft_Dark,
  Primary_Background,
  neutral100,
  neutral200,
  neutral25,
  neutral400,
  neutral50,
  neutral700,
  neutral900,
} from "@/helper/theme";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function Index() {
  const [isDomLoaded, setIsDomLoaded] = useState<boolean>(false);

  useEffect(() => {
    if(typeof globalThis.window !== 'undefined' )
    setIsDomLoaded(true);
  }, [globalThis, globalThis.window]);
  return (
    <>
    {
      isDomLoaded ? (
        <Layout>
        <Grid sx={{ padding: "20px", background: Primary_Background }}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                typography: "font_28_600",
                color: neutral900,
              }}
            >
              Tags
            </Box>
          </Grid>
          <Grid
            sx={{
              margin: "24px 0 0 0",
              border: `1px solid ${neutral200}`,
              borderRadius: "8px",
              background: neutral50,
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "7fr 3fr",
                padding: "12px 16px",
                borderBottom: `1px solid ${neutral100}`,
              }}
            >
              {["TAG", "SLUG"].map((text, i) => {
                return (
                  <Box
                    key={text}
                    sx={{
                      typography: "font_14_500",
                      textAlign: i > 0 ? "center" : "left",
                    }}
                  >
                    {text}
                  </Box>
                );
              })}
            </Box>
            {Array.from(Array(20)).map((_, i) => {
              return (
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "7fr 3fr",
                    borderBottom: `1px solid ${neutral100}`,
                    padding: "12px",
                    background: "white",
                    "&:hover": {
                      background: neutral25,
                    },
                  }}
                  key={i}
                >
                  <Box sx={{ padding: "0 12px" }}>
                    <Typography
                      sx={{ typography: "font_14_700", color: neutral700 }}
                    >
                      5 Best Provider Of Saving Account
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      padding: "0 12px",
                      display: "grid",
                      placeContent: "center",
                    }}
                  >
                    <Typography
                      sx={{ typography: "font_12_400", color: "#0070AD" }}
                    >
                      5-Best-Provider-Of-Saving-Account
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Grid>
        </Grid>
      </Layout>
      ) : null
    }
    </>

  );
}

export default Index;
