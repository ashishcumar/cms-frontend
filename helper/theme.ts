import * as React from "react";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    font_32_600: true;
    font_28_600: true;
    font_20_700: true;
    font_20_600: true;
    font_18_700: true;
    font_18_600: true;
    font_12_500: true;
    font_12_600: true;
    font_12_400: true;
    font_14_400: true;
    font_14_500: true;
    font_14_700: true;
    font_16_600: true;
    font_16_500: true;
    font_16_400: true;
    font_14_600: true;
    font_10_700: true;
    font_10_600: true;
  }
}
interface ExtendedTypographyOptions extends TypographyOptions {
  font_32_600: React.CSSProperties;
  font_28_600: React.CSSProperties;
  font_20_700: React.CSSProperties;
  font_20_600: React.CSSProperties;
  font_18_700: React.CSSProperties;
  font_18_600: React.CSSProperties;
  font_12_500: React.CSSProperties;
  font_12_600: React.CSSProperties;
  font_12_400: React.CSSProperties;
  font_14_400: React.CSSProperties;
  font_14_500: React.CSSProperties;
  font_14_700: React.CSSProperties;
  font_16_600: React.CSSProperties;
  font_16_500: React.CSSProperties;
  font_16_400: React.CSSProperties;
  font_14_600: React.CSSProperties;
  font_10_700: React.CSSProperties;
  font_10_600: React.CSSProperties;
}

export const CMS_THEME = createTheme({
  typography: {
    fontFamily: ["Figtree", "sans-serif"].join(","),
    button: {
      textTransform: "none",
    },
    font_32_600: {
      fontWeight: 600,
      fontSize: "3.2rem",
      lineHeight: "3.8rem",
      display: "block",
    },
    font_28_600: {
      fontWeight: 600,
      fontSize: "1.75rem",
      lineHeight: "2.375rem",
      display: "block",
    },
    font_20_600: {
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      display: "block",
    },
    font_20_700: {
      fontWeight: 700,
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      display: "block",
    },
    font_18_700: {
      fontWeight: 700,
      fontSize: "1.125rem",
      lineHeight: "1.375rem",
      display: "block",
    },
    font_18_600: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: "1.375rem",
    },
    font_12_500: {
      fontWeight: 500,
      fontSize: "0.75rem",
      lineHeight: "1rem",
      display: "block",
      margin: "4px 0",
    },
    font_12_600: {
      fontWeight: 600,
      fontSize: "0.75rem",
      lineHeight: "0.75rem",
      display: "block",
    },
    font_12_400: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: "1rem",
      display: "block",
    },
    font_14_400: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      display: "block",
    },
    font_14_500: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: "1.313rem",
      display: "block",
    },
    font_14_700: {
      fontWeight: 700,
      fontSize: "0.875rem",
      lineHeight: "1.313rem",
      display: "block",
    },
    font_16_600: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    font_16_500: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      display: "block",
    },
    font_16_400: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      display: "block",
    },
    font_14_600: {
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      display: "block",
    },
    font_10_700: {
      fontWeight: 700,
      fontSize: "0.625rem",
      lineHeight: "1.rem",
    },
    font_10_600: {
      fontWeight: 600,
      fontSize: "0.625rem",
      lineHeight: "1.rem",
    },
  } as ExtendedTypographyOptions,
  palette: {
    action: {
      disabled: "#ffffff",
      disabledBackground: "#C0C9D1",
    },
  },
} as ThemeOptions);

export const font_20_600_Modal = {
  fontWeight: 600,
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
  display: "block",
  margin: "8px 0",
};
export const font_12_500_Modal = {
  fontWeight: 500,
  fontSize: "0.75rem",
  lineHeight: "1rem",
  display: "block",
  margin: "4px 0",
};
export const font_10_700_Modal = {
  fontWeight: 700,
  fontSize: "0.625rem",
  lineHeight: "1.rem",
};
export const font_12_400_Modal = {
  fontWeight: 400,
  fontSize: "0.75rem",
  lineHeight: "1rem",

  margin: "4px 0",
};
export const font_12_600_Modal = {
  fontWeight: 600,
  fontSize: "0.75rem",
  lineHeight: "1rem",

  margin: "4px 0",
};
export const font_14_400_Modal = {
  fontWeight: 400,
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
};
export const font_14_500_Modal = {
  fontWeight: 500,
  fontSize: "0.875rem",
  lineHeight: "1.313rem",
  display: "block",
};
export const font_14_700_Modal = {
  fontWeight: 700,
  fontSize: "0.875rem",
  lineHeight: "1.313rem",
  display: "block",
};
export const font_16_600_Modal = {
  fontWeight: 600,
  fontSize: "1rem",
  lineHeight: "1.5rem",
};
export const font_16_500_Modal = {
  fontWeight: 500,
  fontSize: "1rem",
  lineHeight: "1.5rem",
  display: "block",
};
export const font_16_400_Modal = {
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: "1.5rem",
  display: "block",
};
export const font_14_600_Modal = {
  fontWeight: 600,
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
};

