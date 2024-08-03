import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

const errorMsg = delay =>
  iziToast.show({
    backgroundColor: '#F15858',
    message: `❌ Rejected promise in ${delay}ms`,
    messageColor: '#FAFAFB',
    messageSize: '16px',
    position: 'topCenter',
  });
  
  const correctMsg = delay =>
    iziToast.show({
      backgroundColor: '#59A10D',
      message: `✅ Fulfilled promise in ${delay}ms`,
      messageColor: '#FAFAFB',
      messageSize: '16px',
      position: 'topCenter',
    });
  
  form.addEventListener('submit', evt => {
    evt.preventDefault();
    const delay = form.elements.delay.value;
    const state = form.elements.state.value;
    const makePromise = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (state === 'fulfilled') {
            resolve();
          } else if (state === 'rejected') {
            reject();
          }
        }, delay);
      });
    };
    makePromise()
      .then(value => correctMsg(delay))
      .catch(error => errorMsg(delay));
  });
  