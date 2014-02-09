<?php
$name = $_POST["name"];
echo $name;
$vorname = $_POST["vorname"];
echo $vorname;
$email = $_POST["email"];
echo $email;
$tel  = $_POST["tel"];
echo $tel;
$city = $_POST["city"];
echo $city;
$country = $_POST["country"];
echo $country;
$message = $_POST["message"];
echo $message

// write the email content
/*$email_content = "Isim: " . $name;
$email_content .= " ".$nachname."\n";
$email_content .= "Email: " . $email."\n";
$email_content .= "Mesaj:" ."\n".$message;
// send the email
$header = "From:". $email . "\r\n" .
    "Reply-To:". $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
mail ("serbagrup2012@gmail.com", "Ben yeni mailim", $email_content, $header);
mail ("hakanersoy.he@gmail.com", "Ben yeni mailim", $email_content, $header);
// send the user back to the form



header("Location: ../contact.html")); exit;*/
?>