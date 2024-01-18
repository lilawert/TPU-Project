<?php
    // Получаем и фильтруем данные из формы
    $login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
    $pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);

    // Устанавливаем соединение с базой данных
    $mysql = new mysqli('localhost', 'root', 'root', 'register-bd');

    // Проверка соединения
    if ($mysql->connect_error) {
        die("Connection failed: " . $mysql->connect_error);
    }

    // Подготавливаем и выполняем SQL-запрос с использованием подготовленного выражения
    $stmt = $mysql->prepare("SELECT * FROM `users` WHERE `login` = ? AND `pass` = ?");
    $stmt->bind_param("ss", $login, $pass);
    $stmt->execute();

    // Получаем результат запроса
    $result = $stmt->get_result();

    // Извлекаем данные пользователя
    $user = $result->fetch_assoc();

    // Проверяем, найден ли пользователь
    if (!$user) {
        echo "Пользователь не найден";
        exit();
    }

    // Закрываем подготовленное выражение и соединение с базой данных
    $stmt->close();
    $mysql->close();

    // Перенаправляем пользователя на главную страницу
    header('Location: /');
?>
