import { inputMailEl, inputMessageEl, formEl } from './03-feedback';
import { formData } from './03-feedback';

export default function onFormSubmit() {
  event.preventDefault();
  if (inputMailEl.value.length == 0 || inputMessageEl.value.length == 0) {
    window.alert('All inputs must be filled');
  } else {
    formData[inputMailEl.name] = inputMailEl.value;
    formData[inputMessageEl.name] = inputMessageEl.value;
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formEl.reset();
  }
}
