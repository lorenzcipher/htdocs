<?php
// Connect to database
$servername = "localhost";
$username = "postgres";
$password = "mpyulord99";
$dbname = "postgres";
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['nom'];
$prenom = $_POST['prenom'];


$wilaya = $_POST['wilaya'];
$cpass = $_POST['cpass'];
$commune = $_POST['commune'];
$adresse = $_POST['adresse'];
$gender = $_POST['gender'];
$produitutiliser = $_POST['respond'];
$quality = $_POST['rate_1'];
$disponibility = $_POST['rate_2'];
$prix = $_POST['rate_3'];
$conclution = $_POST['rate_4'];
$niveauEtude = $_POST['niveau'];
$travail = $_POST['travail'];
$otherJob = $_POST['otherjob'];
$salaire = $_POST['salaire'];


// Insert data into database
$sql = "INSERT INTO DataTable (nom, prenom,wilaya,commune,telephone,email,gender,produit_vote,quality,disponibility,prix,conclution,niveau_etude,travail,autre_travail,salaire) VALUES ('$name', '$prenom','$wilaya','$cpass','$commune','$adresse','$gender','$produitutiliser','$quality','$disponibility','$prix','$conclution','$niveauEtude','$travail','$otherJob','$salaire')";
if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>