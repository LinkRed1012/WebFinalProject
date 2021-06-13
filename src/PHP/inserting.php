<?php
require_once "firstdb.php";
include ("firstdb.php");
class inserting extends firstdb {

    public function inserting( $personal_id ,$personal_account ,$personal_password){
    if(("" == trim($_POST['personal_id'])) || ("" == trim($_POST['personal_account'])) || ("" == trim($_POST['personal_password'])) ){
        echo "register not success";
    }
    else if(isset($_POST['personal_id']) && isset($_POST['personal_account']) && isset($_POST['personal_password'])){
        $sql = "INSERT INTO account_data (personal_id, personal_account, personal_password) values (:personal_id, :personal_account, :personal_password )";//PDO寫法
        $stmt = $pdo->prepare($sql);
        $stmt->execute(array(
            ':personal_id'=>$_POST['personal_id'],
            ':personal_account'=>$_POST['personal_account'],
            ':personal_password'=>$_POST['personal_password'],
        ));
    }

    
}
   

   
    
}


?>
