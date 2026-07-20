import mongoose from 'mongoose'

export const connectDB = async () => {
    await mongoose.connect(
        'mongodb+srv://admin:admin@cluster0.qkol8dt.mongodb.net/clientes?appName=Cluster0',
    );

    console.log('Mongo conectado');
}