const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

// Inicia o servidor 
const PORT = process.env.PORT || 8080
app.use(express.json())
app.use('/public', express.static('public'))
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main', extname: 'hbs'
}))

app.set('view engine', '.hbs')

app.get('/', (req, res) => {
  res.status(200).render('home')
})

app.listen(PORT, () => {
  console.log(`App escutando na porta ${PORT}`)
})
