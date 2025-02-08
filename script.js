document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('formFeedback');

  if (name === '' || email === '' || message === '') {
    feedback.innerHTML = '<div class="alert alert-danger">Lütfen tüm alanları doldurun!</div>';
  } else {
    feedback.innerHTML = '<div class="alert alert-success">Mesajınız gönderildi, teşekkürler!</div>';
    document.getElementById('contactForm').reset();
  }
});
