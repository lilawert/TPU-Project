<?php
// Получаем и фильтруем данные из формы
$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
$pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);

// Устанавливаем соединение с базой данных
$mysql = new mysqli('localhost', 'root', 'root', 'register_bd');

// Проверка соединения
if ($mysql->connect_error) {
    die("Connection failed: " . $mysql->connect_error);
}

// Подготавливаем и выполняем SQL-запрос с использованием подготовленного выражения
$stmt = $mysql->prepare("SELECT * FROM users WHERE login = ?");
$stmt->bind_param("s", $login);
$stmt->execute();

// Получаем результат запроса
$result = $stmt->get_result();
$user = $result->fetch_assoc();

// Проверяем, найден ли пользователь и соответствует ли пароль
if ($user && password_verify($pass, $user['pass'])) {
    // Успешная аутентификация
    header('Location: /');
    exit();
} else {
    echo "Пользователь не найден или неверный пароль";
}

// Закрываем подготовленное выражение и соединение с базой данных
$stmt->close();
$mysql->close();
?>
