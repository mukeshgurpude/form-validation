import { $, $$, showMessage } from "./message.js";

export type inputProp = {
  regex: RegExp
  help_text: string
}

const inputs: Array<inputProp> = [
  {
    regex: /^[a-z][a-z\d]{2,9}$/,
    help_text: 'username must be between 3 to 10 characters and start with a letter'
  }, // More than 3 characters
  {
    regex: /^[a-z\d][a-z\d\.\_\+]{3,}[a-z\d]@(?:[a-z\d]{2,}\.)+[a-z]{2,}$/,
    help_text: 'Enter a valid email'
  },   // Refer: https://regex101.com/r/g8vfTF/1
  {
    regex: /^(?=.*\d.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$&+,:;=?@#|'<>\^.\-*()%!]).{5,16}$/,
    help_text: 'password must contain an lowercase letter, an uppercase letter, two numbers and a character'
  },  // Refer: https://regex101.com/r/rWXuNU/2
  {
    regex: /^(?=.*\d.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$&+,:;=?@#|'<>\^.\-*()%!]).{5,16}$/,
    help_text: 'password must contain an lowercase letter, an uppercase letter, two numbers and a character'
  }
];

(function () {
  let errors = [false, false, false, false]
  function addError(input: HTMLInputElement, message: string) {
    if (input.type === 'submit') return
    input.classList.add('error');
    (input.nextElementSibling as HTMLSpanElement).textContent = message
  }
  function removeError(input: HTMLInputElement) {
    if (input.type === 'submit') return;
    input.classList.remove('error');
    (input.nextElementSibling as HTMLSpanElement).textContent = ''
  }

  window.addEventListener('DOMContentLoaded',
  function() {
    $('form')?.addEventListener('submit', function (ev) {
      ev.preventDefault()
      for (let index = 0; index < this.elements.length; index++) {
        this.elements[index].dispatchEvent(new Event('blur'))
      }
      if (errors.some(i=>i)) {
        showMessage('Please fill valid values for all inputs');
        (this.elements[errors.indexOf(false)] as HTMLInputElement).focus()
        return false
      }
      location.replace('/homepage.html')
    })

    $$('input').forEach((i, index) => {
      i.addEventListener('blur', function(ev) {
        if (i.type === 'submit') return
        ev.preventDefault()
        i.classList.remove('error')
        const {regex, help_text} = inputs[index]
        if (!regex.test(i.value)) {
          errors[index] = true
          addError(i, help_text)
        }
      })
      i.addEventListener('focus', function(ev) {
        ev.preventDefault();
        errors[index] = false
        removeError(i)
      })
    })
    $('input[name=confirm_password]')?.addEventListener('blur', function (this: HTMLInputElement, ev) {
      ev.preventDefault()
      if (this.value !== ($('input[name=password]') as HTMLInputElement).value) {
        addError(this, 'Passwords didn\'t match')
        errors[3] = true
      }
    })
  })
})()
