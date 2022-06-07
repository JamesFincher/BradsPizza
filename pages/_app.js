import Head from "next/head";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import RBNavBar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <RBNavBar />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
