Promise.all([
    fetch("./templates/nav.html").then((response) => response.text()),
]).then((html) => {
    document.getElementById("nav-container").innerHTML = html[0];
}).catch((error) => console.error("Error loading file:", error));

