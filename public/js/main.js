// dashboard script: adds a new row to the projects table from the modal form

var form = document.getElementById('projectForm');
var tableBody = document.querySelector('#projectTable tbody');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // read the form values
  var name = document.getElementById('projectName').value;
  var budget = document.getElementById('projectBudget').value || 'Not set';
  var done = document.getElementById('projectDone').value;

  // build the new table row (members cell stays empty)
  var row = document.createElement('tr');
  row.innerHTML =
    '<td></td><td></td><td></td>' +
    '<td><span class="done up">' + done + '%</span>' +
    '<div class="progress"><div class="progress-bar"></div></div></td>';

  // use textContent for user input so it is never read as html
  row.children[0].textContent = name;
  row.children[2].textContent = budget;
  row.querySelector('.progress-bar').style.width = done + '%';
  tableBody.appendChild(row);

  // reset the form and close the modal
  form.reset();
  bootstrap.Modal.getInstance(document.getElementById('projectModal')).hide();
});
