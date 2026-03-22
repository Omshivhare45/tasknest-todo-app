function login() {
  const name = document.getElementById("username").value;

  if (name === "") {
    alert("Enter your name");
    return;
  }

  // store name
  localStorage.setItem("username", name);

  console.log("saved", name);
  // redirect
  window.location.href = "dashboard.html";
}