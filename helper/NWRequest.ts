import { alertShow } from "@/components/globalComponents/AppAlert";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ALERT_PROPS_TYPE } from "../Interface/interface";
import {
  hideLoading,
  showLoading,
} from "@/components/globalComponents/AppLoader";
import Utils from "./Utils";

class NW {
  static getBaseUrl = () => {
    return process.env.Base_Url as string;
  };

  static async Get(
    baseUrl: string,
    EndPoint: string,
    other?: {
      params?: any;
      customToken?: {
        gpId?: string;
        productCode?: string;
      };
      requestId?: string;
      sessionId?: string;
      captcha?: string;
      token?: string;
      userid?: string;
      formData?: any;
    }
  ): Promise<any> {
    let headers: any = {
      "Content-Type": "application/json",
    };
    if (other?.requestId) {
      headers.requestId = other.requestId;
    }
    if (other?.sessionId) {
      headers.sessionId = other.sessionId;
    }
    if (other?.token) {
      headers.Authorization = other.token;
    }
    if (other?.captcha) {
      headers.Authorization = other.captcha;
    }
    let config: AxiosRequestConfig = {
      headers,
      method: "GET",
    };
    if (other && other.params && Object.keys(other.params).length > 0) {
      config.params = other.params;
    }
    try {
      showLoading()
      const response = await axios.get(baseUrl + EndPoint, config);
      hideLoading()
      return response.data;
    } catch (error: any) {
      // this.handleErrors(error);
      return error;
    }
  }

  static async Post(
    baseUrl: string,
    EndPoint: string,
    other?: {
      body?: any;
      customToken?: {
        gpId?: string;
      };
      requestId?: string;
      sessionId?: string;
      token?: string;
      authorizationToken?: string;
      userid?: string;
      formDataBody?: any;
      showError?: boolean;
      hideLoader?: boolean;
    }
  ): Promise<any> {
    let data = other?.formDataBody
      ? other.formDataBody
      : JSON.stringify(other?.body || {});
    try {
      let headers: any = {
        "Content-Type": other?.formDataBody
          ? "multipart/form-data"
          : "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": `${baseUrl}`,
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      };
      let token = Utils.getCookie("userToken");
      if (other?.requestId) {
        headers.requestId = other.requestId;
      }
      if (other?.sessionId) {
        headers.sessionId = other.sessionId;
      }
      if (other?.token) {
        headers.Authorization = other.token;
      }
      if (other?.authorizationToken) {
        headers.authorizationToken = other.authorizationToken;
      } else if (!other?.authorizationToken) headers.authorizationToken = token;
      // if (other?.hideLoader) {
      //   showLoading(other?.hideLoader);
      // } else {
      //   showLoading();
      // }
      const response = await axios({
        url: baseUrl + EndPoint,
        headers,
        method: "POST",
        data: data,
      });
      // hideLoading();
      return response.data;
    } catch (error: any) {
      // hideLoading();
      if (other?.showError) {
        this.handleErrors(error);
        return error;
      } else if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.data &&
        error.response.data.data.isBreakIn
      ) {
        return "breakInError";
      } else {
        return error?.response?.data;
      }
    }
  }

  static async UploadFile(
    url: string,
    file: File
  ): Promise<AxiosResponse<any, any> | null> {
    // showLoading();
    const body = new FormData();
    body.append("file", file);
    try {
      let headers: any = {
        "Content-Type": "multipart/form-data",
        // Authorization,
        "Access-Control-Allow-Headers": "*",
      };
      const response = await axios({
        url,
        headers,
        method: "PUT",
        data: body,
      });
      // hideLoading();
      return response;
    } catch (error: any) {
      this.handleErrors(error);
      // hideLoading();
      return error;
    }
  }

  static handleErrors = (error: any) => {
    if (!error) {
      return;
    }
    let message = "";
    if (error.message) {
      message = error.message;
    }
    if (error.response) {
      if (
        error.response.data &&
        error.response.data.msg &&
        typeof error.response.data.msg === "string"
      ) {
        message = error.response.data.msg || error.response.statusText;
      }
      if (
        error.response.data.message ||
        typeof error.response.data.message === "string"
      ) {
        message = error.response.data.message;
      }
      if (error.response.status === 401 || error.response.status === 403) {
        // logout user
      }
    }
    if (!message) {
      return;
    }
    let alert: ALERT_PROPS_TYPE = {
      type: "error",
      message: message,
    };
    alertShow({ type: alert.type, message: alert.message });
  };
  static getEndPoint = () => {
    let obj = {

      // BLOGS:- 
      GET_All_BLOGS : '/api/blog',
      GET_BLOG_BY_SLUG:'/api/blog/', //+:slug,
      CREATE_NEW_BLOG:'/api/blog/create',
      UPDATE_BLOG_BY_SLUG:'/api/blog/', //+:slug,
      DELETE_BLOG_BY_SLUG:'/api/blog/', //+:slug,

      // ADMIN:-
      GET_ALL_STAFF:'/api/admin/all-admin',
      ADMIN_LOGIN:'/api/admin/login',
      ADMIN_REGISTER:'/api/admin/register',
     
      //FILTERS:-
      FILTER_BLOG:"/api/filter"
    };
    return obj;
  };
}
export default NW;
export const BaseUrl = NW.getBaseUrl();
export const EndPoint = NW.getEndPoint();
