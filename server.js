import express from 'express';
import cors from 'cors';
import seedDatabase from './seed.js';
import app from './src/utils/app.js'; 
const PORT = 3000;

const app = express();

const allowedOrigins = ['https://tu-frontend.vercel.app']; // Cambia a tu URL de Vercel
app.use(cors({
origin: allowedOrigins, 
methods: ['GET', 'POST', 'PUT', 'DELETE'], 
allowedHeaders: ['Content-Type', 'Authorization'], 
}));


app.use((req, res, next) => {
next();
});


app.listen(PORT, () => {
console.log(`Servidor corriendo en el puerto ${PORT}`);
});


seedDatabase();
