let calculation = localStorage.getItem('calculation') || '';

    if (calculation) {
      document.querySelector('.display').innerHTML = calculation;
    }
      
    function updateCalculation(num) {
      calculation += num;
      document.querySelector('.display').innerHTML = calculation;
      localStorage.setItem('calculation', calculation);
    }