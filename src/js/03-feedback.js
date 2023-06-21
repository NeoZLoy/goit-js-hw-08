import throttle from 'lodash.throttle';
import onFormSubmit from './on-form-submit';
import onFormInput from './on-form-input';
// import formOutput from './form-output';

const inputMailEl = document.querySelector('.feedback-form input');
const inputMessageEl = document.querySelector('.feedback-form textarea');

let formData = {
  [inputMailEl.name]: '',
  [inputMessageEl.name]: '',
};

export { formData };
export { inputMailEl, inputMessageEl, formEl };

const formEl = document.querySelector('.feedback-form');

formOutput();

formEl.addEventListener('submit', onFormSubmit);

formEl.addEventListener('input', throttle(onFormInput, 1000));

function formOutput() {
  const savedForm = localStorage.getItem('feedback-form-state');

  const parsedForm = JSON.parse(savedForm);

  if (parsedForm) {
    formData = parsedForm;

    inputMailEl.value = parsedForm.email || '';

    inputMessageEl.value = parsedForm.message || '';
  }
}
