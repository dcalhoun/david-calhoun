import ReactGA from "react-ga";

export const initGA = () => {
  if (__DEV__) return;

  ReactGA.initialize(__ENV__.analyticsId);
};

export const logPageView = () => {
  if (__DEV__) return;

  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = "", action = "") => {
  if (__DEV__) return;

  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = "", fatal = false) => {
  if (__DEV__) return;

  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
