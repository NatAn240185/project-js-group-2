'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';
    const workTogetherInput = document.querySelector('.wt-input');
    const workTogetherTextArea = document.querySelector('.wt-textarea');
    const workTogetherForm = document.querySelector('.wt-form');
    const workTogetherBtn = document.querySelector('.wt-button');
    const validIcon = document.getElementById('email-valid-icon');
    
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Invalid email, try again';
    errorMessage.style.color = '#E74A3B';
    errorMessage.style.display = 'none';
    errorMessage.classList.add('error-message');
    workTogetherInput.insertAdjacentElement('afterend', errorMessage);

//Функція валідації пошти
    function validateEmail() {
        const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!emailPattern.test(workTogetherInput.value)) {
            workTogetherInput.classList.add('invalid-mail');
            validIcon.style.display = 'none';
            errorMessage.style.display = 'block';
            return false;}
        else {
            workTogetherInput.classList.remove('invalid-mail');
            validIcon.style.display = 'inline';
            errorMessage.style.display = 'none';
            return true;
        }
    }
    
    workTogetherInput.addEventListener('blur', validateEmail);
   
    // Відправка форми
    workTogetherForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!validateEmail()) {
            alert('Please enter a valid email address');
            return;
        }
    // Збір даних з форми
        const data = {
            email: workTogetherInput.value,
            comment: workTogetherTextArea.value || '',
        };
       
        console.log(data);

        // Fetch
        fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {throw new Error('Something went wrong on the server');}
            })
            .then(data => {
                console.log(data);
                openModal();
                workTogetherForm.reset();
                validIcon.style.display = 'none';
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error: ' + error.message + '. Please correct your data and try again.');
            });
    });

//Функія обробки кнопки
    workTogetherBtn.addEventListener('click', function (event) {
        event.preventDefault();
        const isEmailValid = validateEmail();
        const isCommentFilled = workTogetherTextArea.value.trim() !== '';

    if (isEmailValid && isCommentFilled) {
        renderModal();
    } else {alert('Please fill in all required fields correctly.');}
    });
   

//Функція відкриття модального вікна
    function renderModal() {
        const body = document.body;

        const backdrop = document.createElement('div');
        backdrop.classList.add('backdrop');

        const modal = document.createElement('div');
        modal.classList.add('wt-modal');

        const closeModalBtn = document.createElement('button');
        closeModalBtn.classList.add('modal-close-btn');
        closeModalBtn.setAttribute('type', 'button');

        const closeIcon = document.createElement('svg');
        closeIcon.classList.add('modal-close-icon');
        closeIcon.innerHTML = `<use href="../img/work_together_icons.svg#icon-wt_modal_x-2"></use>`;

        closeModalBtn.appendChild(closeIcon);
        modal.appendChild(closeModalBtn);

        const title = document.createElement('h2');
        title.classList.add('wt-modal-title');
        title.textContent = "Thank you for your interest in cooperation!";

        const text = document.createElement('p');
        text.classList.add('wt-modal-text');
        text.textContent = "The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.";

        modal.appendChild(title);
        modal.appendChild(text);
        backdrop.appendChild(modal);
        body.appendChild(backdrop);
        
        function closeModal() {body.removeChild(backdrop); }

        closeModalBtn.addEventListener('click', closeModal);
        //Функція закриття модального вікна після натискання на backdrop або esc
            
        backdrop.addEventListener('click', function (event) {
            if (event.target === backdrop) {
                body.removeChild(backdrop);
                closeModal();
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                closeModal();
                body.removeChild(backdrop);
            }
        });
    }
})
