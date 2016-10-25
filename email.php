<?php

$from = $_POST["email"];
$to = "irwin.litvak@gmail.com";
$subject = "New Contact Request";
$message = $_POST["message"];

mail($to, $subject, $message, "From: ".$from);


print "Your message has been Sent.";

?>