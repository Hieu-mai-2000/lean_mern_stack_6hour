const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const authHeader = req.header('Authorization')
  const token = authHeader && authHeader.split(' ')[1]

  if (!token)
    res.json(401).json({ success: false, message: 'Access token not found' })

  try {
    const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    req.userId = decode.userId
    next()
  } catch (error) {
    console.log('err: ', error.message)
    res.status(403).json({ success: false, message: 'Invalid token' })
  }
}

module.exports = verifyToken
