document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    var form = this;
    var subscriptionBtn = document.getElementById('subscriptionBtn');
    subscriptionBtn.innerHTML = '<h5>Sending...</h5>'; // Provide a sending feedback

     // Create an object to hold the form data
     var formDataObj = {};
     (new FormData(form)).forEach(function(value, key){
         formDataObj[key] = value;
     });

    fetch('https://submit-form.com/8p8Mpf70x', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Assuming the endpoint accepts JSON
            'Accept': 'application/json'
        },
        // body: new FormData(form) 
        body: JSON.stringify({
            message: JSON.stringify(formDataObj),
          }),
    })
    .then(response => {
        if (response.ok) {
            subscriptionBtn.innerHTML = '<h5>Submitted</h5>'; // Update the button text
            form.reset(); // Optional: Reset the form fields
        } else {
            subscriptionBtn.innerHTML = '<h5>Send Enquiry</h5>'; // Reset button text if fail
            alert('There was an error. Please try again.'); // Error feedback
        }
    })
    .catch(error => {
        console.error('Error:', error);
        subscriptionBtn.innerHTML = '<h5>Send Enquiry</h5>'; // Reset button text if error
        alert('There was an error. Please try again.'); // Error feedback
    });
});
