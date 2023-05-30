import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import adminIcon from "@/assets/images/adminIcon.png";

function BlogCardsHome() {
  const [blogArr, setBlogArr] = useState({
    image: `https://res-5.cloudinary.com/hmwekdigq/image/upload/q_auto/v1/ghost-blog-images/Screenshot-2023-05-08-135139.png`,
    tag: "Personal Loan",
    title: "Personal Loan Terms And Defination",
    Content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate assumenda aliquid fugit illum delectus harum ut iste quam? Ullam distinctio vel eveniet ipsam labore? Dolorum minus non adipisci necessitatibus.`,
    Author: "Ashish Kumar",
  });

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
    <Grid sx={{ padding: "48px", background: "#191b1f" }}>
      <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
        {Array.from(Array(16)).map((_, i) => {
          return (
            <Grid key={`Grid_${i}`}>
            <Box 
              sx={{
                display: i % 6 == 0 ? "flex" : "block",
                justifyContent: "space-around",
                alignItems: "center",
                width: cardWidth(i % 6),
                margin:'8px 0'
              }}
            >
              <Box sx={{ display: "grid", placeContent: "center" }}>
                <Image
                  src={blogArr.image}
                  alt={blogArr.tag}
                  height={imageHeight(i % 6)}
                  width={imageWidth(i % 6)}
                />
              </Box>
              <Box sx={{padding: "16px" }}>
                <Typography
                  sx={{ typography: "font_12_500", color: "#26a8ed" }}
                >
                  {blogArr.tag}
                </Typography>
                <Typography
                  sx={{ typography: fontSize(i % 6).title, color: "white" }}
                >
                  {blogArr.title}
                </Typography>
                <Typography
                  sx={{ typography: fontSize(i % 6).content, color: "white" }}
                >
                  {blogArr.Content}
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
                      {blogArr.Author}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            {
              i % 6 == 0 || i % 6 == 5  ? (
                <hr style={{width:'100%',margin:'20px auto',border:'1px solid #2b2f36' }}/>
              ) : null
            }
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default BlogCardsHome;
