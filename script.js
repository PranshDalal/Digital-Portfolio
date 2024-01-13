document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    for (let [name, value] of formData) {
        console.log(`${name}: ${value}`);
    }
});
