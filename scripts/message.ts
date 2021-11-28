export const $ = document.querySelector.bind(document)
export const $$ = document.querySelectorAll.bind(document)

/**
 * Show a message in the top right corner of the screen.
 * @param {string} msg The message to show.
 * @param {'error'|'success'} tag The tag to use for the message.
 */
export function showMessage(msg: string='Test', tag: 'error' | 'success'='error') {
  const msgContainer = $('#messages')
  const messageBox = document.createElement('div')
  const message = document.createElement('p')
  message.textContent = msg
  messageBox.classList.add(tag)
  messageBox.setAttribute('title', 'click to dismiss')
  messageBox.appendChild(message)
  messageBox.addEventListener('click', dismiss)
  msgContainer?.appendChild(messageBox)
  setTimeout(() => {
    messageBox.dispatchEvent(new Event('click'))
  }, 5000)
}

/**
 * Dismiss a message.
 */
function dismiss(this: HTMLElement) {
  this.parentElement?.removeChild(this)
}

if (!$('#messages')) {
  const msgContainer = document.createElement('aside')
  msgContainer.setAttribute('id', 'messages')
  document.body.appendChild(msgContainer)
}
