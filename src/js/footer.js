const { loadConfigFromFile } = require("vite");

const formFooter = document.querySelector('.js_form_footer');


formFooter.addEventListener('submit', onSubmit);

function onSubmit(evt) {
     evt.preventDefault();
    const inputEmail = evt.target.elements.email.value.trim();
    const inputMessage = evt.target.elements.message.value.trim()
    console.dir(evt);
    
    if (inputEmail.length == 0 || inputMessage.length == 0) {
        console.log('input filds');
        return
    } else {
        console.log(inputEmail);
        console.log(inputMessage);
    }
}