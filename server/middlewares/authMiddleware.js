import jwt from 'jsonwebtoken';

class AuthMiddleware {
  static async verifyAccessToken(req, res, next) {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
      return res.status(400).json({
        status: 'error',
        message: 'Bad request. Please check your request again.',
        error: process.env.NODE_ENV === 'production' ?
          undefined : 'The authorization header is missing'
      });
    }

    const [ tokenHeader, accessToken ] = authHeader.split(' ');

    if (tokenHeader !== 'Bearer' || !accessToken) {
      return res.status(400).json({
        status: 'error',
        message: 'Bad request. Please check your request again.',
        error: process.env.NODE_ENV === 'production' ? undefined :
          'The authorization is not a Bearer type or token is missing'
      });
    }

    try {
      const payload = await new Promise((resolve, reject) => {
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET,
          (err, decoded) => {
            if (err)
              return reject(err);
            resolve(decoded);
          });
      });
      if (!payload || !payload.userId || !payload.role) {
        return res.status(403).json({
          status: 'error',
          message: 'Forbidden access. Authorization denied.',
          error: process.env.NODE_ENV === 'production' ? undefined :
            'Invalid token. Missing values from the token payload.'
        });
      }

      req.user = payload;
      next();
    } catch (error) {
      return res.status(401).json({
        status: 'error',
        message: 'Unauthorized. Invalid token or token expired.',
        error: process.env.NODE_ENV === 'production' ?
          undefined : error.message
      });
    }
  }
}

export default AuthMiddleware;
