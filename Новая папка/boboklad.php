<?php
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "blog_db";

// Создаём соединение
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Проверяем соединение
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Получаем IP посетителя
$ip = $_SERVER['REMOTE_ADDR'];

// SQL‑запрос
$sql = "INSERT INTO visitors (ip_address) VALUES ('$ip')";

if (mysqli_query($conn, $sql)) {
    echo "Данные сохранены";
} else {
    echo "Ошибка: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>