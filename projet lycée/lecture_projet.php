<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>lecture de la table authentification</title>
</head>
<body>

<?php
include ('identifiants_projet.php');

/* connexion Ã  la bdd */
$link = mysqli_connect($host,$user,$password,$BDD);
if (!$link)
	die('Echec de connexion au serveur de base de donnÃ©es : ' .
	mysqli_connect_error() . '(' . mysqli_connect_errno() . ') ');
echo 'base connectÃ©e ... <br/>';

/* envoi d'une requÃªte pour un encodage en UTF-8 */
$query= "SET NAMES UTF8";
mysqli_query($link,$query);

/* envoi d'une requÃªte pour lire la bdd */
$query = "SELECT * FROM codes_barres_authorises ";

// requÃªte SQL
if ($reponse = mysqli_query($link, $query)) 
{
	$nb = mysqli_num_rows($reponse);

	/* nombre de lignes du rÃ©sultat est stockÃ© dans la variable php $ reponse */
	echo 'Nombre de codes barres dans la base : '.$nb.'<br/>';
	if ($nb!=0)
		{
		while($ligne = mysqli_fetch_array($reponse))
			{
			
			$code_barre = $ligne['code_barre'];
			echo $code_barre.' - '.'<br />';
			}
		}

	mysqli_free_result($reponse);
	// libÃ©ration des rÃ©sultats
}
mysqli_close($link);
?>
</body>
</html>