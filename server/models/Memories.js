import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const memorySchema = new Schema({
  userId: {
    type: String,
    required: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: false,
    default: 'Untitled'
  },
  description: {
    type: String,
    required: false,
    default: ''
  },
  imageURL: {
    type: String,
    required: false,
    default: 'https://th.bing.com/th/id/R.696c727d0d311e096c9c0169398c1a23?rik=708yjcJASwyXnw&pid=ImgRaw&r=0'
  },
  memoryDate: {
    type: Date,
    required: false,
    default: Date.now
  },
  shareStatus: {
    type: String,
    required: false,
    enum: ['none', 'restricted', 'all'],
    default: 'none'
  }
}, { timestamps: true });

const Memory = model('Memory', memorySchema);

export default Memory;
