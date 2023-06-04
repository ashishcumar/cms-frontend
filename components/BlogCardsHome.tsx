import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import adminIcon from "@/assets/images/adminIcon.png";
import { BLOG_OBJECT } from "@/Interface/interface";
import { useRouter } from "next/router";

function BlogCardsHome({ blogs }: { blogs: BLOG_OBJECT[] }) {

  const router = useRouter();
  const imageHeight = (val: number) => {
    if (val == 0) {
      return 380;
    }
    if (val >= 1 && val <= 3) {
      return 200;
    }
    if (val >= 4 && val <= 5) {
      return 200;
    }
  };

  const imageWidth = (val: number) => {
    if (val == 0) {
      return 676;
    }
    if (val >= 1 && val <= 3) {
      return 318;
    }
    if (val >= 4 && val <= 5) {
      return 500;
    }
  };

  const cardWidth = (val: number) => {
    if (val == 0) {
      return "100%";
    }
    if (val >= 1 && val <= 3) {
      return "360px";
    }
    if (val >= 4 && val <= 5) {
      return "540px";
    }
  };

  const fontSize = (val: number) => {
    if (val == 0) {
      return {
        title: "font_32_600",
        content: "font_16_400",
      };
    }
    return {
      title: "font_20_600",
      content: "font_14_400",
    };
  };

  return (
    <Grid sx={{ padding: "48px", background: "#191b1f"}}>
      <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
        {blogs && blogs.length
          ? blogs.map((Obj:BLOG_OBJECT, i) => {
              return (
                <Grid key={`Grid_${i}`} sx={{overflow:"hidden",margin:"8px 0",height: i % 6 == 0 ? 'fit-content' : '500px',position:'relative' }} onClick={() => router.push(`/blog/${Obj.slug}`)}>
                  <Box
                    sx={{
                      display: i % 6 == 0 ? "flex" : "block",
                      justifyContent: "space-around",
                      alignItems: "center",
                      width: cardWidth(i % 6),
                      margin: "8px 0",
                    }}
                  >
                    <Box sx={{ display: "grid", placeContent: "center" }}>
                      <Image
                        src={Obj.feature_image}
                        alt={Obj.tags}
                        height={imageHeight(i % 6)}
                        width={imageWidth(i % 6)}
                      />
                    </Box>
                    <Box sx={{ padding: "16px" }}>
                      <Typography
                        sx={{ typography: "font_12_500", color: "#26a8ed" }}
                      >
                        {Obj.tags}
                      </Typography>
                      <Typography
                        sx={{
                          typography: fontSize(i % 6).title,
                          color: "white",
                        }}
                        className="ellipisClass"

                      >
                        {Obj.title}
                      </Typography>
                      <Typography
                        sx={{
                          typography: fontSize(i % 6).content,
                          color: "white",
                          maxHeight:"100px"
                        }}
                        className="ellipisClass"

                      >
                        {Obj.short_Desp.slice(0,250)}
                      </Typography>
                      <Box sx={{ margin: "8px 0" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Image
                            src={adminIcon}
                            alt="adminIcon"
                            height={30}
                            width={30}
                            style={{ borderRadius: "50%", margin: "0 8px" }}
                          />
                          <Typography
                            sx={{
                              typography: "font_12_500",
                              color: "white",
                            }}
                          >
                            {Obj.authors}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <hr
                    style={{
                      width: "100%",
                      margin: "24px auto",
                      border: "1px solid #2b2f36",
                      position:'absolute',
                      bottom:0,
                      left:0,
                      right:0
                    }}
                  />
                </Grid>
              );
            })
          : null}
      </Grid>
    </Grid>
  );
}

export default BlogCardsHome;
