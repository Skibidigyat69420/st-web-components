
window.initFAQ = () => {
    const searchInput = document.getElementById('faqSearch');
    const carousel = document.getElementById('faqCarousel');
    if (!searchInput || !carousel) return;

    // Prevent duplicate listeners on the same element
    if (searchInput.dataset.faqBound) return;
    searchInput.dataset.faqBound = "true";

    const faqItems = carousel.querySelectorAll('.faq-item');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        faqItems.forEach(item => {
            const question = item.querySelector('h4').textContent.toLowerCase();
            const answer = item.querySelector('p').textContent.toLowerCase();

            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initFAQ);
} else {
    window.initFAQ();
}
