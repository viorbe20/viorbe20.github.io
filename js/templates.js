Promise.all([
    fetch("./templates/nav.html").then((response) => response.text()),
    fetch("./templates/nlp.html").then((response) => response.text()),
    fetch("./templates/machine-learning.html").then((response) => response.text()),
    fetch("./templates/big-data.html").then((response) => response.text()),
    fetch("./templates/daw.html").then((response) => response.text()),
    fetch("./templates/projects-ia.html").then((response) => response.text()),
    fetch("./templates/education-oficial.html").then((response) => response.text())
]).then((html) => {
    document.getElementById("nav-container").innerHTML = html[0];
    document.getElementById("nlp-description").innerHTML = html[1];
    document.getElementById("machine-learning-description").innerHTML = html[2];
    document.getElementById("big-data-description").innerHTML = html[3];
    document.getElementById("daw-description").innerHTML = html[4];
    document.getElementById("projects-cards-ia").innerHTML = html[5];
    document.getElementById("education-oficial-container").innerHTML = html[6];
}).catch((error) => console.error("Error al cargar el archivo:", error));

