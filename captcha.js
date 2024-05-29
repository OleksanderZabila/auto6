// Функция для генерации случайной строки заданной длины
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Функция для создания капчи на основе canvas
function generateCaptcha() {
    const canvas = document.getElementById('captchaCanvas');
    const ctx = canvas.getContext('2d');
    const captchaText = generateRandomString(6); // Здесь 6 - это длина капчи (можете изменить по вашему усмотрению)
    
    // Очистка canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Установка стилей для текста
    ctx.font = '30px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Рисование текста на canvas
    ctx.fillText(captchaText, canvas.width / 2, canvas.height / 2);
    
    // Возвращаем сгенерированный текст капчи
    return captchaText;
}

// Глобальная переменная для хранения значения капчи
// Глобальная переменная для хранения значения капчи
let captchaText = '';

// Функция для создания капчи на основе canvas
function generateCaptcha() {
    const canvas = document.getElementById('captchaCanvas');
    const ctx = canvas.getContext('2d');
    captchaText = generateRandomString(6); // Здесь 6 - это длина капчи (можете изменить по вашему усмотрению)
    
    // Очистка canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Установка стилей для текста
    ctx.font = '30px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Рисование текста на canvas
    ctx.fillText(captchaText, canvas.width / 2, canvas.height / 2);
}

// Вызов функции при загрузке страницы для отображения капчи
window.onload = function() {
    generateCaptcha(); // Генерация и отображение капчи при загрузке страницы
};

// Функция для проверки капчи
function validateCaptcha() {
    const captchaInput = document.getElementsByName('captcha')[0];
    
    if (captchaInput.value === captchaText) {
        window.location.href = "main_page.html"; // Перенаправление на главную страницу
        return true; // Верная капча
    } else {
        alert('Неправильная капча'); // Неправильная капча
        captchaInput.value = ''; // Очистка поля CAPTCHA
        generateCaptcha(); // Генерация новой капчи
        return false;
    }
}

// Обработчик события отправки формы
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    if (!validateCaptcha()) {
        event.preventDefault(); // Отмена отправки формы, если капча неверна
    }
});
// Функция для проверки CAPTCHA и других данных
// Функция для проверки CAPTCHA и других данных
function validateRegistration() {
    // Здесь ваша проверка CAPTCHA и других данных
    // Проверяем CAPTCHA
    const captchaInput = document.getElementsByName('captcha')[0];
    if (captchaInput.value === captchaText) {
        // Если CAPTCHA верна, выполнить перенаправление
        window.location.href = "register-success.html"; // Перенаправление на страницу register-success.html
    } else {
        // Если CAPTCHA неверна, вывести сообщение об ошибке
        alert('Неправильная капча');
        captchaInput.value = ''; // Очистка поля CAPTCHA
        generateCaptcha(); // Генерация новой капчи
    }
}

// Обработчик события отправки формы регистрации
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы
    validateRegistration(); // Вызываем функцию проверки регистрации
});
