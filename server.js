import app from './src/utils/app.js';
import seedDatabase from './seed.js';
const PORT = 3000;

app.use((req, res, next) => {
next();
});

app.listen(PORT, () => {
console.log(`Servidor corriendo en el puerto ${PORT}`);
});

seedDatabase(); 