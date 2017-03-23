<?php

// check if token is set, and then if it's not an empty string
if( !isset( $_POST['token'] ) || $_POST['token'] == '' )
    die( json_encode( '1' ) );

// initiate the cURL object
$ch = curl_init();

// Set the URL
curl_setopt( $ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify' );

// Specify to return the data, instead of echo it
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1 );

// POST the data, instead of Getting it
curl_setopt( $ch, CURLOPT_POST, 1 );

// Specify the data fields
curl_setopt( $ch, CURLOPT_POSTFIELDS, array( 'secret' => '6LdemxkUAAAAAGkN8nXB35Rge6GiY7d3KtW575h4', 'response' => $_POST['token'] ) );

// Execute the result, then decode the JSON object returned so we have a PHP array
$result = json_decode( curl_exec( $ch ) );
curl_close( $ch );

// Check if the captcha was successful, if it isn't then don't continue.
if( !$result->success )
    die( json_encode( '1' ) );

$from = $_POST["email"];
$to = "irwin.litvak@gmail.com";
$subject = "New Contact Request";
$message = $_POST["message"];

mail($to, $subject, $message, "From: ".$from);

die( json_encode( '0' ) );

?>