import { AlertColor } from "@mui/material";

export interface BLOGS {
  title: string;
  slug: string;
  html: string;
  feature_image: string;
  authors: string;
  tags: string;
  activeFrom: string;
  blogStatus: string;
}

export interface ALERT_STATE {
  isShow: boolean;
  message: string;
}
export interface MODAL_STATE {
  isShow: boolean;
  position?: "bottom" | "center" | "top";
  title?: string;
  children?: JSX.Element;
  closeDisable?: boolean;
}
export interface BOTTOM_MODAL_STATE {
  isShow: boolean;
  position?: "bottom";
  title?: string;
  children?: JSX.Element;
  closeDisable?: boolean;
}

export interface ALERT_PROPS_TYPE {
  type: AlertColor;
  message: string;
}
