<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>code barre autorisés</title>
<style>
    .top-left {
        position: absolute;
        top: 0;
        left: 0;
    }

    .top-right {
        position: absolute;
        top: 0;
        right: 0;
    }
</style>
<style>
    div.a {
        text-align: center;
    }
    input
{
  height: 70px;
  width: 430px;
  font-size: 1em;
}
</style>

</head>
<?php
// Connexion à la base de données
$host = "localhost";
$user = "root";
$password = "Vaucanson!";
$BDD = "authentification";

$link = mysqli_connect($host, $user, $password, $BDD);

// Vérification de la connexion
if (!$link) {
    die("Échec de la connexion : " . mysqli_connect_error());
}
?>
<FONT size = "6pt">
<FONT face="arial">
<div class="top-left">
    <form action="modifier_projet.php" method="post">
    <input type="submit" value="Modifier" />
    </form>
    <br>
    Codes barres autorisés : 
    <br>
    <?php
    // Exécution d'une requête SQL pour récupérer des données
    $query = "SELECT code_barre FROM codes_barres_autorises";
    $result = mysqli_query($link, $query);

    // Affichage des données récupérées sur la page web
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo "code barre : " . $row["code_barre"] . "<br>";
        }
    } else {
        echo "Aucun résultat trouvé.";
    }
    ?>
</div>
<div class="top-right">
    <form action="truncate_projet.php" method="post">
    <input type="submit" value="Vider" />
    </form>
    <br>
    Codes barres scannés : 
    <br>
    <?php
    $query = "SELECT code_barre, dat FROM codes_barres_scannes";
    $result = mysqli_query($link, $query);

    // Affichage des données récupérées sur la page web
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo "code barre scanné : " . $row["code_barre"] . "<br>";
            echo "le " . $row["dat"] . "<br>";
        }
    } else {
        echo "Aucun résultat trouvé.";
    }
    // Fermeture de la connexion à la base de données
    mysqli_close($link);
    ?>
</div>
</FONT>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<div class="a">
    <form action="enregistrement_projet.php" method="post">
    <FONT size="15pt">
    <br/>
    <FONT face="arial">Code barre :</FONT>
    <input name="code_barre" type="text" size="13" maxlenght="13" placeholder="nouveau code barre" required autofocus/><br/>
    <br/>
    <br/>
    <input type="submit" value="Envoyer"/><br/>
    </FONT>
    </form>
</div>
</html>