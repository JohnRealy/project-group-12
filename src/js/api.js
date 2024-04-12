import axios from 'axios';
import iziToast from 'izitoast';

export async function postComment(email, comment) {
  try {
    await axios.post('https://portfolio-js.b.goit.study/api/requests', {
      params: {
        email,
        comment,
      },
    });
    iziToast.info({
      message: 'Thank you for your comment!)',
      position: 'topRight',
    });
    return;
  } catch (err) {
    iziToast.info({
      message:
        'Please add your comment more than 7 characters and enter a valid email.',
      position: 'topLeft',
    });
  }
}

export async function getReviews() {
  try {
    const res = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    return res;
  } catch (err) {
    iziToast.info({
      message: 'Sorry, there are no reviews here(',
      position: 'topRight',
    });
  }
}
