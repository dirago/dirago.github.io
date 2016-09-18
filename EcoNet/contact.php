<?php
$e = array();
$e['error'] = "Formulaire non valide";
if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
    $e['email_invalide'] = "email_invalide";
} else {
    $e['error'] = 'ok';
    $name = $_POST['name'];
    $firstname = $_POST['firstname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = "diragor@gmail.com";
    $subject = 'Formulaire de contact Econet'.$email;
    $msg = $message;
    mail($to, $subject, $msg);
}

echo json_encode($e)
?>
