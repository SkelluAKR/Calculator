let calculation=JSON.parse(localStorage.getItem('calculation')) || '';
  display();
 
  function calc(value=''){
    calculation+=value;
    display();
    localStorage.setItem('calculation',JSON.stringify(calculation));
  }

  function display(){
    document.querySelector('.js-display')
    .innerHTML=calculation;
  }