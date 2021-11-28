export var $ = document.querySelector.bind(document);
export var $$ = document.querySelectorAll.bind(document);
export function showMessage(msg, tag) {
    if (msg === void 0) { msg = 'Test'; }
    if (tag === void 0) { tag = 'error'; }
    var msgContainer = $('#messages');
    var messageBox = document.createElement('div');
    var message = document.createElement('p');
    message.textContent = msg;
    messageBox.classList.add(tag);
    messageBox.setAttribute('title', 'click to dismiss');
    messageBox.appendChild(message);
    messageBox.addEventListener('click', dismiss);
    msgContainer === null || msgContainer === void 0 ? void 0 : msgContainer.appendChild(messageBox);
    setTimeout(function () {
        messageBox.dispatchEvent(new Event('click'));
    }, 5000);
}
function dismiss() {
    var _a;
    (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this);
}
if (!$('#messages')) {
    var msgContainer = document.createElement('aside');
    msgContainer.setAttribute('id', 'messages');
    document.body.appendChild(msgContainer);
}
//# sourceMappingURL=message.js.map