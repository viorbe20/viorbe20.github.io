// Load the navigation bar
// fetch("./templates/nav.html")
//     .then((response) => response.text())
//     .then((html) => {
//         document.getElementById("nav-container").innerHTML = html;
//     })
//     .catch((error) => console.error("Error al cargar el nav:", error));

Promise.all([
    fetch("./templates/nav.html").then((response) => response.text()),
    fetch("./templates/nlp.html").then((response) => response.text()),
    fetch("./templates/machine-learning.html").then((response) => response.text()),
    fetch("./templates/big-data.html").then((response) => response.text()),
    fetch("./templates/daw.html").then((response) => response.text()),
]).then((html) => {
    document.getElementById("nav-container").innerHTML = html[0];
    document.getElementById("nlp-description").innerHTML = html[1];
    document.getElementById("machine-learning-description").innerHTML = html[2];
    document.getElementById("big-data-description").innerHTML = html[3];
    document.getElementById("daw-description").innerHTML = html[4];
}).catch((error) => console.error("Error al cargar el archivo:", error));

