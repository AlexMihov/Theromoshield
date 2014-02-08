<?php
// check for form submission - if it doesn’t exist then send back to contact form
if (!isset($_POST["save"]) || $_POST["save"] != "contact") {
    header("Location: contact-form.php"); exit;
}
// get the posted data
$name = $_POST["name"];
$nachname = $_POST["nachname"];
$email = $_POST["email"];
$message = $_POST["message"];

//check valid email
if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/", $email_address))
    $error = "You must enter a valid email address.";
// check that a message was entered
elseif (emptyempty($message))
    $error = "You must enter a message.";
// check if an error was found - if there was, send the user back to the form
if (isset($error)) {
    header("Location: contact-form.php?e=".urlencode($error)); exit;
}
// write the email content
$email_content = "Vorname: ".$name;
$email_content .= " Nachname: ". $nachname:\n
$email_content .= "Email Addresse: " . $email_address\n;
$email_content .= "Nachricht:" . \n\n$message;
// send the email
mail ("alex@mihov.ch", "New Kontact", $email_content);
// send the user back to the form
//header("Location: contact-form.php?s=".urlencode("Thank you for your message.")); exit;
?>