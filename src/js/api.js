// ==================== / import modules / ====================

import axios from 'axios';

// ==================== / postComment function / ====================

export async function postComment(email, comment) {
  const params = {
    email,
    comment,
  };

  try {
    const res = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      params
    );
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

// const response = postComment('test@gmail.com', 'Hello!');
// console.log(response);

// ==================== / postComents example / ====================

// import iziToast from 'izitoast';
// import { postComment } from './api';

// const formFooter = document.querySelector('form');
// formFooter.addEventListener('submit', onSubmit);

// async function onSubmit(evt) {
//   evt.preventDefault();

//   const inputEmail = evt.target['email'].value.trim();
//   const inputMessage = evt.target['message'].value.trim();

//   if (inputEmail.length == 0 || inputMessage.length == 0) {
//     iziToast.info({
//       message:
//         'Please add your comment more than 7 characters and enter a valid email.',
//       position: 'topLeft',
//     });
//     return;
//     //   ------------------------------------------
//   } else {
//     try {
//       await postComment(inputEmail, inputMessage);
//       iziToast.info({
//         message: 'Thank you for your comment!)',
//         position: 'topRight',
//       });
//       //   ------------------------------------------
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

// ==================== / getReviews function / ====================

export async function getReviews() {
  try {
    const res = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    return res.data;
  } catch (err) {
    return err;
  }
}

// ==================== / getReviews example / ====================

// import iziToast from 'izitoast';
// import { getReviews } from './api';

// async function dataProces() {
//   try {
//     const response = await getReviews();
//     if (response.length === 0) {
//       iziToast.info({
//         message: 'Sorry, there are no reviews here(',
//         position: 'topRight',
//       });
//     }
//     console.log(response);
//   } catch (error) {
//     iziToast.info({
//       message: `${error} Sorry, there are no reviews here(`,
//       position: 'topRight',
//     });
//   }
// }

// dataProces();
