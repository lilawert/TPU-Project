<?php
    $login = filter_var(trim($_POST['login']),
    FILTER_SANITIZE_STRING);
    $pass = filter_var(trim($_POST['pass']),
    FILTER_SANITIZE_STRING);

    $mysql = new mysqli('localhost', 'root', 'root', 'register-bd');

    $result = $mysql->query("SELECT * FROM 'users' WHERE 'login' = '$login' AND 'pass' = '$pass'");
    $user = $result->fetch_assoc();
    if(count($user) == 0) {
        echo "Пользователь не найден";
        exit();
    }

    $mysql->close();
    header('Location: /');
?>
