<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Modification</title>
<style>
    .top-right {
        position: absolute;
        top: 0;
        right: 0;
    }
    .top-left {
        position: absolute;
        top: 0;
        left: 0;
    }
    input
{
  height: 70px;
  width: 430px;
  font-size: 1em;
}
</style>
</head>
<FONT size = "6pt">
<FONT face="arial">
<div class="top-right">
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
    mysqli_close($link);
    ?>
</div>
<div class="top-left">
    <form action="modification_projet.php" method="post">
    <!-- <form action="index_projet.php" method="post"> -->
    <FONT size="15pt">
    <FONT face="arial">Ancien code barre :</FONT>
    <input name="ancien_code_barre" type="text" size="13" maxlenght="13" placeholder="entrer ici" required autofocus/><br/>
    <FONT face="arial">Nouveau code barre :</FONT>
    <input name="nouveau_code_barre" type="text" size="13" maxlenght="13" placeholder="entrer ici" required autofocus/><br/>
    <br/>
    <input type="submit" value="Envoyer"/><br/>
    </FONT>
    </form>
</div>
</html>