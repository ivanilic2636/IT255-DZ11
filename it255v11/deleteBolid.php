<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
include("functions.php");
if(isset($_GET['id_bolida'])){
echo deleteBolid(intval($_GET['id_bolida']));
}
?>