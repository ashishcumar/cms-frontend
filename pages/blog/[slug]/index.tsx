import { BLOG_OBJECT } from "@/Interface/interface";
import NW, { BaseUrl, EndPoint } from "@/helper/NWRequest";
import Utils from "@/helper/Utils";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Index() {
  const router = useRouter();
  const [blog, setBlog] = useState<BLOG_OBJECT[]>();
  useEffect(() => {
    if (!Utils.getCookie("userToken")) {
      router.push("/login");
    }
    getOneBlog();
  }, [router.query.slug]);

  const getOneBlog = async () => {
    const blog = await NW.Get(
      BaseUrl,
      EndPoint.GET_BLOG_BY_SLUG + `/${router.query.slug}`
    );
    if (blog) {
      setBlog(blog);
    }
  };

  const updateInnerHtml = (html: string) => {
    const text = html
      .replaceAll("<strong", `<strong id='strongPara'`)
      .replaceAll("\\n", " ")
      .replaceAll(`"`, "")
      .replaceAll(`\\`, " ")
      .replaceAll(
        'href="https://play',
        `id='onlyHrefRedirectionBlog' href="https://`
      )
      .replaceAll("href", `id='onlyHrefBlog' href`);
    return { __html: text };
  };

  return (
    <>
      {blog && blog.length ? (
        <>
          <Grid
            sx={{
              minHeight: { xs: "40vh", md: "50vh" },
              background:
                "radial-gradient(circle, rgba(25,27,31,1) 36%, rgba(9,10,10,1) 80%)",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "28px", md: "64px" },
                lineHeight: { xs: "36px", md: "72px" },
                width: { xs: "80%", md: "60%" },
                textAlign: "center",
              }}
            >
              {blog[0].title}
            </Typography>
          </Grid>
          <>
            <Grid sx={{ width: { xs: "90%", md: "80%" }, margin: "20px auto" }}>
              <Grid
                sx={{
                  width: { xs: "100%x", md: "550px" },
                  margin: "63px auto",
                }}
              >
                <Image
                  src={blog[0].feature_image}
                  alt={blog[0].tags || blog[0].title}
                  width={100}
                  height={100}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Grid>
            </Grid>

            <Grid
              sx={{
                width: { xs: "90%", md: "80%" },
                margin: "auto",
                maxWidth: "1440px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "24px", md: "36px" },
                  lineHeight: { xs: "32px", md: "38px" },
                  color: "#0A0C0F",
                  margin: "10px 0",
                }}
              >
                {blog[0].title}
              </Typography>
              <span
                dangerouslySetInnerHTML={updateInnerHtml(blog[0].html)}
              ></span>
            </Grid>

            <Grid
              sx={{
                width: { xs: "90%", md: "80%" },
                margin: "20px auto",
                display: { xs: "block", md: "flex" },
                justifyContent: { xs: "center", md: "space-between" },
                alignItems: "center",
                maxWidth: "1440px",
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  alignItems: { md: "center" },
                  justifyContent: { xs: "center", md: "normal" },
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={700}
                  sx={{ whiteSpace: "nowrap", margin: { xs: "8px 0" } }}
                >
                  Tags :-
                </Typography>
                <Grid
                  sx={{
                    display: "flex",
                    flexWrap: { xs: "wrap", md: "nowrap" },
                  }}
                >
                  {blog[0].tags ? (
                    <Typography
                      sx={{
                        padding: "4px 12px",
                        fontSize: { xs: "12px", md: "14px" },
                        borderRadius: "50px",
                        margin: { xs: "4px 8px", md: "4px" },
                        backgroundColor: "#4d71d2",
                        color: "white",
                      }}
                    >
                      {blog[0].tags}
                    </Typography>
                  ) : null}
                </Grid>
              </Grid>
            </Grid>
          </>
        </>
      ) : null}
    </>
  );
}

export default Index;
