const Schema = mongoose.Schema

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    url: String,
    status: {
      type: String,
      enum: ['TO LEARNING', 'LEARNING', 'LEARNED'],
    },
    user:{
      type: Schema.Types.ObjectId,
      ref:'users'
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('post6h', schema)
