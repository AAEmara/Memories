import { body, validationResult } from 'express-validator';

class AuthValidator {
  static registerUserRules = [
    body('firstName').isString().notEmpty()
      .withMessage('First name is required, and should be a string'),
    body('lastName').isString().notEmpty()
      .withMessage('Last name is required, and should be a string'),
    body('username').isString().notEmpty()
      .withMessage('Username is required, and should be a string'),
    body('email').isEmail()
      .withMessage('Invalid email address'),
    body('password').isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters'),
    AuthValidator.validateRegisterUser
  ];

  static validateRegisterUser(req, res, next) {
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

  static loginUserRules = [
    body('identifier').isString().notEmpty()
      .withMessage('Identifier is required, and should be a string'),
    body('password').isString().notEmpty()
      .withMessage('Password is required, and should be a string'),
    AuthValidator.validateLoginUser
  ];

  static validateLoginUser(req, res, next) {
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

export default AuthValidator;
