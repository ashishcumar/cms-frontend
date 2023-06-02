import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import passwordIconLogin from "@/assets/images/passwordIconLogin.png";
import emailIconLogin from "@/assets/images/emailIconLogin.png";
import Image from "next/image";
import NW, { BaseUrl, EndPoint } from "@/helper/NWRequest";
import { ConstructionOutlined } from "@mui/icons-material";
import { EMAIL_REG } from "@/helper/constants";
import { alertShow } from "@/components/globalComponents/AppAlert";
import Utils from "@/helper/Utils";
import { Router } from "express";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const getAdmin = async () => {
    if (!EMAIL_REG.test(email)) {
      alertShow({
        message: "Enter Valid Email Id",
        type: "error",
      });
      return;
    }
    let body = { email, password };
    const res = await NW.Post(BaseUrl, EndPoint.ADMIN_LOGIN, { body });
    if (res) {
       Utils.setCookies('userToken',res.accessToken,7)
       router.push('/')
    }
  };

  const isBtnDisabled = () => {
    let status = true;
    if (email.length > 6 && password.length > 6) {
      status = false;
    }
    return status;
  };

  return (
    <Grid
      sx={{
        background: "#f1f4f7",
        height: "100vh",
        width: "100vw",
        display: "grid",
        placeContent: "center",
      }}
    >
      <Grid sx={{ padding: "16px", background: "white", borderRadius: "8px" }}>
        <Box sx={{ position: "relative", margin: "16px 0" }}>
          <Image
            src={emailIconLogin}
            alt="icon"
            height={16}
            width={16}
            style={{
              position: "absolute",
              top: "25%",
              bottom: "50%",
              left: "2%",
            }}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            style={{
              display: "block",
              width: "240px",
              borderRadius: "4px",
              padding: "8px 8px 8px 32px",
              // margin:'8px',
              background: "#E7F0FE",
              outline: "none",
              border: "1px solid #d6e3eb",
            }}
          />
        </Box>
        <Box sx={{ position: "relative", margin: "16px 0" }}>
          <Image
            src={passwordIconLogin}
            alt="icon"
            height={16}
            width={16}
            style={{
              position: "absolute",
              top: "25%",
              bottom: "50%",
              left: "2%",
            }}
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            style={{
              display: "block",
              width: "240px",
              borderRadius: "4px",
              padding: "8px 8px 8px 32px",
              background: "#E7F0FE",
              outline: "none",
              border: "1px solid #d6e3eb",
            }}
          />
        </Box>
        <Button
          variant="contained"
          fullWidth
          style={{
            margin: "8px 0",
            background: "linear-gradient(#5bbbf0,#2ba2e3)",
          }}
          disabled={isBtnDisabled()}
          onClick={getAdmin}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

export default Index;
