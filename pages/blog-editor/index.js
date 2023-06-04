import { neutral100,neutral700} from "@/helper/theme";
import { Box, Button, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Image from "next/image";
import NW, { BaseUrl, EndPoint } from "@/helper/NWRequest";
import ghostLogo from "@/assets/images/ghost-logo.svg";
import { alertShow } from "@/components/globalComponents/AppAlert";
import Utils from "@/helper/Utils";

const RichTextEditor = dynamic(() => import("../../components/TextEditor"), {
  ssr: false,
});

export default function Index() {
  const initialValue = ``;
  const [title, setTitle] = useState("");
  const [html, setHtml] = useState("");
  const [tag, setTag] = useState("");
  const [author, setAuthor] = useState("");

  const [publishDate, setPublishDate] = useState("");
  const [featuredImg, setFeaturedImg] = useState("");
  const [short_Desp, setShort_Desp] = useState("");

  const createBlog = async () => {
    if (
      !title ||
      !html ||
      !featuredImg ||
      !author ||
      !tag ||
      !publishDate ||
      !short_Desp
    ) {
      alertShow({
        message: "All feilds are mandatory !",
        type: "error",
      });
      return;
    }
    const body = {
      title,
      html,
      feature_image: featuredImg,
      authors: author,
      tags: tag,
      activeFrom: new Date(publishDate).toISOString(),
      blogStatus: "publish",
      slug: title.replaceAll(" ", "-"),
      short_Desp,
    };
    const blog = await NW.Post(BaseUrl, EndPoint.CREATE_NEW_BLOG, {
      body,
      token: `Bearer ${Utils.getCookie("userToken")}`,
    });
    if (blog) {
      alertShow({
        message: `Blog:"${title}" is added`,
        type: "success",
      });
    }
  };
  
useEffect(() => {
initTerminal()
  if(!Utils.getCookie('userToken')){
    router.push('/login')
  }
},[])

  return (
    <Grid sx={{ padding: "24px" }}>
      <Grid
        sx={{
          border: `1px solid ${neutral100}`,
          padding: "16px",
          margin: "12px 0",
          borderRadius: "8px",
          background:
            "linear-gradient(356deg, rgba(25,27,31,0.99) 41%, rgba(9,10,10,1) 50%)",
        }}
      >
        <Box
          sx={{
            display: "grid",
            placeContent: "center",
            minHeight: "250px",
          }}
        >
          <Image src={ghostLogo.src} alt="ghostlogo" height={48} width={240} />
          <Typography
            sx={{ 
              color: "white",
              typography: "font_20_600",
              textAlign: "center",
            }}
          >
            Thoughts, stories and ideas.
          </Typography>
        </Box>
      </Grid>
      <Grid
        sx={{
          border: `1px solid ${neutral100}`,
          padding: "16px",
          borderRadius: "8px",
          marginBottom: "12px",
        }}
      >
        <Box>
          <Typography sx={{ typography: "font_20_600" }}>
            Begin writing your blog....
          </Typography>
        </Box>
        <Grid
          sx={{
            margin: "12px 0",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              title: "Title",
              func: (e) => setTitle(e.target.value),
              placeHolder: "Enter blog tag",
            },
            {
              title: "Tag",
              func: (e) => setTag(e.target.value),
              placeHolder: "Enter blog tag",
            },
            {
              title: "Author",
              func: (e) => setAuthor(e.target.value),
              placeHolder: "Enter blog Author name",
            },
            {
              title: "Publish Date",
              func: (e) => setPublishDate(e.target.value),
              placeHolder: "Enter blog publish date",
            },
            {
              title: "Featured Image",
              func: (e) => setFeaturedImg(e.target.value),
              placeHolder: "URL https://",
            },
          ].map((obj, i) => {
            return (
              <Box sx={{ margin: "12px 16px" }} key={obj.title}>
                <Typography
                  sx={{
                    typography: "font_16_600",
                    color: neutral700,
                    margin: "4px 8px",
                  }}

                >
                  {obj.title}
                </Typography>
                <input
                  type="text"
                  style={{
                    borderRadius: "4px",
                    width: "200px",
                    outline: "none",
                    border: "1px solid #d6e3eb",
                    padding: "12px 12px",
                  }}
                  placeholder={obj.placeHolder}
                  onFocus={(e) =>
                    obj.title == "Publish Date" ? (e.target.type = "date") : ""
                  }
                  onChange={obj.func}
                />
              </Box>
            );
          })}
        </Grid>
        <Box sx={{ margin: "auto" }}>
          <Typography
            sx={{ typography: "font_16_600", margin: "8px 0",
             }}
          >
            {" "}
            Short Description :-{" "}
          </Typography>
          <textarea
            style={{
              width: "-webkit-fill-available",
              minHeight: "200px",
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid #d6e3eb",
            }}
            placeholder="give a short description about the blog..."
            onChange={(e) => setShort_Desp(e.target.value)}
          ></textarea>
        </Box>
      </Grid>
      <RichTextEditor
        getValue={(value) => setHtml(value)}
        initialValue={initialValue}
      />
      <Button
        variant="contained"
        fullWidth
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          typography: "font_14_600",
          padding: "12px 0",
          margin: "24px 0",
          background: "linear-gradient(326deg, rgba(25,27,31,1) 47%, rgba(9,10,10,1) 49%)"
        }}
        onClick={createBlog}
      >
        <Typography sx={{  }}>Post Blog</Typography>
        {/* <Image
          src={postIcon}
          alt="postIcon"
          height={16}
          width={16}
          style={{border:'1px solid black',margin:'0 4px',display:'inline-block' }}
        /> */}
      </Button>
    </Grid>
  );
}
