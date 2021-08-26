const UserModel = require('../modals/User')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password)
    res
      .status(400)
      .json({ success: false, message: 'Missing username or password' })

  try {
    const user = await UserModel.findOne({ username })
    if (user)
      res
        .status(400)
        .json({ success: false, message: 'username already taken' })

    const hashedPassword = await argon2.hash(password)
    const newUser = new UserModel({ username, password: hashedPassword })
    await newUser.save()

    const accessToken = jwt.sign(
      { userId: newUser._id, username: newUser.username },
      process.env.ACCESS_TOKEN_SECRET
    )
    res.json({
      success: true,
      message: 'Register successfully',
      token: accessToken,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' })
  }

  res.json({ login: 'login' })
}

const login = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password)
    res
      .status(400)
      .json({ success: false, message: 'Missing username or password' })

  try {
    const user = await UserModel.findOne({ username })

    if (!user)
      res
        .status(400)
        .json({ success: false, message: 'Incorrect username or password' })

    const hashedPassword = await argon2.verify(user.password, password)

    if (!hashedPassword)
      res
        .status(400)
        .json({ success: false, message: 'Missing username or password' })

    const accessToken = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.ACCESS_TOKEN_SECRET
    )
    res.json({
      success: true,
      message: 'Login successfully',
      token: accessToken,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error:' + error.message,
    })
  }
}

const loadUser = async (req, res) => {

  try {
      const user = await UserModel.findById(req.userId)
      if (!user)
        res.status(400).json({ success: false, message: 'User not found' })
      res.json({
        success: true,
        message: 'user authenticated',
        username: user.username,
      })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      success: false,
      message: 'Internal server error:' + error.message,
    })
  }


}

module.exports = { register, login, loadUser }
