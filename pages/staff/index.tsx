import Layout from "@/components/Layout";
import {
  Modal_Background,
  Primary_Background,
  boxShad,
  boxShad2,
  neutral100,
  neutral200,
  neutral25,
  neutral400,
  neutral50,
  neutral500,
  neutral700,
  neutral900,
} from "@/helper/theme";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import emailIcon from "@/assets/images/emailIcon.png";
import Image from "next/image";
import adminIcon from "@/assets/images/adminIcon.png";
import SendEmailPopUp from "@/components/SendEmailPopUp";
import NW, { BaseUrl, EndPoint } from "@/helper/NWRequest";
import { ADMIN_OBJECT } from "@/Interface/interface";
import Utils from "@/helper/Utils";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  const [showInviteModal, setShowInviteModal] = useState<boolean>(false);
  const [allAdminList,setAllAdminList] = useState<ADMIN_OBJECT[]>()

 useEffect(() => {
  if(!Utils.getCookie('userToken')){
    router.push('/login')
  }
  getAllAdmin()
 },[])

  const getAllAdmin = async() => {
  const allAdmin = await NW.Post(BaseUrl,EndPoint.GET_ALL_STAFF)
  if(allAdmin){
    setAllAdminList(allAdmin)
  }
  }

  return (
    <>
      {showInviteModal ? (
        <Grid
          sx={{
            position: "absolute",
            height: "100vh",
            width: "100vw",
            display: "grid",
            placeContent: "center",
            background: "#111111BF",
            zIndex: 4,
          }}
        >
          <SendEmailPopUp setShowInviteModal={setShowInviteModal} />
        </Grid>
      ) : null}

      <Layout>
        <Grid
          sx={{
            padding: "20px",
            background: Primary_Background,
            height: "100vh",
          }}
        >
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
              Staff
            </Box>
            <Box>
              <Button
                fullWidth
                variant="contained"
                onClick={() => setShowInviteModal(true)}
              >
                Add Admin
              </Button>
            </Box>
          </Grid>
          <Grid
            sx={{
              margin: "24px 0 0 0",
              borderRadius: "8px",
              background: neutral50,
            }}
          >
            <Typography
              sx={{
                typography: "font_12_600",
                color: neutral400,
                padding: "8px 0",
              }}
            >
              INVITED USER
            </Typography>
            <Box
              sx={{
                boxShadow: boxShad,
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              {[
                {
                  email: "kumarashish87998@gmail.com",
                  date: "01/01/2023",
                },
                {
                  email: "kumarashish87998@gmail.com",
                  date: "01/01/2023",
                },
              ].map((obj, i, currArr) => {
                return (
                  <Box
                    key={obj.email}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      background: "white",
                      padding: "8px 12px",
                      border: `1px solid ${neutral50}`,
                      borderRadius:
                        i == 0
                          ? "8px 8px 0 0"
                          : i == currArr.length - 1
                          ? "0 0 8px 8px"
                          : "",
                    }}
                  >
                    <Box
                      sx={{
                        padding: "8px",
                        borderRadius: "50%",
                        background: "#E5EFF4",
                        display: "grid",
                        placeContent: "center",
                        margin: "0 12px 0 0",
                      }}
                    >
                      <Image
                        src={emailIcon}
                        alt="email icon"
                        height={16}
                        width={16}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{ typography: "font_16_600", color: neutral900 }}
                      >
                        {obj.email}
                      </Typography>
                      <Typography
                        sx={{
                          typography: "font_14_500",
                          color: neutral500,
                          margin: "0 12px 0 0",
                        }}
                      >
                        Invited On :- {obj.date}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Grid>

          <Grid
            sx={{
              margin: "24px 0 0 0",
              borderRadius: "8px",
              background: neutral50,
            }}
          >
            <Typography
              sx={{
                typography: "font_12_600",
                color: neutral400,
                padding: "8px 0",
              }}
            >
              ACTIVE USER
            </Typography>
            <Box
              sx={{
                boxShadow: boxShad,
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              { allAdminList && allAdminList.length ? allAdminList.map((obj:ADMIN_OBJECT, i, currArr) => {
                return (
                  <Box
                    key={obj.name}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      background: "white",
                      padding: "8px 12px",
                      border: `1px solid ${neutral50}`,
                      borderRadius:
                        i == 0
                          ? "8px 8px 0 0"
                          : i == currArr.length - 1
                          ? "0 0 8px 8px"
                          : "",
                    }}
                  >
                    <Box
                      sx={{
                        padding: "8px",
                        borderRadius: "50%",
                        background: "#E5EFF4",
                        display: "grid",
                        placeContent: "center",
                        margin: "0 12px 0 0",
                      }}
                    >
                      <Image
                        src={adminIcon}
                        alt="adminIcon"
                        height={12}
                        width={12}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{ typography: "font_16_600", color: neutral900 }}
                      >
                        {obj.name}
                      </Typography>
                      <Typography
                        sx={{
                          typography: "font_14_500",
                          color: neutral500,
                          margin: "0 12px 0 0",
                          border: `1px solid ${neutral500}`,
                          padding: "4px",
                          borderRadius: "8px",
                        }}
                      >
                        Author
                      </Typography>
                    </Box>
                  </Box>
                );
              }) : null}
            </Box>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default Index;
