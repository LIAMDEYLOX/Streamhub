function rediriger(event) {
    event.preventDefault();  // Empêche la soumission immédiate du formulaire

    // Soumettre le formulaire
    document.getElementById('inscription').submit();

    // Rediriger après 1 seconde
    setTimeout(function() {
        window.location.href = "../HTML/connexion.html";
    }, 1000);  // Attendre 1 seconde pour laisser le temps à la soumission de se produire
}