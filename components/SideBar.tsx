import React, { useState } from "react";
import ghostIcon from "@/assets/images/ghost_icon.png";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import {
  font_12_400_Modal,
  neutral100,
  neutral200,
  neutral900,
} from "@/helper/theme";
import { neutral700 } from "@/helper/theme";
import staff from "@/assets/images/staff.png";
import blogs from "@/assets/images/blogs.png";
import tags from "@/assets/images/tags.png";
import { neutral500 } from "@/helper/theme";
import adminIcon from "@/assets/images/adminIcon.png";
import homeIcon from "@/assets/images/homeIcon.png";
import { useRouter } from "next/router";

function SideBar() {
  const router = useRouter();
  const [adminName, setAdminName] = useState<string>("Ashish kumar");
  const [adminEmail, setAdminEmail] = useState<string>(
    "Kumarashish87998@gmail.com"
  );

  return (
    <Grid
      sx={{
        padding: "24px 12px",
        display: "flex",
        // alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "96vh",
      }}
    >
      <Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image src={ghostIcon} height={32} width={32} alt="ghost icon" />
          <Typography
            sx={{
              typography: "font_16_600",
              color: neutral900,
              margin: "0 8px",
            }}
          >
            Ghost Blogs
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "36px 0 0 0",
            padding: "8px",
            background: router.pathname == "/" ? neutral100 : "",
            borderRadius: "8px",
            // justifyContent:'center',
            "&:hover": {
              background: neutral100,
            },

          }}
          onClick={() => router.push('/')}
        >
          <Image
            src={homeIcon}
            alt="home icon"
            height={16}
            width={16}
            style={{ margin: "0 4px 0 0" }}
          />
          <Typography
            sx={{
              typography: "font_14_400",
              color: neutral900,
              margin: "0 8px",
            }}
          >
            Visit Site
          </Typography>
        </Box>
        <Box sx={{ margin: "36px 0 0 0", width: "100%" }}>
          <Typography sx={{ typography: "font_12_500", color: neutral700 }}>
            MANAGE
          </Typography>
          {[
            {
              title: "Posts",
              icon: blogs,
              redirectFunc: () => router.push("/posts"),
            },
            {
              title: "Tags",
              icon: tags,
              redirectFunc: () => router.push("/tags"),
            },
            {
              title: "Staff",
              icon: staff,
              redirectFunc: () => router.push("/staff"),
            },
          ].map((obj) => {
            return (
              <Typography
                sx={{
                  color: neutral500,
                  cursor:'pointer',
                  typography: "font_14_500",
                  margin: "12px 0",
                  display: "flex",
                  alignItems: "center",
                  padding: "8px 0",
                  borderRadius: "8px",
                  background:
                    (router.pathname == "/posts" && obj.title == "Posts") ||
                    (router.pathname == "/tags" && obj.title == "Tags") ||
                    (router.pathname == "/staff" && obj.title == "Staff")
                      ? neutral100
                      : "",
                  "&:hover": {
                    background: neutral100,
                  },
                }}
                key={obj.title}
                onClick={obj.redirectFunc}
              >
                <Image
                  src={obj.icon}
                  alt={obj.title}
                  height={16}
                  width={16}
                  style={{ margin: "0 8px" }}
                />
                {obj.title}
              </Typography>
            );
          })}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src={adminIcon}
          alt="adminIcon"
          height={24}
          width={24}
          style={{ margin: "0 8px", borderRadius: "50%" }}
        />
        <Box>
          <Typography sx={{ typography: "font_14_500", color: neutral900 }}>
            {adminName}
          </Typography>
          <Typography sx={{ typography: "font_12_400", color: neutral500 }}>
            {adminEmail}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default SideBar;
