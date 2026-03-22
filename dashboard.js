const username = localStorage.getItem("username");

console.log("Got:", username);

if (username) {
  document.getElementById("welcome").innerText =
    `Welcome, ${username} 👋`;
} else {
  window.location.href = "index.html";
}