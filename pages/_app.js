// import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import "../css/global.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <ThemeProvider attribute="class"> */}
        <Component {...pageProps} />
        <SpeedInsights />
        <Analytics />
      {/* </ThemeProvider> */}
    </>
  );
}

export default MyApp;
