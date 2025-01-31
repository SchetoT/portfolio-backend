import express from 'express';
import cors from 'cors';  
import connectToDB from './src/utils/connect.js';
import projectRoutes from './src/routes/projectsRoutes.js';

const app = express();

connectToDB();

app.use(express.json());

const allowedOrigins = ['https://portfolio-frontend-3sknlz8jx-tomas-projects-e5b3bb3f.vercel.app', 'https://portfolio-frontend-nine-alpha.vercel.app']; 
app.use(cors({
origin: allowedOrigins,
methods: ['GET', 'POST', 'PUT', 'DELETE'],
allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.get('/', (req, res) => {
res.send('Servidor funcionando correctamente');
});


app.use("/api/projects", projectRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export default app;
