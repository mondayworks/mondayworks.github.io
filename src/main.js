import "bulma";
import "./styles/main.scss";
import ScrollReveal from "scrollreveal";
import jq from "jquery";
import Sketches from "./partials/hero";
import "./img/logo.png";
import "./img/services_architecture.svg";
import "./img/services_development.svg";
import "./img/services_integration.svg";
import "./img/services_agile.svg";

import "./img/icon_dotnet.svg";
import "./img/icon_html5.jpg";
import "./img/icon_js.jpg";
import "./img/icon_react.png";
import "./img/icon_docker.png";
import "./img/icon_kubernetes.png";
import "./img/icon_azure.png";
import "./img/icon_aws.png";

window.sr = ScrollReveal();
sr.reveal(".fadein", { delay: 200 });
// sr.reveal(".fadein-delayed", { delay: "200" }, 150);
sr.reveal(".fadein-delayed", { delay: "200" }, 500);
sr.reveal(".fadein-left", { origin: "left", distance: "100%", duration: "1000", delay: "500" });
sr.reveal(".fadein-left-sync", { origin: "left", delay: "50" }, 250);
sr.reveal(".fadein-left-sync-delayed", { origin: "left", delay: "200" }, 250);
sr.reveal(".fadein-right", { origin: "right", distance: "100%", duration: "1000", delay: "500" });

jq.ready
  .then(() => {
    const sketches = new Sketches();
    setTimeout(() => sketches.start(), 3500);
  });