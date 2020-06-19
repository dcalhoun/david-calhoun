import App from "next/app";
import Router from "next/router";

Router.events.on("routeChangeComplete", (page_path) =>
  window.gtag("config", process.env.GA_TRACKING_ID, { page_path })
);

export default App;
