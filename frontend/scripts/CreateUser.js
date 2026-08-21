const formTag = document.getElementById("form");
const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

formTag.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Form Submitted");

  const newUser = {
    fullname: fullnameInput.value,
    password: passwordInput.value,
    email: emailInput.value.toLowerCase(),
  };

  console.log(newUser);

  await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  alert("User Created");
});
