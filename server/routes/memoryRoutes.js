import express from 'express';
import AuthMiddleware from '../middlewares/authMiddleware.js';
import MemoryController from '../controllers/memoryController.js';

const router = express.Router();

/**
 * @swagger
 * /api/memories:
 *   post:
 *     summary: Create a new memory
 *     tags: [Memories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               imageURL:
 *                 type: string
 *               memoryDate:
 *                 type: string
 *                 format: date
 *               shareStatus:
 *                 type: string
 *     responses:
 *       201:
 *         description: Memory created successfully
 *       500:
 *         description: Internal server error
 */
router.post('/memories',
  AuthMiddleware.verifyAccessToken,
  MemoryController.createMemory
);

/**
 * @swagger
 * /api/memories:
 *   get:
 *     summary: Get all memories
 *     tags: [Memories]
 *     responses:
 *       200:
 *         description: Memories retrieved successfully
 *       500:
 *         description: Internal server error
 */
router.get('/memories',
  AuthMiddleware.verifyAccessToken,
  MemoryController.getMemories
);

/**
 * @swagger
 * /api/memories/{memoryId}:
 *   get:
 *     summary: Get a memory by ID
 *     tags: [Memories]
 *     parameters:
 *       - in: path
 *         name: memoryId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Memory retrieved successfully
 *       404:
 *         description: Memory not found
 *       500:
 *         description: Internal server error
 */
router.get('/memories/:memoryId',
  AuthMiddleware.verifyAccessToken,
  MemoryController.getMemoryById
);

/**
 * @swagger
 * /api/memories/{memoryId}:
 *   put:
 *     summary: Update a memory by ID
 *     tags: [Memories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: memoryId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               imageURL:
 *                 type: string
 *               memoryDate:
 *                 type: string
 *                 format: date
 *               shareStatus:
 *                 type: string
 *     responses:
 *       200:
 *         description: Memory updated successfully
 *       404:
 *         description: Memory not found
 *       500:
 *         description: Internal server error
 */
router.put('/memories/:memoryId',
  AuthMiddleware.verifyAccessToken,
  MemoryController.updateMemory
);

/**
 * @swagger
 * /api/memories/{memoryId}:
 *   delete:
 *     summary: Delete a memory by ID
 *     tags: [Memories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: memoryId
 *         required: true
 *         schema:
 *            type: string
 *     responses:
 *       200:
 *         description: Memory deleted successfully
 *       404:
 *         description: Memory not found
 *       500:
 *         description: Internal server error
 */
router.delete('/memories/:memoryId',
  AuthMiddleware.verifyAccessToken,
  MemoryController.deleteMemory
);

export default router;
