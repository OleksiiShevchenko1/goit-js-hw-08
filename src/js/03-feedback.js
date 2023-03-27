import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const submitBtn = document.querySelector('button');
// const currentData = {};
// form.addEventListener(
//   'input',
//   throttle(event => {
//     currentData[event.target.name] = event.target.value;
//     localStorage.setItemJSON.stringify(currentDatanp);
//     console.log(event.target.name);
//     console.log(event.target.value);
//   }, 500)
// );

// const currentData = throttle(() => {
//   const saveData = { email: emailInput.value, message: messageInput.value };
//   localStorage.setItem('feedback-form', JSON.stringify(saveData));
// });

// const = () => {
//     cosnt
// }

form.addEventListener('input', throttle(setData, 500));
submitBtn.addEventListener('click', onSubmitClick);

if (localStorage.getItem('feedback-form-state') !== null) {
  const storageData = JSON.parse(localStorage.getItem('feedback-form-state'));
  emailInput.value = storageData.email;
  messageInput.value = storageData.message;
}

function setData(e) {
  const formField = {
    email: `${emailInput.value}`,
    message: `${messageInput.value}`,
  };
  formField[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formField));
}

function onSubmitClick(e) {
  e.preventDefault();
  if (emailInput.value === '' || messageInput.value === '') {
    return alert('Find up the form, please');
  }
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.clear();
  form.reset();
}
