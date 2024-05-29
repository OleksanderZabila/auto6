const mysql = require('mysql');

 Подключение к базе данных
const connection = mysql.createConnection({
  host 'localhost',
  user 'root',
  password 'password',
  database 'test_journal'
});

 Выполнение запроса к базе данных
const query = 'SELECT  FROM test_log';
connection.query(query, (error, results, fields) = {
  if (error) throw error;
  console.log('Data from test_log table', results);
});

 Закрытие соединения с базой данных
connection.end();