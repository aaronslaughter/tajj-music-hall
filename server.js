const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const AppRouter = require('./routes/AppRouter');
const path = require('path')

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.json({ message: 'Server Works' }));
app.use('/api', AppRouter);
app.use('/auth', AuthRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(app().static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  })
}

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
