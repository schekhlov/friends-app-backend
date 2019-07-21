const easyvk = require('easyvk');

const get = async (req, res) => {
  try {
    const vk = await easyvk({
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      session_file: __dirname + '/.my-session'
    });
    const user_id = req.query.user_id || vk.session.user_id;
    let { vkr } = await vk.call('friends.get', {
      user_id: user_id,
      fields: 'nickname,photo_100'
    });
    res.json(vkr);
  } catch (e) {
    console.log('Error: ', e.message);
    res.sendStatus(500);
  }
};

module.exports = get;
