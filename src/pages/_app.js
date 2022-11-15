import React from "react";
import "styles/global.scss";
import "styles/components/index.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
