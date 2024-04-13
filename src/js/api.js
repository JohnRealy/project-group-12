// ==================== / import modules / ====================

import axios from 'axios';

// ==================== / postComment function / ====================

export async function postComment(email, comment) {
  const params = {
    email,
    comment,
  };

  try {
      const res = await axios.post('https://portfolio-js.b.goit.study/api/requests', params);
      console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}