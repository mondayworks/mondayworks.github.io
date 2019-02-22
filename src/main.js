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