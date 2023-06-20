const wrapper = document.querySelector(".wrapper"),
    generateBtn = wrapper.querySelector(".form button"),
    qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://steamcommunity.com/id/lilawert/`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});
