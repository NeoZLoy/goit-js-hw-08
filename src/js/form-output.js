import { inputMailEl, inputMessageEl, formEl } from './03-feedback';

export default function formOutput() {
  const savedForm = localStorage.getItem('feedback-form-state');

  const parsedForm = JSON.parse(savedForm);

  if (parsedForm) {
    formData = parsedForm;

    inputMailEl.value = parsedForm.email || '';

    inputMessageEl.value = parsedForm.message || '';
  }
}
