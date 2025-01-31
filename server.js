import app from './src/utils/app.js'; 
import seedDatabase from './seed.js';
const PORT = 3000;


const allowedOrigins = ['https://portfolio-frontend-3sknlz8jx-tomas-projects-e5b3bb3f.vercel.app'];
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