/* eslint no-return-await:0 */
class UserModel {
  async findUserProfile() {
    // Similar: return await query('select * from user where uid = ?', uid);
    return await {
      name: 'Admin',
      department: '总经理',
      avatar:
        'https://img.alicdn.com/tfs/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png',
      userid: 10001,
    };
  }
}

module.exports = new UserModel();
