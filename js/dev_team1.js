var liste = new Array();

$('#btn_add').click(function () {

    // Valeur du champ produit
    let produit = $('#produit').val();

    // Nombre d'item de notre liste
    let nbrItem = $('#nbrItem').val(); 

    if(nbrItem == ""){
        nbrItem = 0;
    }else{
        nbrItem = $('#nbrItem').val();
    }
    
    // let nbrItemSuiv = nbrItem +1;

    if ($('#produit').attr("value") != "") {
        liste[nbrItem] = produit; 
        $('#nbrItem').val(liste.length); 
        console.log('taille tableau liste : '+liste.length);
        $('#sortable').append('<li class="itemListe">'+liste[nbrItem]+'</li>');
        $('#produit').val('');
    }
    console.log('produit : '+produit);
    console.log('nbrItem : '+$('#nbrItem').val());
    console.log('tableau : '+liste);
})

$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
});
