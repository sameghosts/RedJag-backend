// json web token dependency 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const lodash = require('lodash');

const issueToken = async (jwtPayload) => {
  let token = jwt.sign(
    jwtPayload, 
    process.env.JWT_SECRET,
    {expiresIn: '2000m'}
  )
  return `Bearer ${token}`;
}

const serializedUser = (user) => {
  return lodash.pick(user, ['id', 'username', 'email']);
}

// const serializedCollection = (collection) => {
//   return lodash(pick(collection ['id', 'userEmail', 'faveJobs']))
// }

module.exports = { issueToken, serializedUser };