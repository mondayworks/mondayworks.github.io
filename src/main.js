import "bulma";
import "./main.scss";
import ScrollReveal from "scrollreveal";

window.sr = ScrollReveal();
sr.reveal(".fadein");
sr.reveal(".fadein-left", { origin: "left", distance: "100%", duration: "1000", delay: "500" });
sr.reveal(".fadein-right", { origin: "right", distance: "100%", duration: "1000", delay: "500" });