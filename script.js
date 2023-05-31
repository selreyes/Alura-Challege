const input = document.getElementById("input");
const output = document.getElementById("output");
const convertBtn = document.getElementById("convert");
const copyBtn = document.getElementById("copy");

function encrypt(text) {
  let encryptText = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return encryptText;
}

function decrypt(encryptText) {
  let text = encryptText
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return text;
}

function copyToClipboard() {
  output.select();
  document.execCommand("copy");
}

convertBtn.addEventListener("click", () => {
  let option = document.querySelector("input[name='option']:checked").value;

  if (option === "encrypt") {
    let encryptedText = encrypt(input.value.toLowerCase());
    output.value = encryptedText;
  } else if (option === "decrypt") {
    let decryptedText = decrypt(input.value.toLowerCase());
    output.value = decryptedText;
  }
});

copyBtn.addEventListener("click", copyToClipboard);