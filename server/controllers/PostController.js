const PostModel = require('../modals/Post')

const getPost = async (req, res) => {
  try {
    const posts = await PostModel.find({ user: req.userId }).populate('user', [
      'username',
    ])
    res.json({ success: true, message: 'get posts success', posts })
  } catch (error) {
    console.log('error->', error.message)
    res.status(500).json('Internal server error', error.message)
  }
}

const createPost = async (req, res) => {
  const { title, description, url, status } = req.body
  if (!title)
    res.status(400).json({ success: false, message: 'Missing input value' })
  try {
    const post = new PostModel({
      title,
      description,
      url: url.startsWith('https://') ? url : `https://${url}`,
      status: status || 'TO LEARNING',
      user: req.userId,
    })

    await post.save()

    res.json({ success: true, message: 'happy learning', post })
  } catch (error) {
    res.status(500).json('Internal server error', error.message)
  }
}

const updatePost = async (req, res) => {
  const { title, description, url, status } = req.body
  if (!title)
    res.status(400).json({ success: false, message: 'Missing input value' })

  try {
    let post = {
      title,
      description,
      url: (url.startsWith('https://') ? url : `https://${url}`) || '',
      status: status || 'TO LEARNING',
    }

    const conditionUpdatePost = { _id: req.params.id, user: req.userId }

    post = await PostModel.findOneAndUpdate(conditionUpdatePost, post, {
      new: true,
    })

    if (!post)
      res.status(401).json({
        success: false,
        message: 'post not found or user not authorized',
      })

    res.json({ success: true, message: 'Excellent progress', post })
  } catch (error) {
    console.log('error->', error.message)
    res.status(500).json('Internal server error')
  }
}

const deletePost = async (req, res) => {
  const conditionDeletePost = { _id: req.params.id, user: req.userId }
  try {
    const post = await PostModel.findOneAndDelete(conditionDeletePost)
    if (!post)
      res.status(401).json({
        success: false,
        message: 'post not found or user not authorized',
      })
    res.json({ success: true, message: 'delete successfully' })
  } catch (error) {
    console.log('error->', error.message)
    res.status(500).json('Internal server error', error.message)
  }
}

module.exports = { getPost, createPost, updatePost, deletePost }
