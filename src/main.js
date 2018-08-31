import "bulma";
import "./styles/main.scss";
import ScrollReveal from "scrollreveal";

window.sr = ScrollReveal();
sr.reveal(".fadein", { delay: 200 });
// sr.reveal(".fadein-delayed", { delay: "200" }, 150);
sr.reveal(".fadein-delayed", { delay: "200" }, 500);
sr.reveal(".fadein-left", { origin: "left", distance: "100%", duration: "1000", delay: "500" });
sr.reveal(".fadein-right", { origin: "right", distance: "100%", duration: "1000", delay: "500" });