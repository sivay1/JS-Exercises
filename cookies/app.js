// Read cookie by key name
// function getCookie(name) {
  
//   const cookies = document.cookie.split("; ");
//   console.log(cookies);
//   for (let c of cookies) {
//     const [key, value] = c.split("=");
//     if (key === name) return value;
//   }
//   console.log("get",cookies);
//   return null;
// }
function getCookie(name) {
  console.log("📦 Raw document.cookie:", document.cookie);

  const cookies = document.cookie.split("; ");
  console.log("🍪 All cookies split into pairs:", cookies);

  for (let c of cookies) {
    console.log("➡️ Checking pair:", c);

    const [key, value] = c.split("=");
    console.log("🔍 Key:", key, "| Value:", value);

    if (key === name) {
      console.log("✅ Match found! Returning:", value);
      return value;
    }
  }

  console.log("❌ No match found. Returning null.");
  return null;
}


// Set cookie
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${d.toUTCString()}; path=/`;
  console.log("set", cookie);
}

// Delete cookie
function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function login() {
  const name = document.getElementById("nameInput").value.trim();
  if (name) {
    setCookie("username", name, 7); // store for 7 days
    showGreeting(name);
  }
}

function logout() {
  deleteCookie("username");
  document.getElementById("greeting").innerText = "Welcome!";
  document.getElementById("loginBox").style.display = "block";
  document.getElementById("logoutBtn").style.display = "none";
}

function showGreeting(name) {
  document.getElementById("greeting").innerText = `Welcome back, ${name}!`;
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("logoutBtn").style.display = "inline-block";
}

// On page load
window.onload = () => {
  const name = getCookie("username");
  if (name) {
    showGreeting(name);
  }
};