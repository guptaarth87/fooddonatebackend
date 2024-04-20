// GET request to fetch all users
fetch('http://localhost:1111/getUsers')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// POST request to sign up a new user
fetch('http://localhost:1111/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'exampleUser',
    email: 'user@example.com',
    password: 'examplePassword',
    city: 'Example City',
    phoneNo: '1234567890',
    address: '123 Example St',
    typeOfUser: 'customer'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

// POST request to log in a user
fetch('http://localhost:1111/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'examplePassword'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

// GET request to fetch all food data
fetch('http://localhost:1111/getfooddata')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// POST request to add food data
// POST request to add food data including image
const formData = new FormData();
formData.append('image', imageFile); // Assuming imageFile is the File object representing the image
formData.append('foodName', 'Example Food');
formData.append('isVeg', true);
formData.append('dateTime', new Date().toISOString());
formData.append('quantity', 10);
formData.append('extraDetail', 'Example detail');

fetch('http://localhost:1111/addfooddata', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
