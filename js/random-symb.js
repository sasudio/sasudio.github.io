
function generateRandomSymbols() {
  let randomSymbols = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const symbolCount = 500; 

  for (let i = 0; i < symbolCount; i++) {
    randomSymbols += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  document.getElementById("random-block").innerText = randomSymbols;
  document.getElementById("random-block-buttom").innerText = randomSymbols;
}

setInterval(generateRandomSymbols, 500); 
