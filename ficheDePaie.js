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

function effacer() {
  let elemResult = new ElementResultat();
  let ids = ['salaireBrutFinal','taxeCalculee', 'assuranceCalculee', 'bonusCalcule', 'salaireNet'];
  for (let i = 0; i < ids.length; i++) {
    elemResult.Tag(ids[i], '');
  }
}