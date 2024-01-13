document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // You can add your logic to handle the form submission here
    // For example, fetching data with AJAX or sending it to a server
    // For now, let's log the form data to the console
    const formData = new FormData(event.target);
    for (let [name, value] of formData) {
        console.log(`${name}: ${value}`);
    }
});
