<?php
// check for form submission - if it doesn’t exist then send back to contact form
//if (!isset($_POST["save"]) || $_POST["save"] != "contact") {
//    header("Location: contact-form.php"); exit;
//}
// get the posted data
$name = $_POST["name"];
$nachname = $_POST["nachname"];
$email = $_POST["email"];
$message = $_POST["message"];

//check valid email
/*if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/", $email_address))
    $error = "You must enter a valid email address.";
// check that a message was entered
elseif (emptyempty($message))
    $error = "You must enter a message.";
// check if an error was found - if there was, send the user back to the form
if (isset($error)) {
    header("Location: ../contact.html?e=".urlencode($error)); exit;
}*/
// write the email content
$email_content = "Isim: " . $name;
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



header("Location: ../contact.html")); exit;
?>