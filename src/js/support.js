(() => {
    const messageTextarea = document.getElementById('message');
  
    if (!messageTextarea) {
      return;
    }
  
    const maxLength = messageTextarea.getAttribute('maxlength');
  
    const handleInputValidation = () => {
      const currentLength = messageTextarea.value.length;
  
      if (currentLength >= maxLength) {
        messageTextarea.classList.add('textarea-limit');
      } else {
        messageTextarea.classList.remove('textarea-limit');
      }
    };
  
    messageTextarea.addEventListener('input', handleInputValidation);
  })();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  