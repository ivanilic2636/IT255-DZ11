<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token ,Authorization, Token, token, TOKEN');
include("functions.php");
if(isset($_POST['ime']) && isset($_POST['prezime']) && isset($_POST['bolid'])){
$ime = $_POST['ime'];
$prezime = intval($_POST['prezime']);
$bolid = intval($_POST['bolid']);
echo addVozac($ime,$prezime,$bolid);
}
?>