$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
});

var addList = document.getElementsByClassName("addList");
let newLi = document.createElement('li');


addList.onclick = function() { newLi.textContent = 'li'; };