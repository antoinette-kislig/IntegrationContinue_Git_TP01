//Permet de gérer les champs de saisie du formulaire
function ElementFormulaire() {
    this.InputCheckbox = function (idInput) {
        let input = document.getElementById(idInput);
        return input.checked;
    };
    this.InputInt = function (idInput) {
        let input = document.getElementById(idInput);
        return parseInt(input.value);
    };
}

//Permet de gérer l'affichage des montants dans les span
function ElementResultat() {
    this.Tag = function (idTag, value) {
        let tag = document.getElementById(idTag);
        if (tag !== null) {
            tag.innerHTML = value;
        }
    };
    this.TagMontant = function (idTag, value) {
        let val = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);
        this.Tag(idTag, val);
    };
}

//Représente les données de la fiche de paie
function FicheDePaie() {
    const PCT_TAXE = 0.12;
    const PCT_ASSURANCE = 0.07;
    const BONUS = 100;
    const ALLOCATION = 150;
    const REDUCTION_IMPOT = 0.02;
    this.salaireBrut;
    this.isBonus;
    this.isAllocation;
    this.allocationCalculee;
    this.persACharge;
    this.getSupplement = function () {
        let supplement = 0;
        if (this.isBonus === true) {
            supplement += BONUS;
        }
        if (this.isAllocation === true) {
            supplement += ALLOCATION;
        }
        return supplement;
    };

    this.getAssurance = function () {
        return this.salaireBrut * PCT_ASSURANCE;
    };
    this.getTaxeCalculee = function () {
        let pctTaxeCalcule = PCT_TAXE;
        if (this.persACharge >= 3) {
            pctTaxeCalcule -= REDUCTION_IMPOT;
        }
        return this.salaireBrut * pctTaxeCalcule;
    };
    this.getSalaireNet = function () {
        return this.salaireBrut - this.getAssurance() - this.getTaxeCalculee() + this.getSupplement();
    };
}

function effacer() {
    let elemResult = new ElementResultat();
    let ids = ['salaireBrutFinal','taxeCalculee', 'assuranceCalculee', 'bonusCalcule', 'salaireNet'];
    for (let i = 0; i < ids.length; i++) {
        elemResult.Tag(ids[i], '');
    }
}