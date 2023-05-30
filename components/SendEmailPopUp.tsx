import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import crossGrey from "@/assets/images/crossGrey.png";
import Image from "next/image";
import { neutral900 } from "@/helper/theme";

function SendEmailPopUp() {
  return (
    <Grid sx={{padding:'16px',border:'2px solid black',zIndex:4}}>
      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px'}}>
        <Typography sx={{typography:'font_16_600',color:neutral900}}> Invite a new user </Typography>
        <Image src={crossGrey} alt="crossGrey" height={16} width={16} />
      </Box>
    </Grid>
  );
}

export default SendEmailPopUp;
