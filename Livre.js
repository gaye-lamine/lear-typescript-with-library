"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livre = void 0;
var Livre = /** @class */ (function () {
    function Livre(titre, auteur, anneePublication, disponible) {
        this.titre = titre;
        this.auteur = auteur;
        this.anneePublication = anneePublication;
        this.disponible = disponible;
    }
    ;
    //Le Petit Prince par Antoine de Saint-Exupéry, publié en 1943 - Disponible
    Livre.prototype.toString = function () {
        return "".concat(this.titre, " par ").concat(this.auteur, ", publi\u00E9 en ").concat(this.anneePublication, " - ").concat(this.disponible ? "Disponible" : "pas disponible", " ");
    };
    return Livre;
}());
exports.Livre = Livre;
