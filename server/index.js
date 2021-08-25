const express = require('express')
const app = express()
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}@cluster0.zx7je.mongodb.net/dissertation?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    )
    console.log('connect successfully')
  } catch (error) {
    console.log('connect failed', error.message)
  }
}
connectDB()

const port = process.env.PORT || 8000

routes(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
