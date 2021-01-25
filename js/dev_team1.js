// Valeur du champ produit
var produit = $('#produit').val();
// Nombre d'item de notre liste
var nbrItem = $('#nbrItem').val();
var nbrItemprec = 0;

console.log(produit);
console.log(nbrItem);

$('#btn_add').click(function () {



    // console.log('produit : ' + produit);

    // if ($('#produit').attr("value") != "") {
    //     localStorage.setItem('legume', legume);
    // }
    // if ($('#viande').attr("value") != "") {
    //     localStorage.setItem('viande', viande);
    // }

})

$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
});
