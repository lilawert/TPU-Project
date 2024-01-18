// Получаем необходимые элементы из DOM
const wrapper = document.querySelector(".wrapper"),
    generateBtn = wrapper.querySelector(".form button"),
    qrInput = wrapper.querySelector(".form input"),  // Поле ввода для данных QR-кода
    qrImg = wrapper.querySelector(".qr-code img");

// Переменная для хранения предыдущего значения поля ввода
let preValue;

// Обработчик события при клике на кнопку генерации
generateBtn.addEventListener("click", () => {
    // Генерация URL для QR-кода с использованием значения из поля ввода
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrInput.value.trim()}`;
    
    // Добавление класса "active" после загрузки изображения QR-кода
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
    });
});

// Обработчик события при вводе данных в поле ввода
qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        // Если значение поля ввода пусто, удаляем класс "active" и очищаем preValue
        wrapper.classList.remove("active");
        preValue = "";
    }
    // Дополнительные действия, если необходимо
});
