<?php
if(isset($_GET["code"])) {
   $code = $_GET["code"]; 
   $ouvert  = 1;

   include ('identifiants_projet.php');
   $dat = date("Y-m-d H:i:s");

   // Create connection
   $conn = new mysqli($host, $user, $password, $BDD);
   // Check connection
   if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
   }

   $code = $conn->real_escape_string($code);
   $query = "INSERT INTO codes_barres_scannes (code_barre, dat) VALUES ('$code', '$dat')";

   /*if ($conn->query($query) === TRUE) {
      echo $code;
   } else {
      echo "Error: " . $query . " => " . $conn->error;
   }*/

   $query = "SELECT code_barre FROM codes_barres_autorises";
   $result = mysqli_query($conn, $query);

   $is_authorized = false;
   while ($row = mysqli_fetch_assoc($result)) {
       if ($code == $row["code_barre"]) {
           $is_authorized = true;
           break;
       }
   }

   if ($is_authorized) {
       echo "autorised";
   } else {
       echo "declined";
   }

   $conn->close();
} else {
   echo "error";
}
?>