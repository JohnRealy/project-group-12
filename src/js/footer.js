import {postComment} from './api'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const refs = {
    formFooter: document.querySelector('.js_form_footer'),
    closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    elementModal:document.querySelector(".modal")
  };



refs.formFooter.addEventListener('submit', onSubmit);

async function onSubmit(evt) {
     evt.preventDefault();
    const inputEmail = evt.target.elements.email.value.trim();
    const inputMessage = evt.target.elements.message.value.trim()
   
    
    if (inputEmail.length === 0 || inputMessage.length === 0) {
        console.log('input filds');
         iziToast.info({
            position: "topRight",
            message: "INPUT SEARCH"
        })
        return
    } else {
        // console.log(inputEmail);
        // console.log(inputMessage);
        const res = await postComment(inputEmail, inputMessage);
        console.log(res);
        markupModal(res);
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
// ===============================================================
function markupModal(obj) {
   const { title, message } = obj;
    const messageModal = ` <button type="button" class="modal-close-btn" data-modal-close>
            <svg class="modal-icon-close" width="8px" height="8px">
                <use href="../img/icon.svg#icon-close"></use>
            </svg>
        </button>
        <h2 class="modal-title">${title}</h2>
        <p class="modal-text">${message}</p>`;
     
  return refs.elementModal.innerHTML=messageModal;
}


