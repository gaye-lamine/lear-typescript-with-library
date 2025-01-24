import { Livre } from "./Livre";

export class Bibliotheque {
    livres: Array<Livre> = [];

    /**
     * 
     * @param livre 
     * @returns 
     */
    ajouterLivre(livre: Livre): Array<Livre> {
        this.livres.push(livre);
        return this.livres;
    }

    /**
     * 
     * @param titre
     * @returns
     */
    rechercherParTitre(titre: string): Array<Livre> {
        return this.livres.filter(li => li.titre.toLowerCase().indexOf(titre.toLowerCase()) != -1);
    }

    /**
     * @param string
     * @returns
    */
    rechercherParAuteur(auteur: string): Array<Livre> {
        return this.livres.filter(li => li.auteur.toLowerCase().indexOf(auteur.toLowerCase()) != -1);
    }
    /**
     * 
     *@param string
     * @returns
    */
    supprimerLivre(titre: string): Array<Livre> {
        this.livres = this.livres.filter(livre => livre.titre.toLowerCase() !== titre.toLowerCase());
        return this.livres;
    }

    listerLivres(): Array<Livre> {
        return this.livres;
    }

    /**
     * @param string
     * @returns
    */
    emprunterLivre(titre: string): boolean {
        let empruntPossible = false;
        this.livres = this.livres.map(li => {
            if (li.titre === titre) {
                if (li.disponible) {
                    li.disponible = false;
                    empruntPossible = true;
                }
            }
            return li;
        });
        return empruntPossible;
    }

    retournerLivre(titre:string):boolean {
        let estRetourne = false;
         this.livres = this.livres.map(li => {
            if (li.titre === titre) {
                if (li.disponible==false) {
                    li.disponible = true;
                    estRetourne = true
                }

            }
            return li;
        })
        return estRetourne;
    }

}



