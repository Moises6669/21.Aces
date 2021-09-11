let buttom = document.querySelector(".enviar");

buttom.addEventListener("click", (e) => {
  let username = document.querySelector("#username").value;
  e.preventDefault();
  localStorage.setItem("username", username);
  setTimeout(() => ((location.href = "http://127.0.0.1:5500/game.html"), 1000));
});
