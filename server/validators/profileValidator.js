import { body, validationResult } from 'express-validator';

class ProfileValidator {
  static updateProfileRules = [
    body('firstName').optional().isString()
      .withMessage('First name must be a string'),
    body('lastName').optional().isString()
      .withMessage('Last name must be a string'),
    body('username').optional().isString()
      .withMessage('Username must be a string'),
    body('email').optional().isEmail()
      .withMessage('Invalid email address'),
    ProfileValidator.validateUpdateProfile
  ];

  static validateUpdateProfile(req, res, next) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        message: 'Validation error occurred. Please check your request.',
        error: process.env.NODE_ENV === 'production' ?
          undefined : result.array()
      });
    }

    next();
  }
}

export default ProfileValidator;
