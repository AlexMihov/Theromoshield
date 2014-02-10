<?php
$name = $_POST["name"];
$vorname = $_POST["vorname"];
$email = $_POST["email"];
$tel  = $_POST["tel"];
$city = $_POST["city"];
$country = $_POST["country"];
$message = $_POST["message"];


// write the email content
$email_content = "Isim: " . $name;
$email_content .= $nachname . "\n";
$email_content .= "Email: " . $email . "\n";
$email_content .= "Telefon: " . $tel . "\n";
$email_content .= "Şehir: ". $city . "\n";
$email_content .= "Ülke: " . $country . "\n";
$email_content .= "Mesaj:" ."\n".$message;
// send the email
$header = "From:". $email . "\r\n" .
    "Reply-To:". $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();


mail ("serbagrup2012@gmail.com", "Yeni distributör talebi", $email_content, $header);
mail ("hakanersoy.he@gmail.com", "Yeni distributör talebi", $email_content, $header);
// send the user back to the form


header("Location: ../verteiler_werden.html"); exit;
?>