export const font_18_600_Modal = {
  fontWeight: 600,
  fontSize: "1.125rem",
  lineHeight: "1.375rem",
};

// motor insurance
export const lightgray = "#62778C";
export const borderLightShade = "#CCE3FA";
export const lightSkyBlue = "#F2F8FE";
export const neutral700 = "#3B4854";
export const neutral600 = "#4F6070";
export const neutral500 = "#62778C";
export const neutral900 = "#222A31";
export const neutral100 = "#E0E4E8";
export const neutral300 = "#B8C2CC";
export const neutral400 = "#99A6B2";
export const neutral200 = "#C0C9D1";
export const neutral50 = "#F7F8F9";
export const neutral25 = "#FAFCFD";
export const red600 = "#C0362D";
export const red500 = "#F04438";
export const red100 = "#FAD4D6";
export const red50 = "#FDF0F0";
export const primary500 = "#0073E5";
export const boxShad =
  "0px 0px 2px rgba(41, 71, 190, 0.06), 0px 3px 8px rgba(41, 71, 190, 0.1)";
export const boxShad2 = `0px 0px 1px rgba(20, 24, 28, 0.06), 0px 1px 2px rgba(20, 24, 28, 0.1)`;
export const neutral87 = "#050A19";
export const bgGrey = "#E5E5E5";
export const primary02_500 = "#00BD6D";
export const green500 = "#5BB844";
export const green100 = "#DFF1DA";
export const green50 = "#F7FCF6";
export const primary_25 = "#F9FCFE";
export const primary02_100 = "#CCF2E2";
export const primary02_25 = "#F9FDFB";
export const primary_100 = "#CCE3FA";
export const primary_200 = "#99C7F5";
export const cyan700 = "#04687F";
export const cyan100 = "#CDEEF6";
export const cyan500 = "#06AED4";
export const cyan50 = "#F3FBFD";
export const yellow500 = "#E0AF00";

// cms-frontend theme
export const Primary_Background = "#f1f4f7";
export const Draft_Bg = "#F0D5F1";
export const Draft_Dark = "#AD26B4";
export const Modal_Background = "#7F8C93"

// agency theme
export const Background_Default = "#E1E1E1";
export const Quote_Bg_Default = "#03002B";
export const Primary_Default = "#1576D6";
export const Primary_Light = "#CCE5FF";
export const Box_Shadow =
  "0px 1px 2px rgba(50, 50, 71, 0.08), 0px 0px 1px rgba(50, 50, 71, 0.2)";
export const Text_Body_Light = "#425466";
export const Text_Heading_Dark = "#27272E";
export const Input_Deafult_Text = "#494949";
export const Input_Muted_Background = "#EDF2F7";
export const Input_PlaceHolder = "#7A828A";
export const Danger_Default = "#F16063";
export const Danger_Soft = "#FFE6E4";
export const Surface_Light = "#D5D5DC";
export const Surface_Secondary = "#F7FAFC";
export const Success_Default = "#66CB9F";
export const Success_Dark = "#4AAE8C";
export const Success_Soft = "#DEFFEE";
export const Theme_Dark_Light = "#505780";
export const Theme_Dark_Default = "#16192C";
export const Secondary_Dark = "#A6B7D4";
export const Secondary_Default = "#E4ECF7";
export const Secondary_Linear_Gradient =
  "linear-gradient(225deg, #F1F1F5 0%, #E4ECF7 100%)";
export const Text_Body_Muted = "#7A7A9D";
export const Info_Soft = "#E5FDFF";
export const Info_Default = "#68DBF2";
export const Info_Dark = "#4CAFD0";
export const Border_Light = "#EDF2F7";
export const Table_Head_Background = "#FAFAFB";
export const Table_Head_Text = "#8492A6";
export const Warning_Soft = "#FFEDE3";
export const Warning_Default = "#F7936F";
export const Warning_Dark = "#D46A51";
export const Grey_900 = "#1A202C";
export const Grey_600 = "#718096";
export const ActiveMem_Bg = "#E9EEF6";
export const Opaque_Background = "#10101266";
export const Primary_Gradient = {
  background: "linear-gradient(225deg, #3AD6A2 0%, #1576D6 100%)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  "background-clip": "text",
  "text-fill-color": "transparent",
};
export const Table_Box_Shadow = `inset 0px -1px 0px #EDF2F7`;
export const Box_Shadow_Filter = {
  boxShadow: "0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
  filter: "drop-shadow(0px 0px 1px rgba(12, 26, 75, 0.24))",
};
export const Primary_Gradient_Bg = `linear-gradient(225deg, #3AD6A2 0%, #1576D6 100%)`;
export const Mobile_Header_Shadow = {
  boxShadow:
    "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
};
