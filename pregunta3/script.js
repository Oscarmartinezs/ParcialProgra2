function logIn() {
    var usuario = document.getElementById("user").value;
    var contrasenia = document.getElementById("passw").value;
    var rol = document.getElementById("rol").value;

    var table = document.getElementsByTagName('table')[0];


    var newRow = table.insertRow(1);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = usuario;
    cell2.innerHTML = contrasenia;
    cell3.innerHTML = rol;

}