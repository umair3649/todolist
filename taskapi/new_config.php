<?php

			define('T_MYSQL_SERVER',  'localhost');             // MySQL: Server
			define('T_MYSQL_LOGIN',   'root');             // MySQL: Login
			define('T_MYSQL_PASSWORD','');          // MySQL: Password
			define('T_MYSQL_DB_NAME', 'todolist');
			 $dbconnect =mysqli_connect(T_MYSQL_SERVER,T_MYSQL_LOGIN,T_MYSQL_PASSWORD,T_MYSQL_DB_NAME) or die(mysqli_error());
?>