import type { AppProps } from "next/app";
import "@/styles/global.scss";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
