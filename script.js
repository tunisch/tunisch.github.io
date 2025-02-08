/* script.js */

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  if(name === '' || email === '' || message === '') {
    formMessage.innerHTML = '<div class="alert alert-danger">Lütfen tüm alanları doldurun.</div>';
  } else {
    formMessage.innerHTML = '<div class="alert alert-success">Mesajınız gönderildi!</div>';
    // Formu sıfırlama
    document.getElementById('contactForm').reset();
  }
});

