const modalClose = document.querySelectorAll('.modal-close');
const modalContainer = document.getElementById('modal-container');

modalClose.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        modalContainer.style.display = 'none';
        modalContainer.innerHTML = ''; // Очищаем содержимое контейнера при закрытии
    });
});

const certificateItems = document.querySelectorAll('.certificate-item img');
certificateItems.forEach(item => {
    item.addEventListener('click', () => {
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const modalCloseButton = document.createElement('span');
        modalCloseButton.classList.add('modal-close');
        modalCloseButton.innerHTML = '&times;';
        modalCloseButton.addEventListener('click', () => {
            modalContainer.style.display = 'none';
            modalContainer.innerHTML = ''; // Очищаем содержимое контейнера при закрытии
        });

        const modalImage = document.createElement('img');
        modalImage.src = item.src;

        modalContent.appendChild(modalCloseButton);
        modalContent.appendChild(modalImage);

        modalContainer.innerHTML = ''; // Очищаем содержимое контейнера перед добавлением нового элемента
        modalContainer.appendChild(modalContent);
        modalContainer.style.display = 'flex';
    });
});
