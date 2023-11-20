const scriptURL = 'https://script.google.com/macros/s/AKfycbz9ByN2sUXDJBw5yaHRCJh7GYQMRqhT5z9ga-ftUd8W5HL5eeoFuiDeNARGqDLcv-dD/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Seu presente foi indicado com sucesso!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

document.addEventListener("DOMContentLoaded", function() {
  var dropdown = document.getElementById("cores");

  dropdown.addEventListener("change", function() {
      var selectedColor = dropdown.value;
      alert("Você escolheu a cor: " + selectedColor);
  });
});