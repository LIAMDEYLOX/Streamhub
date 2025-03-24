<?php
$ancien = $_POST['ancien_code_barre'];
$nouveau = $_POST['nouveau_code_barre'];
include ('identifiants_projet.php');
// Connexion à la BDD
$link = mysqli_connect($host, $user, $password, $BDD);
if (!$link) {
    die('Echec de connexion au serveur de base de données : ' . mysqli_connect_error() . ' (' . mysqli_connect_errno() . ')');
}
echo 'Base connectée ... <br>';

// Envoi d'une requête pour un encodage en UTF-8
$query = "SET NAMES UTF8";
if (!mysqli_query($link, $query)) {
    die('Erreur lors de l\'encodage UTF-8 : ' . mysqli_error($link));
}
$query = "SELECT code_barre FROM codes_barres_autorises";
// Modification de tableMODIFY code_barre
$query = "UPDATE codes_barres_autorises SET code_barre = $nouveau WHERE code_barre = $ancien";


// Exécution de la commande 
if (mysqli_query($link, $query)) {
    echo 'Code barre modifier.<br>';
} else {
    die('Erreur lors de la modification du code barre : ' . mysqli_error($link));
}

// Déconnexion
mysqli_close($link);
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Code barre mofifié</title>
</head>
<FONT size = "6pt">
<FONT face="arial">
<body>
<p>Pour revenir à l'accueil, <a href="index_projet.php">cliquez ici</a></p>
</body>
</html>
