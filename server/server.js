import express from 'express';
import connectDB from './config/db.js';
import morgan from 'morgan';
import setupSwagger from './swagger/swagger.js';
import authRoutes from './routes/authRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import memoryRoutes from './routes/memoryRoutes.js';

connectDB();

const PORT = process.env.PORT;
const app = express();

app.use(morgan('dev'));
app.use(express.json());

setupSwagger(app); // accessed from '/api-docs'
app.use('/api/auth', authRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/', memoryRoutes);

app.listen(PORT, () => {
  console.log(`Server started listening on port: ${PORT}`);
});
