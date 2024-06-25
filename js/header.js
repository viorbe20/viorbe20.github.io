// Load the navigation bar
fetch("./templates/nav.html")
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("nav-container").innerHTML = html;
    })
    .catch((error) => console.error("Error al cargar el nav:", error));

