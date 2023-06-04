import { BLOG_OBJECT } from "@/Interface/interface";
import Layout from "@/components/Layout";
import {
  Draft_Bg,
  Draft_Dark,
  Primary_Background,
  boxShad,
  neutral100,
  neutral200,
  neutral25,
  neutral400,
  neutral50,
  neutral700,
  neutral900,
} from "@/helper/theme";
import { Box, Button, Grid, Typography } from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Down_Arrow from "@/assets/images/Down_Arrow.png";
import Image from "next/image";
import NW, { BaseUrl, EndPoint } from "@/helper/NWRequest";
import { useRouter } from "next/router";
import Utils from "@/helper/Utils";

function Index() {
  const router = useRouter();
  const [blogArr, setBlogArr] = useState<BLOG_OBJECT[]>();
  const [showFilter, setShowFilter] = useState<boolean>(false);

  useEffect(() => {
    if(!Utils.getCookie('userToken')){
      router.push('/login')
    }
    getAllPosts();
  }, []);

  const filterOptions = [
    // {
    //   filterName: "All posts",
    //   onClickFunction: () => {},
    //   borderRadius: "8px 0 0 8px",
    // },
    // {
    //   filterName: "All authors",
    //   onClickFunction: () => {},
    //   borderRadius: "",
    // },
    // {
    //   filterName: "All tags",
    //   onClickFunction: () => {},
    //   borderRadius: "",
    // },
    {
      filterName: "Sort by",
      onClickFunction: () => setShowFilter(true),
      borderRadius: "0px 8px 8px 0px",
    },
  ];
  const getAllPosts = async () => {
    const allBlogs = await NW.Get(BaseUrl, EndPoint.GET_All_BLOGS);
    if (allBlogs) {
      setBlogArr(allBlogs);
      console.log(allBlogs);
    }
  };

  const getSortBlogs = async (val: string) => {
    let body = {
      filterBy: "Sort by",
      filterFor: val,
    };
    const sortedBlogs = await NW.Post(BaseUrl, EndPoint.FILTER_BLOG, { body });
    if (sortedBlogs) {
      setBlogArr(sortedBlogs);
      console.log(sortedBlogs);
    }
  };

  return (
    <>
      <Head>
        <title>Ghost-CMS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Grid sx={{ padding: "20px", background: Primary_Background }}>
          {/*  Navbar  */}
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
              Posts
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  margin: "0 12px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                {filterOptions.map((filterObj) => {
                  return (
                    <Grid sx={{ position: "relative" }} key={filterObj.filterName}>
                      <Typography
                        variant="font_14_400"
                        onClick={filterObj.onClickFunction}
                        
                        sx={{
                          padding: "8px 12px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          cursor: "pointer",
                          borderRadius: "8px",
                          border: `1px solid ${neutral100}`,
                          background: "white",
                          "&:hover": {
                            boxShadow: boxShad,
                          },
                        }}
                      >
                        {filterObj.filterName}
                        <Image
                          src={Down_Arrow}
                          alt="forwardArrow"
                          style={{
                            height: "10px",
                            width: "10px",
                            margin: "0 4px",
                          }}
                        />
                      </Typography>
                      {showFilter ? (
                        <Box sx={{ margin: "8px 0" }}>
                          <Typography
                            sx={{
                              border: `1px solid ${neutral25}`,
                              typography: "font_12_500",
                              textAlign: "center",
                              padding: "4px 8px",
                              background: "white",
                            }}
                            onClick={() => {
                              setShowFilter(false);
                              getSortBlogs("Newest");
                            }}
                          >
                            Newest
                          </Typography>
                          <Typography
                            sx={{
                              border: `1px solid ${neutral25}`,
                              typography: "font_12_500",
                              textAlign: "center",
                              padding: "4px 8px",
                              background: "white",
                            }}
                            onClick={() => {
                              setShowFilter(false);
                              getSortBlogs("Oldest");
                            }}
                          >
                            Oldest
                          </Typography>
                        </Box>
                      ) : null}
                    </Grid>
                  );
                })}
              </Box>
              <Button
                variant="contained"
                onClick={() => router.push("/blog-editor")}
              >
                New Post
              </Button>
            </Box>
          </Grid>

          {/*  Blogs Table   */}
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
                gridTemplateColumns: "7fr 1fr 2fr",
                padding: "12px 16px",
                borderBottom: `1px solid ${neutral100}`,
              }}
            >
              {["TITLE", "STATUS", "LAST UPDATE"].map((text, i) => {
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
            {blogArr && blogArr.length
              ? blogArr.map((Obj: BLOG_OBJECT, i) => {
                  return (
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "7fr 1fr 2fr",
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
                          {Obj.title.toUpperCase()}
                        </Typography>
                        <Typography
                          sx={{ typography: "font_12_600", color: neutral400 }}
                        >
                          By {Obj.authors}
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
                          sx={{
                            color: Draft_Dark,
                            padding: "4px 8px",
                            background: Draft_Bg,
                            borderRadius: "8px",
                            width: "fit-content",
                            typography: "font_12_400",
                            margin: "auto",
                            height: "fit-content",
                          }}
                        >
                          {Obj.blogStatus}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          padding: "0 12px",
                          display: "grid",
                          placeContent: "center",
                        }}
                      >
                        <Typography sx={{ typography: "font_12_400" }}>
                          {new Date(Obj.createdAt).toDateString()}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })
              : null}
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default Index;
