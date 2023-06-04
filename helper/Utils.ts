import { alertShow } from "@/components/globalComponents/AppAlert";
const type = "error";

declare const window: Window &
  typeof globalThis & {
    moe:any;
    ga: any;
    ReactNativeWebView: any;
    scDK: any;
  };
export default class Utils {
  static setTitle(title: string) {
    document.title = title;
  }
  static sendWhatsapp(phone: string, message?: string) {
    if (message) {
      let whatsappText = message.replaceAll("&", "and").replaceAll("#", "");
      window.open(
        `https://api.whatsapp.com/send?phone=91${phone}&text=${whatsappText}`,
        "_blank"
      );
      return;
    }
    window.location.href = `https://api.whatsapp.com/send?phone=91${phone}`;
  }

  static consoleLog({ title, value }: { title: string; value: any }) {}

  static mobileValidate(mobile: string) {
    let valid = false;
    mobile = mobile.trim();
    if (
      mobile.length === 10 &&
      !isNaN(Number(mobile)) &&
      !mobile.includes(".") &&
      !mobile.includes("e") &&
      !mobile.includes("+") &&
      !mobile.includes("-") &&
      mobile[0] >= "6"
    ) {
      valid = true;
    }
    if (!valid) {
      alertShow({ type: type, message: "Invalid Mobile Number!" });
    }
    return valid;
  }

  static scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  static handleClickScroll(value: string) {
    setTimeout(() => {
      const element = document.getElementById(value);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  }

  static setCookies(name: string, value: string, days: number) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    globalThis.window.document.cookie =
      name + "=" + (value || "") + expires + "; path=/";
  }

  static getCookie(name: string) {
    var nameEQ = name + "=";
    var ca = globalThis.window.document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length).trim();
    }
    return null;
  }

  static removeCookie(name: string) {
    globalThis.window.document.cookie =
      name + "=; path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }


 
  static getValue = (options: any[], value: string) => {
    let label = "";
    options.forEach((op) => {
      if (op.value === value) {
        label = op.label;
      }
    });
    if (label) {
      return { label: label, value: value };
    } else {
      return null;
    }
  };
  static changeToViewCase = (name: string) => {
    const wordArray = name.toLowerCase().split(" ");
    let response = "";
    wordArray.forEach((word: string) => {
      response += word[0].toUpperCase() + word.substring(1) + " ";
    });
    return response;
  };
  static delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  static getGA = () => {
    try {
      return window.ga &&
        window.ga.getAll() &&
        window.ga.getAll()[0] &&
        window.ga.getAll()[0].get("clientId")
        ? window.ga.getAll()[0].get("clientId")
        : "";
    } catch (error) {
      return "";
    }
  };
  static findAge(dob: Date) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
 

  static getTime(date: Date) {
    return date?.toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
      minute: "2-digit",
    });
  }
  static async handleSharing(shareDetails: ShareData) {
    if ("ReactNativeWebView" in window) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ share: shareDetails })
      );
      return;
    }
    if (shareDetails.url) {
      if (navigator.share) {
        try {
          await navigator
            .share(shareDetails)
            .then(() =>
              console.log("Hooray! Your content was shared to tha world")
            );
        } catch (error) {
          console.log(`Oops! I couldn't share to the world because: ${error}`);
        }
      } else {
        this.copyToClipboard(shareDetails.url);
      }
    } else {
      alertShow({
        type: "error",
        message: "Something went wrong,Please try again after sometime !",
      });
    }
  }
  static getYearGap(d1: string, d2: string) {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    return (date1.getTime() - date2.getTime()) / 86400 / 1000 / 365;
  }

  static copyToClipboard(url: string) {
    try {
      if (url) {
        navigator.clipboard.writeText(url).then(() => {
          alertShow({ type: "success", message: "copied to clipboard!" });
        });
      } else {
        alertShow({
          type: "error",
          message: "Something went wrong,Please try again after sometime !",
        });
      }
    } catch (e) {
      console.warn(e);
    }
  }

  static getDateString = (date: string) => {
    const d = new Date(date);
    const formatter = Intl.DateTimeFormat("en-IN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formatter.format(d);
  };

  static dateToISOString(
    birthDay: string | any,
    birthMonth: string | any,
    birthYear: string | any
  ) {
    if (birthDay.length && birthMonth.length && birthYear.length) {
      const d = new Date(`${birthYear}-${birthMonth}-${birthDay}`);
      return d.toISOString();
    }
  }

  static trackEvent(event: string, data?: any) {
      const Moengage = window.moe({
        app_id: "MALTTXFD391QLJ3UZNAD1ZH9",
        debug_logs: 1,
      });
      try {
        if (data && data.gp_id) {
          Moengage.add_unique_user_id(data.gp_id);
        }
        if (data && Object.keys(data).length) {
          Moengage.track_event(event, data);
          // logEvent(analytics, event, data);
        } else {
          Moengage.track_event(event);
          // logEvent(analytics, event);
        }
      } catch (error) {
        console.log(error);
      }
  }
}
