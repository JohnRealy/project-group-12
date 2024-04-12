import axios from 'axios';
import iziToast from 'izitoast';

export async function postComment(email, comment) {
  const post = { email, comment };
  try {
    const res = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      post
    );
    return res.data;
  } catch (err) {
    iziToast.info({
      message: 'Please, add comment more 7 symbols and input valid email.',
      position: 'topLeft',
    });
  }
}
