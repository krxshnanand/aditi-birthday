function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === "baby24") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    document.getElementById("error").innerText = "Wrong password 😝";
  }
}

function startSurprise() {
  document.getElementById("surprise").style.display = "block";
  document.getElementById("bgMusic").play();
}

function finalLove() {
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("loveScreen").style.display = "flex";
}