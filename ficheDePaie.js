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

function effacer() {
  let elemResult = new ElementResultat();
  let ids = ['salaireBrutFinal','taxeCalculee', 'assuranceCalculee', 'bonusCalcule', 'salaireNet'];
  for (let i = 0; i < ids.length; i++) {
    elemResult.Tag(ids[i], '');
  }
}