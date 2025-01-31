import express from 'express';
import cors from 'cors';  
import connectToDB from './src/utils/connect.js';
import projectRoutes from '../routes/projectsRoutes.js';

const app = express();

connectToDB();

app.use(express.json());

const allowedOrigins = ['https://portfolio-frontend-3sknlz8jx-tomas-projects-e5b3bb3f.vercel.app', 'https://portfolio-frontend-nine-alpha.vercel.app']; // Asegúrate de incluir tu URL de frontend en Vercel
app.use(cors({
origin: allowedOrigins,
methods: ['GET', 'POST', 'PUT', 'DELETE'],
allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.get('/', (req, res) => {
res.send('Servidor funcionando correctamente');
});


app.use("/api/projects", projectRoutes);

export default app;
