const form = document.querySelector('form');
const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const email = document.getElementById('email');
const province = document.getElementById('province');
const subject = document.getElementById('subject');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!firstname.value || !lastname.value || !email.value || !province.value || !subject.value) {
    alert('All fields are required');
    return;
  }

  const data = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    province: province.value,
    subject: subject.value
  };

  fetch('https://example.com/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      alert('Your email was sent successfully');
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('An error has occurred while sending the email, please try again later or contact the administrator.');
      });