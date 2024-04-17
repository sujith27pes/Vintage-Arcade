function showDetails(cardNumber) {
    const details = document.getElementById(`details${cardNumber}`);
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
    } else {
        details.classList.add('hidden');
    }
}
