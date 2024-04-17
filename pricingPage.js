document.addEventListener('DOMContentLoaded', function() {
    const subscribeButtons = document.querySelectorAll('.cta');

    subscribeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const planName = this.closest('.plan').querySelector('h2').innerText;
            const price = this.closest('.plan').querySelector('p').innerText;
            const confirmationMessage = `You are subscribing to the ${planName} for ${price}. Confirm your subscription?`;

            if (confirm(confirmationMessage)) {
                alert('Subscription confirmed! Redirecting to payment page...');
                // Replace "#" with the actual link to your payment or subscription page
                window.location.href = '#';
            } else {
                alert('Subscription canceled.');
            }
        });
    });
});
