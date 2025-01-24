"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var Bibliotheque_1 = require("./Bibliotheque");
var Livre_1 = require("./Livre");
var prompt = promptSync();
var biblio = new Bibliotheque_1.Bibliotheque();
while (true) {
    console.log('\nBienvenue dans notre bibliothèque !');
    console.log("1- Ajouter un livre");
    console.log("2- Rechercher un livre par titre");
    console.log("3- Rechercher un livre par auteur");
    console.log("4- Supprimer un livre par titre");
    console.log("5- Lister tous les livres");
    console.log("6- Emprunter un livre par titre");
    console.log("7- Retourner un livre par titre");
    console.log("8- Quitter le programme");
    var choix = parseInt(prompt('Entrez votre choix : '), 10);
    switch (choix) {
        case 1:
            var titre = prompt("Entrez le titre du livre : ");
            var auteur = prompt("Entrez l'auteur du livre : ");
            var anneePublication = parseInt(prompt("Entrez l'année de publication : "), 10);
            var disponible = prompt("Est-il disponible (oui/non) ? ").toLowerCase() === 'oui';
            var livre = new Livre_1.Livre(titre, auteur, anneePublication, disponible);
            biblio.ajouterLivre(livre);
            console.log("Livre \"".concat(titre, "\" ajout\u00E9 avec succ\u00E8s !"));
            break;
        case 2:
            var titreRecherche = prompt("Entrez le titre à rechercher : ");
            var resultatsTitre = biblio.rechercherParTitre(titreRecherche);
            if (resultatsTitre.length > 0) {
                console.log("Résultats trouvés :");
                resultatsTitre.forEach(function (livre) { return console.log(livre.toString()); });
            }
            else {
                console.log("Aucun livre trouv\u00E9 avec le titre \"".concat(titreRecherche, "\"."));
            }
            break;
        case 3:
            var auteurRecherche = prompt("Entrez l'auteur à rechercher : ");
            var resultatsAuteur = biblio.rechercherParAuteur(auteurRecherche);
            if (resultatsAuteur.length > 0) {
                console.log("Résultats trouvés :");
                console.log(resultatsAuteur);
            }
            else {
                console.log("Aucun livre trouv\u00E9 pour l'auteur \"".concat(auteurRecherche, "\"."));
            }
            break;
        case 4:
            var titreSupprimer = prompt("Entrez le titre du livre à supprimer : ");
            var success = biblio.supprimerLivre(titreSupprimer);
            if (success) {
                console.log("Livre \"".concat(titreSupprimer, "\" supprim\u00E9 avec succ\u00E8s."));
            }
            else {
                console.log("Aucun livre trouv\u00E9 avec le titre \"".concat(titreSupprimer, "\"."));
            }
            break;
        case 5:
            var livres = biblio.listerLivres();
            if (livres.length > 0) {
                console.log("Liste des livres dans la bibliothèque :");
                livres.forEach(function (livre) { return console.log(livre.toString()); });
            }
            else {
                console.log("La bibliothèque est vide.");
            }
            break;
        case 6:
            var titreEmprunter = prompt("Entrez le titre du livre à emprunter :");
            var resultat = biblio.emprunterLivre(titreEmprunter);
            if (resultat == true) {
                console.log("le livre ".concat(titreEmprunter, " est emprunt\u00E9 avec succ\u00E9s"));
            }
            else {
                console.log("le livre ".concat(titreEmprunter, " n'est pas  disponible"));
            }
            break;
        case 7:
            var titreRetourner = prompt("Entrez le titre du livre à retourner :");
            var anyLivres = biblio.retournerLivre(titreRetourner);
            if (anyLivres) {
                console.log("le livre ".concat(titreRetourner, " est retourn\u00E9 avec succ\u00E9s"));
            }
            else {
                console.log("Aucun livre trouv\u00E9 avec le titre \"".concat(titreRetourner, "\"."));
            }
            break;
        case 8:
            console.log("Merci d'avoir utilisé notre bibliothèque. À bientôt !");
            process.exit(0);
            break;
        default:
            console.log("Choix invalide, veuillez entrer un chiffre entre 1 et 6.");
            break;
    }
}
