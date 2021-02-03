//TODO Compléter   
   
     
    function calculerSalaireNet() {
      
    }
     
    function effacer() {
      let elemResult = new ElementResultat();
      let ids = ['salaireBrutFinal','taxeCalculee', 'assuranceCalculee', 'bonusCalcule', 'salaireNet'];
      for (let i = 0; i < ids.length; i++) {
        elemResult.Tag(ids[i], '');
      }
    }