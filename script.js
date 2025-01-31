/*const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
DownloadBtn = wrapper.querySelector(".form .btn download")
qrImg = wrapper.querySelector(".QR-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    //console.log(qrValue);
    if(!qrValue) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
    wrapper.classList.add("active");
});

DownloadBtn.addEventListener("click", async () => {
    const response = await fetch(qrImg.src);
    const bolb = await response.bolb();
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(bolb);
    downloadLink.download = "qrcode.jpg";
    downloadLink.click();
});*/
const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".form input"),
  generateBtn = wrapper.querySelector(".form #generate"),
  downloadBtn = wrapper.querySelector(".form #download"),
  qrImg = wrapper.querySelector(".QR-code img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return;
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  wrapper.classList.add("active");
});

downloadBtn.addEventListener("click", async () => {
  const response = await fetch(qrImg.src);
  const blob = await response.blob();
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "qrcode.jpg";
  downloadLink.click();
});