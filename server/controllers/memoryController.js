import Memory from '../models/Memories.js';

class MemoryController {
  static async createMemory(req, res) {
    const { userId } = req.user;
    const {
      title,
      description,
      imageURL,
      memoryDate,
      shareStatus
    } = req.body;

    try {
      const memoryObject = new Memory({
        userId, title, description, imageURL, memoryDate, shareStatus
      });
      await memoryObject.save();

      const memory = {
        _id: memoryObject._id,
        userId: memoryObject.userId,
        title: memoryObject.title,
        description: memoryObject.description,
        imageURL: memoryObject.imageURL,
        memoryDate: memoryObject.memoryDate,
        shareStatus: memoryObject.shareStatus };

      return res.status(201).json({
        status: 'success',
        data: { memory },
        message: 'Memory was created successfully'
      });
    } catch(error) {
      return res.status(500).json({
        status: 'error',
        message: 'An unexpected error occurred. Please try again later.',
        error: process.env.NODE_ENV === 'production' ?
          undefined : error.message
      });
    }
  }

  static async getMemories(req, res) {
    const { userId } = req.user
    try {
      const userMemories = await Memory.find({ userId })
        .select('-__v').exec();
      if (!userMemories) {
        return res.status(404).json({
          status: 'error',
          message: 'User\'s Memories were not found',
          error: process.env.NODE_ENV === 'production' ?
            undefined : error.message
        });
      }

      return res.status(200).json({
        status: 'success',
        data: { userMemories },
        message: 'User\'s Memories were found successfully'
      });
    } catch(error) {
      return res.status(500).json({
        status: 'error',
        message: 'An unexpected error occurred. Please try again later.',
        error: process.env.NODE_ENV === 'production' ?
          undefined : error.message
      });
    }
  }

  static async getMemoryById(req, res) {
    try {
      const { memoryId } = req.params;

      const memory = await Memory.findById(memoryId)
        .select('-__v');
      if (!memory) {
        return res.status(404).json({
          status: 'error',
          message: 'Memory not found',
          error: process.env.NODE_ENV === 'production' ?
            undefined : 'Memory was not found based on the given ID'
        });
      }

      return res.status(200).json({
        status: 'success',
        data: { memory },
        message: 'Memory found and returned successfully'
      });
    } catch(error) {
      return res.status(500).json({
        status: 'error',
        message: 'An unexpected error occurred. Please try again later.',
        error: process.env.NODE_ENV === 'production' ?
          undefined : error.message
      });
    }
  }

  static async deleteMemory(req, res) {
    const { memoryId } = req.params;
    try {
      const deletedMemory = await Memory.findByIdAndDelete(memoryId);
      if (!deletedMemory) {
        return res.status(404).json({
          status: 'error',
          message: 'Memory not found',
          error: process.env.NODE_ENV === 'production' ?
            undefined : 'Memory was not found based on the given id'
        });
      }

      return res.status(200).json({
        status: 'success',
        data: { },
        message: 'Memory deleted successfully'
      });
    } catch(error) {
      return res.status(500).json({
        status: 'error',
        message: 'An unexpected error occurred. Please try again later.',
        error: process.env.NODE_ENV === 'production' ?
          undefined : error.message
      });
    }
  }

  static async updateMemory(req, res) {
    const { memoryId } = req.params;
    const {
      title,
      description,
      imageURL,
      memoryDate,
      shareStatus
    } = req.body;

    try {
      const updatedMemory = await Memory.findByIdAndUpdate(
        memoryId,
        { title, description, imageURL, memoryDate, shareStatus },
        { new: true, runValidators: true }
      ).select('-__v');
      if (!updatedMemory) {
        return res.status(404).json({
          status: 'error',
          message: 'Memory not found',
          error: process.env.NODE_ENV === 'production' ?
            undefined : 'Memory was not found based on the given id'
        });
      }

      return res.status(200).json({
        status: 'success',
        data: { updatedMemory },
        message: 'Memory was updated successfully'
      });
    } catch(error) {
      return res.status(500).json({
        status: 'error',
        message: 'An unexpected error occurred. Please try again later.',
        error: process.env.NODE_ENV === 'production' ?
          undefined : error.message
      });
    }
  }
}

export default MemoryController;
