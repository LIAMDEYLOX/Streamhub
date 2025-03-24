<?php

$code_barre = $_POST['code_barre'];

include ('identifiants_projet.php');
/* connexion Ã  la bdd */
$link = mysqli_connect($host,$user,$password,$BDD);
if (!$link)
die('Echec de connexion au serveur de base de données : ' . mysqli_connect_error() . '(' .
mysqli_connect_errno() . ') ');
echo 'base connectée ... <br\>';
/* envoi d'une requÃªte pour un encodage en UTF-8 */
$query= "SET NAMES UTF8";
mysqli_query($link,$query);
echo $code_barre;
$query = "SELECT code_barre FROM codes_barres_autorises";
if ('code_barre' == $code_barre){
    echo "code barre déjà existant";
} else {
    /* envoi d'une requÃªte pour mettre Ã  jour la bdd */
    $query = "INSERT INTO codes_barres_autorises (code_barre) VALUES ('$code_barre')";
mysqli_query($link,$query);
}

/* dÃ©connexion de la bdd */
mysqli_close($link);
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>code barre enregistré</title>
</head>
<FONT size = "6pt">
<FONT face="arial">
<body>
<p>Pour revenir à l'accueil, <a href="index_projet.php">cliquez ici</a></p>
</body>
</html>