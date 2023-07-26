const jwt = require('jsonwebtoken');

const validaToken = (req, res, next) => {
  const token = req.headers.authorization.split('Bearer ')[1];
  if (!token) {
    return res.status(401).json('Unauthorized');
  }
  try {
    const tokenDecoded = jwt.verify(token, process.env.TOKEN_SIGN);
    req.user = tokenDecoded.email;
  } catch (error) {
    return res.status(401).json('Unauthorized');
  }
  return next();
}

module.exports = validaToken;