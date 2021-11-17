let addBtn = document.getElementById('addBtn');
let tableBody = document.getElementById('table-body');
addBtn.addEventListener('click', displayData);

function displayData(e) {

    e.preventDefault()

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;

    let row = document.createElement('tr');
    row.innerHTML = `<td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${email}</td>
                    <td>${age}</td>`;

    tableBody.appendChild(row);
}