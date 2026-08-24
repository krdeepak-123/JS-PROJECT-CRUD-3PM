const users_container = document.querySelector(".users-container");
console.log(users_container);

async function getAllUsers() {
  let resp = await fetch("http://localhost:5000/users");
  let data = await resp.json();
  console.log(data); // [{},{},{},....]
  displayUsers(data); // [{},{},{},....]
}

getAllUsers();

function displayUsers(users) {
  console.log(users); // [{},{},{},....]

  users.forEach((ele) => {
    let { id, fullname, email, password } = ele;
    const userCard = document.createElement("div");
    userCard.className = "card";

    userCard.innerHTML = `
    <h3>${fullname}</h3>
    <p>${email}</p>
    <p>${password}</p>
    <button onclick='editUser(${id})' >edit</button>
    <button onclick='deleteUser(${id})' >delete</button>
    `;
    users_container.append(userCard);
  });
}

async function deleteUser(id) {
  await fetch(`http://localhost:5000/users/${id}`, {
    method: "DELETE",
  });
  alert("User Deleted");
}

function editUser(id) {
  window.location.href = `EditUser.html?id=${id}`;
}
// <<<<<<< HEAD
// }
// ===========
// }
// >>>>>>> 08b81f687dbb34acfdf18edf5558fb1bd51c4a5f
