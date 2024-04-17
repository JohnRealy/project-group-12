import { postComment } from './api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  formFooter: document.querySelector('.js_form_footer'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  elementModal: document.querySelector('.modal'),
};

refs.formFooter.addEventListener('submit', onSubmit);

async function onSubmit(evt) {
  evt.preventDefault();
  const inputEmail = evt.target.elements.email.value.trim();
  const inputMessage = evt.target.elements.message.value.trim();

  if (inputEmail.length === 0 || inputMessage.length === 0) {
    console.log('input filds');
    iziToast.info({
      position: 'topRight',
      message: 'INPUT EMAIL E MESSAGE',
    });
    return;
  } else {
    const res = await postComment(inputEmail, inputMessage);
    console.log(res);
    markupModal(res);
    modal();
  }
}
// =====================================================
function modal() {
  const modal = document.querySelector('[data-modal]');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  refs.formFooter.reset();
  modal.classList.remove('is-hidden');

  modal.addEventListener('click', e => {
    //    refs.formFooter.reset();
    if (e.target === e.currentTarget) {
      addModal();
    }
  });
  closeModalBtn.addEventListener('click', () => addModal());

  function addModal() {
    modal.classList.add('is-hidden');
  }
}
// ===============================================================
function markupModal(obj) {
  const { title, message } = obj;
  const messageModal = `
        <h2 class="modal-title">${title}</h2>
        <p class="modal-text">${message}</p>`;
  refs.elementModal.insertAdjacentHTML('beforeend', messageModal);
}
