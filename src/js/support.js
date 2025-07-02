(() => {
  const messageTextarea = document.getElementById('message');
  const errorMsg = document.querySelector('.text-invalid-message');

  if (!messageTextarea || !errorMsg) {
    return;
  }

  const maxLength = Number(messageTextarea.getAttribute('maxlength'));

  const handleInputValidation = () => {
    const currentLength = messageTextarea.value.length;

    if (currentLength >= maxLength) {
      messageTextarea.classList.add('textarea-limit');
      errorMsg.style.display = 'block';
    } else {
      messageTextarea.classList.remove('textarea-limit');
      errorMsg.style.display = 'none';
    }
  };

  messageTextarea.addEventListener('input', handleInputValidation);
})();