<?php
//These are the defined authentication environment in the db service
//
//// The MySQL service named in the docker-compose.yml.
$host = 'mysql8';
//
//// Database use name
$user = 'mom';
//
////database user password
$pass = 'mom1234';
//
//// check the MySQL connection status
$conn = new mysqli($host, $user, $pass);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected to MySQL server successfully!";
}
?>
