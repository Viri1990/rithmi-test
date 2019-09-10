import express, { Response, Request } from 'express';
import mongoose from 'mongoose';

const app = express();

// Crear conexión con base de datos MongoDB
mongoose.connect('mongodb://db:27017/rithmi', { useNewUrlParser: true, useFindAndModify: true })
  .then(() => console.log('Connection to MongoDB successful'))
  .catch((err: any) => console.log('MongoDB connection error: ', err));

// Habilitar puerto 8000
app.set('port', 8000);

// Ruta de prueba
app.get('/', (req: Request, res: Response) => res.send('Hello World! 👋'));

app.get('/asdf', (req: Request, res: Response) => res.send('First test!'));

var db = mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB connection error'));
// 👇 Puedes configurar tus rutas debajo de esta línea 👇


// Iniciar servidor Express
const server = app.listen(app.get('port'), (): void => {
  console.log('  App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

export default server;
