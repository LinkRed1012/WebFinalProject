<?php
class firstdb{
    function connectDB(){
        try{
            $Con = new PDO ("mysql:host=localhost;port=80;dbname=web ,'root','0000'");
            return $Con;
        }catch (PDOExpection $Erro){
            return $Erro->getMessage();
        }
    } 
}

?>

try{
    $pdo=new PDO('mysql:host=localhost;port=80;dbname=account_data','root','0000');
}catch(PDOException $e) {
    die ("Error!: " . $e->getMessage() . "<br/>");
}
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->query("SET NAMES 'UTF8'");
