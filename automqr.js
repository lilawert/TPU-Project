document.addEventListener("DOMContentLoaded", function () {
    // Получаем необходимые элементы из DOM
    const wrapper = document.querySelector(".wrapper");
    const generateBtn = wrapper.querySelector(".form button");
    const qrInput = wrapper.querySelector(".form input");
    const qrImg = wrapper.querySelector(".qr-code img");

    // Переменная для хранения предыдущего значения поля ввода
    let preValue;

    // Обработчик события при клике на кнопку генерации
    generateBtn.addEventListener("click", () => {
        // Режим человеческий когда бд подключена и есть сверка пароля и логина
        // qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(qrInput.value.trim())}`;

        // Режим затычки (просто для показа qr)
        // qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=sample_data`;

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
});
