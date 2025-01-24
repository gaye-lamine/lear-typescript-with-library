"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bibliotheque = void 0;
var Bibliotheque = /** @class */ (function () {
    function Bibliotheque() {
        this.livres = [];
    }
    /**
     *
     * @param livre
     * @returns
     */
    Bibliotheque.prototype.ajouterLivre = function (livre) {
        this.livres.push(livre);
        return this.livres;
    };
    /**
     *
     * @param titre
     * @returns
     */
    Bibliotheque.prototype.rechercherParTitre = function (titre) {
        return this.livres.filter(function (li) { return li.titre.toLowerCase().indexOf(titre.toLowerCase()) != -1; });
    };
    /**
     * @param string
     * @returns
    */
    Bibliotheque.prototype.rechercherParAuteur = function (auteur) {
        return this.livres.filter(function (li) { return li.auteur.toLowerCase().indexOf(auteur.toLowerCase()) != -1; });
    };
    /**
     *
     *@param string
     * @returns
    */
    Bibliotheque.prototype.supprimerLivre = function (titre) {
        this.livres = this.livres.filter(function (livre) { return livre.titre.toLowerCase() !== titre.toLowerCase(); });
        return this.livres;
    };
    Bibliotheque.prototype.listerLivres = function () {
        return this.livres;
    };
    /**
     * @param string
     * @returns
    */
    Bibliotheque.prototype.emprunterLivre = function (titre) {
        var empruntPossible = false;
        this.livres = this.livres.map(function (li) {
            if (li.titre === titre) {
                if (li.disponible) {
                    li.disponible = false;
                    empruntPossible = true;
                }
            }
            return li;
        });
        return empruntPossible;
    };
    Bibliotheque.prototype.retournerLivre = function (titre) {
        var estRetourne = false;
        this.livres = this.livres.map(function (li) {
            if (li.titre === titre) {
                if (li.disponible == false) {
                    li.disponible = true;
                    estRetourne = true;
                }
            }
            return li;
        });
        return estRetourne;
    };
    return Bibliotheque;
}());
exports.Bibliotheque = Bibliotheque;
