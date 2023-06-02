import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import crossGrey from "@/assets/images/crossGrey.png";
import Image from "next/image";
import { neutral900 } from "@/helper/theme";
import passwordIconLogin from "@/assets/images/passwordIconLogin.png";
import emailIconLogin from "@/assets/images/emailIconLogin.png";
import { useRouter } from "next/router";
import NW, { BaseUrl, EndPoint } from "@/helper/NWRequest";
import { EMAIL_REG, ErrorText } from "@/helper/constants";
import { alertShow } from "./globalComponents/AppAlert";
import adminIcon from "@/assets/images/adminIcon.png";
import Utils from "@/helper/Utils";

function SendEmailPopUp({setShowInviteModal}:{setShowInviteModal: (a: boolean) => void}) {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const addAdmin = async () => {
    if (!EMAIL_REG.test(email)) {
      alertShow({
        message: ErrorText.email,
        type: "error",
      });
    }
    const body = {
      name: "Admin",
      email: "Admin@gmail.com",
      password: "Admin123",
    };
    const res = await NW.Post(BaseUrl, EndPoint.ADMIN_REGISTER, {
      body,
      token: `Bearer ${Utils.getCookie("userToken")}`,
    });
    if (res) {
      console.log(res);
    }
  };

  const isBtnDisabled = () => {
    let status = true;
    if (email.length > 6 && password.length > 6 && name.length >= 3) {
      status = false;
    }
    return status;
  };

  return (
    <Grid
      sx={{
        padding: "16px 24px",
        zIndex: 4,
        background: "white",
        width: "300px",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px",
        }}
      >
        <Typography sx={{ typography: "font_16_600", color: neutral900 }}>
          Add a new user
        </Typography>
        <Image
          src={crossGrey}
          alt="crossGrey"
          height={16}
          width={16}
          onClick={() => setShowInviteModal(false)}
        />
      </Box>
      <Grid sx={{ background: "white", borderRadius: "8px" }}>
        <Box sx={{ position: "relative", margin: "16px 0" }}>
          <Image
            src={adminIcon}
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
            placeholder="Admin Name"
            onChange={(e) => setName(e.target.value)}
            style={{
              display: "block",
              borderRadius: "4px",
              padding: "8px 8px 8px 32px",
              width: "-webkit-fill-available",
              background: "#E7F0FE",
              outline: "none",
              border: "1px solid #d6e3eb",
            }}
          />
        </Box>
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
            placeholder="Admin Email"
            onChange={(e) => setEmail(e.target.value)}
            style={{
              display: "block",
              width: "-webkit-fill-available",
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
              width: "-webkit-fill-available",
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
          }}
          disabled={isBtnDisabled()}
          onClick={addAdmin}
        >
          Add Admin
        </Button>
      </Grid>
    </Grid>
  );
}

export default SendEmailPopUp;
