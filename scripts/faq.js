
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('faqSearch');
    const carousel = document.getElementById('faqCarousel');
    const faqItems = carousel.querySelectorAll('.faq-item');

    if (!searchInput || !carousel) return;

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

        // Optional: specific styling or message when no results found?
        // For now, simple filtering is enough.
    });
});
