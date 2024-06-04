import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27018/proyectoFinal');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB: ', error);
  }
}