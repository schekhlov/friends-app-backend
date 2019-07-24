const easyvk = require('easyvk');

async function getById(userId) {
  try {
    const vk = await easyvk({
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      session_file: __dirname + '/.my-session'
    });
    const user_id = userId || vk.session.user_id;
    let { vkr } = await vk.call('friends.get', {
      user_id: user_id,
      fields: 'nickname,photo_100'
    });
    return vkr;
  } catch (e) {
    console.log('Error: ', e.message);
    return null;
  }
}

module.exports = {
  getById
};