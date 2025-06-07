function generateCertificate() {
  const yourName = document.getElementById("yourName").value;
  const loverName = document.getElementById("loverName").value;
  const loveDate = document.getElementById("loveDate").value;

  if (!yourName || !loverName || !loveDate) {
    alert("请填写所有信息！");
    return;
  }

  document.getElementById("certNames").innerText = `${yourName} ❤️ ${loverName}`;
  document.getElementById("certDate").innerText = `我们从 ${loveDate} 起正式在一起啦！`;
  document.getElementById("certificate").classList.remove("hidden");
}

function downloadCertificate() {
  html2canvas(document.querySelector("#certificate")).then(canvas => {
    const link = document.createElement("a");
    link.download = "love_certificate.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
