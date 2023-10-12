class CompteBancaire{
    
    _nom = "Dupont";
    _solde = 1000;

    constructor(nom, solde){
        this._nom = nom;
        this._solde = solde;
    }

    depot(somme){
        this._solde += somme;
    }

    retrait(somme){
        this._solde -= somme;
    }

    affiche(){
        const message = "Le solde du compte bancaire de " + this._nom + " est de: " + this._solde;
        //console.log(message);
        return message;
    }

}