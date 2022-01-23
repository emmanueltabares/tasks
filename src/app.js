import express from 'express';
import { create } from 'express-handlebars';
import indexRouter from './routes/index.routes';
import path from 'path';
import morgan from 'morgan';

const app = express();

//Handlebars
app.set('views', path.join(__dirname, 'views'));
const exphbs = create({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
});
app.engine('hbs', exphbs.engine);
app.set('view engine', 'hbs');

//Middlewares
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Routes
app.use(indexRouter);

export default app;