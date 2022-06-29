import type { AppProps } from "next/app";

import "../../styles/global/reset.css";
import "../../styles/global/typography.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
