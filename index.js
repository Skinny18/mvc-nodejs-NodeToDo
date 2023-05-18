const express = require('express');
const exphbs = require('express-handlebars')
const app = express();


const conn = require('./db/conn')
//Definindo porta do Nodejs
const port = 3000;

const Task = require('./models/Task')

const tasksRoutes = require('./routes/taskRoutes')

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.json())
app.use(express.static('public'))


const router = require('./routes/Router')
app.use(router)


conn
.sync()
.then(() => {
    app.listen(port, () => {
        console.log("Servidor rodando na porta:", port)
    })
})
.catch((err) => console.log(err))