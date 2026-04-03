// ⚠️ Vite : on importe le CSS directement dans le JS 
import "./style.css";

// Collection d'utilisateurs par défaut 
const users = [
  { firstname: "Alice", lastname: "Smith", email: "alice.smith@example.com" }, 
  { firstname: "Bob", lastname: "Johnson", email: "bob.johnson@example.com" },
  { firstname: "Charlie", lastname: "Brown", email: "charlie.brown@example.com" },
];

document.addEventListener("DOMContentLoaded", () => { 
  // populateTable();
  fetchUsers();
}); 

document.querySelector("#add-row").addEventListener("click", (event) => {
  const firstname = document.querySelector("#firstname").value;
  const lastname = document.querySelector("#lastname").value;
  const email = document.querySelector("#email").value;
  addRow(firstname, lastname, email);
});

function populateTable() {

  users.forEach( (user) => {
    addRow(user.firstname, user.lastname, user.email);
  });

} 

async function fetchUsers() {
  try {
    const response = await fetch("https://dummyjson.com/users"); 
    console.log("Réponse HTTP :", response);
    if(response.ok === false) {
      throw new Error('HTTP error! status: '  + response.status);
    }
    
    const data = await response.json();
    
    console.log("Données récupérées :", data);
    // data is like { limit: ..., total: ..., users: [...], .. }
    // TODO : data.users est un tableau d'utilisateurs

    data.users.forEach( (user) => {
        // addRow with each user data
        addRow(user.firstName, user.lastName, user.email);
    });

  } catch (error) { 
    console.error("Erreur lors de la récupération des données :", error); 
  } 
}

function addRow(firstname, lastname, email) { 
  const tableBody = document.querySelector("table tbody"); 
  // TODO : Créer une nouvelle ligne  →  tableBody.insertRow()
  const row = tableBody.insertRow();
  // TODO : Créer 3 cellules         →  row.insertCell() 
  const col1 = row.insertCell();
  const col2 = row.insertCell();
  const col3 = row.insertCell();
  // TODO : Remplir chaque cellule   →  cell.textContent = ... 
  col1.textContent = firstname;
  col2.textContent = lastname;
  col3.textContent = email;
}