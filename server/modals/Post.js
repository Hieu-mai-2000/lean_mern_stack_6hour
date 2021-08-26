const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    url: {
      type: String,
    },
    status: {
      type: String,
      enum: ['TO LEARNING', 'LEARNING', 'LEARNED'],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user6h',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('post6h', schema)
