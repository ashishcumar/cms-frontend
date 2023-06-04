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

export interface BLOG_OBJECT {
  activeFrom: string;
  authors: string;
  blogStatus: string;
  createdAt: string;
  feature_image: string;
  html: string;
  slug: string;
  tags: string;
  title: string;
  updatedAt: string;
  short_Desp: string;
  __v: number;
  _id: string;
}

export interface ADMIN_OBJECT {
  createdAt: string;
  email: string;
  name: string;
  password: string;
  updatedAt: string;
  __v: number;
  _id: string;
}
