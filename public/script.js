const API = "http://localhost:5000/api/users";

// Ajouter user
async function addUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
    });

    loadUsers();
}

// Charger users
async function loadUsers() {
    const res = await fetch(API);
    const data = await res.json();

    const list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach(u => {
        list.innerHTML += `<li>${u.name} - ${u.email}</li>`;
    });
}

loadUsers();