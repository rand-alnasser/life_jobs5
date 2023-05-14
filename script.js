document.getElementById('cv-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve form data
    var fullName = document.getElementById('full-name').value;
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var maritalStatus = document.getElementById('marital-status').value;
    
    // Process form data or submit to server
    
    // Reset form after submission
    this.reset();
  });
  function loginWithGoogle() {
    // TODO: Implement login with Google logic
  }
  

  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // TODO: Implement login logic
  });
  