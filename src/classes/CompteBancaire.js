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

compte1 = new CompteBancaire("Ficello", 1200);
compte1.depot(200);
compte1.retrait(33,33);
compte1.affiche();