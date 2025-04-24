document.getElementById('booking-form').addEventListener('submit', function(event) {
   event.preventDefault();

   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const date = document.getElementById('date').value;
   const message = document.getElementById('message').value;

   if (name && email && date) {
       alert('Booking submitted successfully!\n' +
           'Name: ' + name + '\n' +
           'Email: ' + email + '\n' +
           'Date: ' + date + '\n' +
           'Message: ' + message);
   } else {
       alert('Please fill in all required fields.');
   }
});
