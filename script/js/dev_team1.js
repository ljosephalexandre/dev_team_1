$(function () {
    var dialog, form
    var listeCourse = new Array();
    var editable = true;

    // ==================================================
    // Création d'une fenêtre modal de saisi des produits
    // ==================================================
    dialog = $("#dialog-form").dialog({
        autoOpen: false,
        height: 200,
        width: 300,
        modal: true,
        buttons: {
            "OK": function () {
                // Si on clique sur "OK" alors on récupère la valeur saisie dans le champ de la fenêtre modal
                let produit = $('#produitModal').val();
                console.log('produit : '+produit);
                //On appelle la fonction AjouterProduit en lui passant en paramètre la valeur saisie
                // Si cette dernière est définie et différente de chaîne vide
                if(produit !== undefined && produit != ""){
                    ajouterProduit(produit);
                }
                // On ferme la fenêtre modal
                $(this).dialog("close");
            },
            "Annuler": function () {
                dialog.dialog("close");
            }
        }
    });

    // =============================================================
    // Si on clique sur une des div appartenant à la classe item-add
    // =============================================================
    $('.item-add').click(function () {
        // On ouvre la fenêtre modale de saisie de produit
        dialog.dialog( "open" );
    })

    // =======================================
    // Fonction d'ajout d'un nouveau produit
    // =======================================
    function ajouterProduit(produit) {

        console.log('produit toto : '+produit);

        // Nombre d'item de notre liste
        let nbrItem = $('#nbrItem').val();

        if (nbrItem == "") {
            nbrItem = 0;
        } else {
            nbrItem = $('#nbrItem').val();
        }

        listeCourse[nbrItem] = produit;
        $('#produitModal').val('');
        $('#nbrItem').val(listeCourse.length);
        
        affichageListe(listeCourse, editable)
    }
    // ===========================================
    // Fonction d'affichage de la liste de produit
    // ===========================================
    function affichageListe(liste, mode) {

        let item;

        $('#sortable').html('');
        for (i = 0; i < liste.length; i++) {
            item =
                '<li id="'+i+'" class="ui-state-default ui-corner-all item-liste">' +
                '<span class="ui-icon ui-icon-caret-2-n-s"></span>' +
                '<span id="+i+">' + liste[i] + '</span>' +
                '<span class="ui-icon ui-icon-close delete">' +
                '</li>';

            $('#sortable').append(item);
        }
    }

    $("#sortable .delete").click(function() { 
        
    });

    // =======================================
    // Fonction de tri
    // =======================================
    $(function () {
        $("#sortable").sortable();
        $("#sortable").disableSelection();
    });
});


