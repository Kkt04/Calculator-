let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      try {
        string = eval(string);
        document.querySelector('.input').value = string;
      } catch {
        document.querySelector('.input').value = "Error";
      }
    } else if (e.target.innerHTML === 'C') {
      string = "";
      document.querySelector('.input').value = string;
    } else if (e.target.innerHTML === 'M+' || e.target.innerHTML === 'M-') {
      // Future functionality for memory buttons
    } else {
      string += e.target.innerHTML;
      document.querySelector('.input').value = string;
    }
  });
});