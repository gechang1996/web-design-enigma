<?php
require_once "../lib/enigma.inc.php";
//var_dump($_POST["pressed"]);
$view=new \Enigma\EnigmaView($system);
$controller = new \Enigma\EnigmaController($system,$_POST);


echo $controller->getResult();