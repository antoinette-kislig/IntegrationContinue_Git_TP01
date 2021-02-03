//TODO Compléter   
   
     
    function calculerSalaireNet() {
      
    }
     
    function effacer() {
      const elemResult = new ElementResultat();
      const ids = ['salaireBrutFinal','taxeCalculee', 'assuranceCalculee', 'bonusCalcule', 'salaireNet'];
      for (var i = 0; i < ids.length; i++) {
        elemResult.Tag(ids[i], '');
      }
    }