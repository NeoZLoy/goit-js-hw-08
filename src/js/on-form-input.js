import { formData } from './03-feedback';

export default function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
