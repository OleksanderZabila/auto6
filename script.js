const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Подключение к базе данных
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test_journal'
});

// Парсинг данных формы
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Обработчик POST запроса для записи данных в базу данных
app.post('/log', (req, res) => {
  const data = req.body;
  // Выполнение запроса к базе данных для записи данных
  const query = 'INSERT INTO test_log (action, timestamp) VALUES (?, NOW())';
  connection.query(query, [data.action], (error, results, fields) => {
    if (error) throw error;
    console.log('Data logged successfully');
    res.send('Data logged successfully');
  });
});

// Статические файлы для веб-страницы
app.use(express.static('public'));

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
