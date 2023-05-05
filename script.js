
let form = document.querySelector('form');
        form.addEventListener('submit', function(event) {
          event.preventDefault();
          let age = document.querySelector('#age').value;
          
    const ageMonths = age * 12;
    const ageDays = age * 365;
    monthOutput.innerHTML = 'Age In Months = ' + ageMonths + ' months';
    dayOutput.innerHTML = 'Age In Days = ' + ageDays + ' days';
});