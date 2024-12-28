import express from 'express';
import AuthMiddleware from '../middlewares/authMiddleware.js';
import ProfileController from '../controllers/profileController.js';
import ProfileValidator from '../validators/profileValidator.js';

const router = express.Router();

/**
 * @swagger
 * /api/profiles/me:
 *   get:
 *     summary: Get current user's profile
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.get('/me',
  AuthMiddleware.verifyAccessToken,
  ProfileController.getUserProfile
);

/**
 * @swagger
 * /api/profiles/me:
 *   put:
 *     summary: Update current user's profile
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: User profile updated successfully
 *       500:
 *         description: Internal server error
 */
router.put('/me',
  ProfileValidator.updateProfileRules ,
  AuthMiddleware.verifyAccessToken,
  ProfileController.updateProfileById
);

export default router;
