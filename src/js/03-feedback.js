import throttle from 'lodash.throttle';

const form = document.querySelector('form');

const setItemWithDelay = throttle(() => {
    let user = {
        email: form.elements.email.value,
        message: form.elements.message.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(user));
}, 1000)

if (localStorage['feedback-form-state']) {
    let user = JSON.parse(localStorage.getItem('feedback-form-state'));
    form.elements.email.value = user.email;
    form.elements.message.value = user.message;
}

form.addEventListener('input', setItemWithDelay);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
    form.elements.email.value = '';
    form.elements.message.value = '';
})