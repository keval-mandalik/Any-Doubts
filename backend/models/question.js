const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, 'Please add a question'],
      unique: true,
      trim: true,
      maxlength: [500, 'Question can not be more than 500 characters'],
    },
    questionUrl : String,
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
    answers:{
      type:Array,
      default:[]
    },
    createdAt:{
      type:Date,
      default:Date.now()
    },
    picture: {
      type: String,
  },
    category:{
      type: String,
      default: 'General'
    }
  }
);

module.exports = mongoose.model('Questions', QuestionSchema);