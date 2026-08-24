const formTag = document.getElementById("form");
const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function getEditUser() {
  let resp = await fetch(`http://localhost:5000/users/${id}`);
  let data = await resp.json();
  console.log(data);
  fullnameInput.value = data.fullname;
  emailInput.value = data.email;
  passwordInput.value = data.password;
}
getEditUser();

formTag.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Form Submitted");

  const updatedUser = {
    fullname: fullnameInput.value,
    password: passwordInput.value,
    email: emailInput.value.toLowerCase(),
  };

  await fetch(`http://localhost:5000/users/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  });

  window.location.href = "Users.html";
  alert("User Updated");
});