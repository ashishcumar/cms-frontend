import { CMS_THEME } from '@/helper/theme'
import '@/styles/globals.css'
import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={CMS_THEME}>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}
