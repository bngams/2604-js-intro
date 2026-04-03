// ⚠️ Vite : on importe le CSS directement dans le JS 
import "./style.css";

// charger datatables.net
import DataTable from 'datatables.net-dt'; 


document.addEventListener("DOMContentLoaded", () => { 
  // populateTable();
  fetchUsers();
}); 


async function fetchUsers() {
  // Requete
  const response = await fetch("https://dummyjson.com/users"); 
  const data = await response.json();
  console.log("Données récupérées :", data);
  // data is like { limit: ..., total: ..., users: [...], .. }
  // TODO : data.users est un tableau d'utilisateurs

  // Construire le tableau DataTable à partir de data.users
  const usersDataTable = [];
  data.users.forEach( (user) => {
      // addRow with each user data
      usersDataTable.push([user.firstName, user.lastName, user.email]);
  });
  populateTable(usersDataTable);
}

function populateTable(usersDataTable) {
  const table = new DataTable('table', {
    data: usersDataTable
  });
}
