import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppContent from "./AppContent";
import { contact } from "./lib/contact";

export { contact };

export const render = (url: string) => renderToString(
  <StaticRouter location={url}>
    <AppContent />
  </StaticRouter>,
);
