const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema(
  {
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'question'
    },
    answer: {
      type: String,
      required: [true, 'Please add a question'],
      unique: false,
      trim: true,
    },
    
    PostedBy: {
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email',
      ],
    },
    Upvotes: {
      type: Number
    },
  }
);

module.exports = mongoose.model('answer', AnswerSchema);