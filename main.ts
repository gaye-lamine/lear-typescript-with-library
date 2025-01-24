import * as promptSync from 'prompt-sync';
import { Bibliotheque } from './Bibliotheque';
import { Livre } from './Livre';

// Détecter si on est en mode CI
const isCI = process.env.CI === 'true';

function simulateCIBehavior(biblio: Bibliotheque) {
    console.log("Mode CI détecté. Exécution sans interaction utilisateur.");

    // Ajouter des livres de test
    biblio.ajouterLivre(new Livre("Le Petit Prince", "Antoine de Saint-Exupéry", 1943, true));
    biblio.ajouterLivre(new Livre("1984", "George Orwell", 1949, true));

    // Lister les livres
    console.log("Livres dans la bibliothèque :");
    biblio.listerLivres().forEach(livre => console.log(livre.toString()));

    // Rechercher un livre par titre
    console.log("\nRecherche par titre : 'Prince'");
    const resultatsTitre = biblio.rechercherParTitre("Prince");
    if (resultatsTitre.length > 0) {
        console.log("Résultats trouvés :");
        resultatsTitre.forEach(livre => console.log(livre.toString()));
    } else {
        console.log("Aucun livre trouvé.");
    }

    // Supprimer un livre
    console.log("\nSuppression du livre '1984'");
    biblio.supprimerLivre("1984");
    console.log("Livres après suppression :");
    biblio.listerLivres().forEach(livre => console.log(livre.toString()));
}

function main() {
    const biblio = new Bibliotheque();

    if (isCI) {
        // Mode CI : exécuter des actions automatisées
        simulateCIBehavior(biblio);
        return;
    }

    // Mode local : interaction utilisateur
    const prompt = promptSync();

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

        const choix = parseInt(prompt('Entrez votre choix : '), 10);

        switch (choix) {
            case 1:
                const titre = prompt("Entrez le titre du livre : ");
                const auteur = prompt("Entrez l'auteur du livre : ");
                const anneePublication = parseInt(prompt("Entrez l'année de publication : "), 10);
                const disponible = prompt("Est-il disponible (oui/non) ? ").toLowerCase() === 'oui';
                let livre: Livre = new Livre(titre, auteur, anneePublication, disponible);
                biblio.ajouterLivre(livre);
                console.log(`Livre "${titre}" ajouté avec succès !`);
                break;

            case 2:
                const titreRecherche = prompt("Entrez le titre à rechercher : ");
                const resultatsTitre = biblio.rechercherParTitre(titreRecherche);
                if (resultatsTitre.length > 0) {
                    console.log("Résultats trouvés :");
                    resultatsTitre.forEach(livre => console.log(livre.toString()));
                } else {
                    console.log(`Aucun livre trouvé avec le titre "${titreRecherche}".`);
                }
                break;

            case 3:
                const auteurRecherche = prompt("Entrez l'auteur à rechercher : ");
                const resultatsAuteur = biblio.rechercherParAuteur(auteurRecherche);
                if (resultatsAuteur.length > 0) {
                    console.log("Résultats trouvés :");
                    resultatsAuteur.forEach(livre => console.log(livre.toString()));
                } else {
                    console.log(`Aucun livre trouvé pour l'auteur "${auteurRecherche}".`);
                }
                break;

            case 4:
                const titreSupprimer = prompt("Entrez le titre du livre à supprimer : ");
                const success = biblio.supprimerLivre(titreSupprimer);
                if (success) {
                    console.log(`Livre "${titreSupprimer}" supprimé avec succès.`);
                } else {
                    console.log(`Aucun livre trouvé avec le titre "${titreSupprimer}".`);
                }
                break;

            case 5:
                const livres = biblio.listerLivres();
                if (livres.length > 0) {
                    console.log("Liste des livres dans la bibliothèque :");
                    livres.forEach(livre => console.log(livre.toString()));
                } else {
                    console.log("La bibliothèque est vide.");
                }
                break;

            case 6:
                const titreEmprunter = prompt("Entrez le titre du livre à emprunter :");
                const resultat = biblio.emprunterLivre(titreEmprunter);
                if (resultat) {
                    console.log(`Le livre "${titreEmprunter}" est emprunté avec succès.`);
                } else {
                    console.log(`Le livre "${titreEmprunter}" n'est pas disponible.`);
                }
                break;

            case 7:
                const titreRetourner = prompt("Entrez le titre du livre à retourner :");
                const estRetourne = biblio.retournerLivre(titreRetourner);
                if (estRetourne) {
                    console.log(`Le livre "${titreRetourner}" est retourné avec succès.`);
                } else {
                    console.log(`Aucun livre trouvé avec le titre "${titreRetourner}".`);
                }
                break;

            case 8:
                console.log("Merci d'avoir utilisé notre bibliothèque. À bientôt !");
                process.exit(0);
                break;

            default:
                console.log("Choix invalide, veuillez entrer un chiffre entre 1 et 8.");
                break;
        }
    }
}

main();