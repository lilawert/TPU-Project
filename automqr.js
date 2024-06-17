document.addEventListener("DOMContentLoaded", function () {
    // Получаем необходимые элементы из DOM
    const wrapper = document.querySelector(".wrapper");
    const generateBtn = wrapper.querySelector(".form button");
    const qrImg = wrapper.querySelector(".qr-code img");

    // Обработчик события при клике на кнопку генерации
    generateBtn.addEventListener("click", () => {
        // Замените 'sample_data' на реальные данные, которые хотите закодировать
        const data = 'sample_data'; // Замените на реальные данные
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(data)}`;

        // Добавление класса "active" после загрузки изображения QR-кода
        qrImg.addEventListener("load", () => {
            wrapper.classList.add("active");
        });
    });
});
