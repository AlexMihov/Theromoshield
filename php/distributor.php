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
echo $email_content . "\n";
$email_content .= $nachname . "\n";
echo $email_content . "\n";
$email_content .= "Email: " . $email . "\n";
echo $email_content . "\n";
$email_content .= "Telefon: " . $tel . "\n";
echo $email_content . "\n";
$email_content .= "Şehir: ". $city . "\n";
echo $email_content . "\n";
$email_content .= "Ülke: " . $country . "\n";
echo $email_content . "\n";
$email_content .= "Mesaj:" ."\n".$message;
echo $email_content . "\n";
// send the email
$header = "From:". $email . "\r\n" .
    "Reply-To:". $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();


mail ("serbagrup2012@gmail.com", "Yeni distributör talebi", $email_content, $header);
mail ("hakanersoy.he@gmail.com", "Yeni distributör talebi", $email_content, $header);
// send the user back to the form


header("Location: ../verteiler_werden.html"); exit;
?>