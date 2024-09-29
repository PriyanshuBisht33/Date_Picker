// /pages/_app.js
import "../styles/globals.css"; // Importing global CSS
import "react-datepicker/dist/react-datepicker.css"; // Importing datepicker styles

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
//
