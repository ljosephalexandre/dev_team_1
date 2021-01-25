<<<<<<< HEAD
=======
var liste = new Array();

$('#btn_add').click(function () {

    // Valeur du champ produit
    let produit = $('#produit').val();

    // Nombre d'item de notre liste
    let nbrItem = $('#nbrItem').val();
    let nbrItemSuiv = nbrItem +1;

    console.log('produit : '+produit);
    console.log('nbrItem : '+nbrItem);

    if ($('#produit').attr("value") != "") {
        liste[nbrItem] = produit; 
        nbrItem = liste.length;
        console.log(liste);
        console.log('nbrItem : '+nbrItem);
       
    }
})

console.log(liste);
for (i =0; i < liste.length; i++){
    $('#sortable').append('<li class="itemListe">'+liste[i]+'</li>');
    
}



// $('#btn_basket').click(function(){
//     let legume = localStorage.getItem('legume');
//     let viandes = localStorage.getItem('viande');
//     $('#basket').append('<br>'+legume+'<br>'+viandes);
  
//   })

>>>>>>> b3d72df... ajout dynamique d'élément dans une liste sortable
$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
});

var addList = document.getElementsByClassName("addList");
let newLi = document.createElement('li');


addList.onclick = function() { newLi.textContent = 'li'; };