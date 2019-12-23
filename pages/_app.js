import App from "next/app";
import Router from "next/router";
import { pageview } from "../utils/gtag";

Router.events.on("routeChangeComplete", pageview);

export default App;
