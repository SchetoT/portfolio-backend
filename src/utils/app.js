import express from 'express';
import cors from 'cors';
import connectToDB from './connect.js';
import projectRoutes from '../routes/projectsRoutes.js';

const app = express();

connectToDB();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
res.send('Servidor funcionando correctamente');
});


app.use("/api/projects", projectRoutes);

export default app;
