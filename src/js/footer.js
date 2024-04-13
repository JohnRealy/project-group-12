// import {postComment} from './api'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const refs = {
    formFooter: document.querySelector('.js_form_footer'),
    closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    
  };



refs.formFooter.addEventListener('submit', onSubmit);

function onSubmit(evt) {
     evt.preventDefault();
    const inputEmail = evt.target.elements.email.value.trim();
    const inputMessage = evt.target.elements.message.value.trim()
   
    
    if (inputEmail.length == 0 || inputMessage.length == 0) {
        console.log('input filds');
         iziToast.info({
            position: "topRight",
            message: "INPUT SEARCH"
        })
        return
    } else {
        console.log(inputEmail);
        console.log(inputMessage);
        // postComment();
        modal();
        refs.formFooter.reset();
    }
}
// =====================================================
function modal(){

    toggleModal();
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    }
    refs.modal.addEventListener('click', toggleModal);
     refs.closeModalBtn.addEventListener("click", toggleModal);
}