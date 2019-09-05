<?php
error_reporting(E_ALL);
ini_set('display_errors', true);

require __DIR__ . '/vendor/autoloader.php';

use Src\Router;

session_start();

try{
    $route = new Router;
    require __DIR__ . '/routes/routes.php';
} catch(\Exeption $e){
    echo $e->getMessage();
}
?>