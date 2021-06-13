<?php
require_once "firstdb.php";
include ("firstdb.php");
class login extends firstdb{
    public function login($personal_account ,$personal_password){
        if( isset($_POST['personal_account']) && isset($_POST['personal_password'])) {
            $personal_account = $_POST['personal_account'];
            $personal_password = $_POST['personal_password'];
            $sql = "select personal_account from account_data where personal_account = '$personal_account' AND personal_password = '$personal_password'";
            $stmt = $pdo->query($sql);
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            if($row === false){
                echo "Login Incorrect";
            }
            else{
                echo "Login Success";
            }
        }
    }
}
?>
