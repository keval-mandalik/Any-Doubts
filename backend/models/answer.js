const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema(
  {
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Questions'
    },
    answer: {
      type: String,
      required: [true, 'Please add a asnwer'],
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
      type:Array,
      default:[]
    },
    createdAt:{
      type:Date,
      default:Date.now()
    }
    }
);

module.exports = mongoose.model('Answers', AnswerSchema);