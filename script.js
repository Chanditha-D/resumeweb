$(document).ready(function () {
    // Smooth scrolling
    $('a').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800
            );
        }
    });

    // Form validation
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        const name = $('#name').val();
        const email = $('#email').val();
        if (name && email) {
            alert(`Thank you, ${name}, your message has been sent!`);
        } else {
            alert('Please fill in all required fields.');
        }
    });
});
