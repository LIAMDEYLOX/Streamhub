document.addEventListener("DOMContentLoaded", function () {
    let bouton = document.createElement("button");
    bouton.innerText = "Cliquez-moi";
    bouton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    document.body.appendChild(bouton);
});