fetch('/footer.html')
  .then(response => response.text())
  .then(data => {
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) placeholder.innerHTML = data;
  })
  .catch(error => console.error('Errore nel caricamento del footer:', error));