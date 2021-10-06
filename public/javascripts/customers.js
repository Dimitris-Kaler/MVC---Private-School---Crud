$(document).ready(function () {
    $("#table-customers").DataTable();
});




let deleteRow = document.getElementsByClassName("deleteRef")
let confirmDel = document.getElementsByClassName("modalConfirm")[0]




/********TO DELETE SPECIFIC ROW WITH MODAL******* */
for (let i in deleteRow) {
    deleteRow[i].onclick = function (event) { confirmDel.href = event.target.href }
}
