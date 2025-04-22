document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('bio-modal');
    const openBtn = document.getElementById('read-more-btn');
    const closeBtn = document.querySelector('.close');
    const modalContent = document.querySelector('.modal-content');

    openBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        modalContent.focus();
        document.body.classList.add('modal-open');
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
});
