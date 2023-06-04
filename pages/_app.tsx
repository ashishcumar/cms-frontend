import AppAlert from "@/components/globalComponents/AppAlert";
import AppLoader from "@/components/globalComponents/AppLoader";
import { CMS_THEME } from "@/helper/theme";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

function App({ Component, pageProps }: any) {
  const [isDomLoaded, setIsDomLoaded] = useState<boolean>(false);

  useEffect(() => {
    if(typeof globalThis.window !== 'undefined' )
    setIsDomLoaded(true);
  }, [globalThis, globalThis.window]);
   
  return (
    <>
      {isDomLoaded ? (
        <ThemeProvider theme={CMS_THEME}>
          <Provider store={store}>
            <AppAlert />
            <AppLoader />
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      ) : null}
    </>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
