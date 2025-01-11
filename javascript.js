// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Scroll-triggered animations
    const sections = document.querySelectorAll('section');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('show');
            } else {
                section.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Carbon Footprint Calculator
    const calculatorForm = document.getElementById('carbon-calculator-form');
    const calculatorResult = document.getElementById('calculator-result');

    calculatorForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const usage = parseFloat(document.getElementById('product-usage').value);
        const energyType = document.getElementById('energy-type').value;

        let carbonOutput;
        if (energyType === 'renewable') {
            carbonOutput = usage * 0.1; // Example calculation for renewable energy
        } else {
            carbonOutput = usage * 0.5; // Example calculation for non-renewable energy
        }

        calculatorResult.textContent = `Your carbon footprint is approximately ${carbonOutput.toFixed(2)} kg CO2 per week.`;
    });

    // Contact Form
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Using EmailJS or a similar service to send the email
        emailjs.send('service_6pal99l', 'template_bv7r5m8', {
            name: name,
            email: email,
            message: message
        }, 'AYaDUftUCG0N9fVH8').then(() => {
            alert('Your message has been sent successfully!');
            contactForm.reset();
        }).catch((error) => {
            alert('There was an error sending your message. Please try again later.');
            console.error('EmailJS Error:', error);
        });
    });
});
