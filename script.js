
let data = [
    {
      "firstname": "Qurbani",
      "lastname": "Amrakhov",
      "category": "Programming",
      "date": "2023-07-19"
    }
  ];
  

  function crudTable() {
    let tableBody = document.getElementById('tableBody');
  
   
    tableBody.innerHTML = '';
  
    data.forEach(function(item, index) {
   
      let row = document.createElement('tr');
  
    
      let firstnameCell = document.createElement('td');
      firstnameCell.textContent = item.firstname;
      row.appendChild(firstnameCell);
  
      let lastnameCell = document.createElement('td');
      lastnameCell.textContent = item.lastname;
      row.appendChild(lastnameCell);
  
      let categoryCell = document.createElement('td');
      categoryCell.textContent = item.category;
      row.appendChild(categoryCell);
  
      let dateCell = document.createElement('td');
      dateCell.textContent = item.date;
      row.appendChild(dateCell);
  
      let actionCell = document.createElement('td');
      let deleteLink = document.createElement('a');
      deleteLink.classList.add('btn', 'btn-danger');
      deleteLink.href = '#';
      deleteLink.textContent = 'Delete';
  
      
      deleteLink.addEventListener('click', function() {
        deleteItem(index);
      });
  
      actionCell.appendChild(deleteLink);
      row.appendChild(actionCell);
  
 
      tableBody.appendChild(row);
    });
  }
  

  function deleteItem(index) {
    data.splice(index, 1);
    crudTable();
  }
  
  
  crudTable();
  