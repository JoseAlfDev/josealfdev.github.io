document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_eekyv7p';
    const templateID = 'template_qep7f4x';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Mensaje enviado!');
            document.getElementById('contactForm').reset();
        }, (err) => {
            alert('Ha ocurrido un error: ' + JSON.stringify(err));
        });
});
