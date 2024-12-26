function myLogPassword() {
  var a = document.getElementById("logPassword");
  var b = document.getElementById("eye");
  var c = document.getElementById("eye-slash");

  if (a.type === "password") {
    a.type = "text";
    b.style.opacity = "0";
    c.style.opacity = "1";
  } else {
    a.type = "password";
    b.style.opacity = "1";
    c.style.opacity = "0";
  }
}

function myRegPassword() {
  var d = document.getElementById("regPassword");
  var b = document.getElementById("eye-2");
  var c = document.getElementById("eye-slash-2");

  if (d.type === "password") {
    d.type = "text";
    b.style.opacity = "0";
    c.style.opacity = "1";
  } else {
    d.type = "password";
    b.style.opacity = "1";
    c.style.opacity = "0";
  }
}

function login() {
  var x = document.getElementById("login");
  var y = document.getElementById("register");

  x.style.left = "9px";
  y.style.left = "440px";
}

function register() {
  var x = document.getElementById("login");
  var y = document.getElementById("register");

  x.style.left = "-440px";
  y.style.left = "9px";
}

function signIn() {
  window.location.href = "index.html";
}

function signUp() {
  window.location.href = "login.html";
}
