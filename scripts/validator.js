import { $, $$, showMessage } from "./message.js";
var inputs = [
    {
        regex: /^[a-z][a-z\d]{2,9}$/,
        help_text: 'username must be between 3 to 10 characters and start with a letter'
    },
    {
        regex: /^[a-z\d][a-z\d\.\_\+]{3,}[a-z\d]@(?:[a-z\d]{2,}\.)+[a-z]{2,}$/,
        help_text: 'Enter a valid email'
    },
    {
        regex: /^(?=.*\d.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$&+,:;=?@#|'<>\^.\-*()%!]).{5,16}$/,
        help_text: 'password must contain an lowercase letter, an uppercase letter, two numbers and a character'
    },
    {
        regex: /^(?=.*\d.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$&+,:;=?@#|'<>\^.\-*()%!]).{5,16}$/,
        help_text: 'password must contain an lowercase letter, an uppercase letter, two numbers and a character'
    }
];
(function () {
    var errors = [false, false, false, false];
    function addError(input, message) {
        if (input.type === 'submit')
            return;
        input.classList.add('error');
        input.nextElementSibling.textContent = message;
    }
    function removeError(input) {
        if (input.type === 'submit')
            return;
        input.classList.remove('error');
        input.nextElementSibling.textContent = '';
    }
    window.addEventListener('DOMContentLoaded', function () {
        var _a, _b;
        (_a = $('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (ev) {
            ev.preventDefault();
            for (var index = 0; index < this.elements.length; index++) {
                this.elements[index].dispatchEvent(new Event('blur'));
            }
            if (errors.some(function (i) { return i; })) {
                showMessage('Please fill valid values for all inputs');
                this.elements[errors.indexOf(false)].focus();
                return false;
            }
            location.replace('/homepage.html');
        });
        $$('input').forEach(function (i, index) {
            i.addEventListener('blur', function (ev) {
                if (i.type === 'submit')
                    return;
                ev.preventDefault();
                i.classList.remove('error');
                var _a = inputs[index], regex = _a.regex, help_text = _a.help_text;
                if (!regex.test(i.value)) {
                    errors[index] = true;
                    addError(i, help_text);
                }
            });
            i.addEventListener('focus', function (ev) {
                ev.preventDefault();
                errors[index] = false;
                removeError(i);
            });
        });
        (_b = $('input[name=confirm_password]')) === null || _b === void 0 ? void 0 : _b.addEventListener('blur', function (ev) {
            ev.preventDefault();
            if (this.value !== $('input[name=password]').value) {
                addError(this, 'Passwords didn\'t match');
                errors[3] = true;
            }
        });
    });
})();
//# sourceMappingURL=validator.js.map