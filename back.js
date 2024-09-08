document.addEventListener('DOMContentLoaded', () => {
    const open = document.querySelectorAll('.openModalBtn');
    const modal = document.getElementById('modal');
    const close = document.getElementById('closeModalBtn');

    open.forEach(button => {
        button.addEventListener('click', () => {
            modal.classList.remove('hidden');
        });
    });

    close.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});