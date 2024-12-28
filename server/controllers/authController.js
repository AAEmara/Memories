import AuthHelper from '../utils/authHelper.js';
import User from '../models/Users.js';

class AuthController {
  static async registerUser(req, res) {
    try {
      const { firstName, lastName, username, email, password } = req.body;
      const userWithUsername = await AuthHelper.checkUsernameExists(username);

      if (userWithUsername) {
        return res.status(400).json({
          status: 'error',
          message: 'Registration failed',
          error: process.env.NODE_ENV === 'production' ?
            undefined: 'User\'s username already exists'
        });
      }

      const userWithEmail = await AuthHelper.checkEmailExists(email);
      if (userWithEmail) {
        return res.status(400).json({
          status: 'error',
          message: 'Registration failed',
          error: process.env.NODE_ENV === 'production' ?
            undefined: 'User\'s email already exists'
        });
      }

      const hashedPassword = await AuthHelper.hashPassword(password);
      const user = new User({
        firstName, lastName, username, email, password: hashedPassword
      });
      await user.save();

      return res.status(201).json({
        status: 'success',
        data: {},
        message: 'User was registered successfully'
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

  static async loginUser(req, res) {
    try {
      const { identifier, password } = req.body;
      console.log(identifier, password);
      const userWithIdentifier = await AuthHelper.
        checkIdentifierExists(identifier);
      console.log(userWithIdentifier);

      if (!userWithIdentifier) {
        return res.status(400).json({
          status: 'error',
          message: 'Login failed. Check your credentials again.',
          error: process.env.NODE_ENV === 'production' ? 
            undefined : 'Uers\'s identifier does not exist'
        });
      }

      const hashedPassword = userWithIdentifier.password;
      const isAuthentic = await AuthHelper.
        checkHashedPassword(password, hashedPassword);

      if (!isAuthentic) {
        return res.status(400).json({
          status: 'error',
          message: 'Login failed. Check your credentials again.',
          error: process.env.NODE_ENV === 'production' ?
            undefined : 'User\'s password is invalid'
        });
      }

      const accessPayload = {
        userId: userWithIdentifier._id,
        role: userWithIdentifier.role
      };
      const accessToken = AuthHelper.generateAccessToken(accessPayload);

      return res.status(200).json({
        status: 'success',
        data: {
          accessToken
        },
        message: 'User has logged in successfully'
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

export default AuthController;
