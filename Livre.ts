export class Livre {
    titre : string;
    auteur:string;
    anneePublication:number;
    disponible:boolean;
    constructor(titre:string,auteur:string,anneePublication:number,disponible:boolean){
        this.titre = titre;
        this.auteur = auteur;
        this.anneePublication = anneePublication;
        this.disponible = disponible;
    };

    //Le Petit Prince par Antoine de Saint-Exupéry, publié en 1943 - Disponible
     toString():string{
        return `${this.titre} par ${this.auteur}, publié en ${this.anneePublication} - ${this.disponible ? "Disponible":"pas disponible"} `;
    }
}