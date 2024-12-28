import {
  body,
  validationResult,
  param
} from 'express-validator';

class MemoryValidator {
  static createMemoryRules = [
    body('title').optional().isString()
      .withMessage('Memory\'s title should be a string'),
    body('description').optional().isString()
      .withMessage('Memory\'s description should be a string'),
    body('imageURL').optional().isURL()
      .withMessage('Memory\'s image should be a URL'),
    body('memoryDate').optional().isDate()
      .withMessage('Memory\'s date should be a date'),
    body('shareStatus').optional().isString()
      .withMessage('Memory share status should be a string'),
    MemoryValidator.validateMemory
  ];

  static getMemoryByIdRules = [
    param('memoryId').isMongoId()
      .withMessage('Invalid memory ID'),
    MemoryValidator.validateMemory
  ];

  static updateMemoryRules = [
    param('memoryId').isMongoId()
      .withMessage('Invalid memory ID'),
    body('title').optional().isString()
      .withMessage('Memory\'s title should be a string'),
    body('description').optional().isString()
      .withMessage('Memory\'s description should be a string'),
    body('imageURL').optional().isURL()
      .withMessage('Memory\'s image should be a URL'),
    body('memoryDate').optional().isDate()
      .withMessage('Memory\'s date should be a date'),
    body('shareStatus').optional().isString()
      .withMessage('Memory share status should be a string'),
    MemoryValidator.validateMemory
  ];

  static deleteMemoryRules = [
    param('memoryId').isMongoId()
      .withMessage('Invalid memory ID'),
    MemoryValidator.validateMemory
  ];

  static validateMemory(req, res, next) {
    const result = validationResult(req);
    if (!result.notEmpty()) {
      return res.status(400).json({
        status: 'error',
        message: 'Validation Error occurred. Please check your request.',
        error: process.env.NODE_ENV === 'production' ?
          undefined : result.array()
      });
    }

    next();
  }
}

export default MemoryValidator;
