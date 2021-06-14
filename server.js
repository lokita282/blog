const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect(("mongodb+srv://lokita282:abcd1234@cluster0.voagm.mongodb.net/blog?retryWrites=true&w=majority"), {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  const articles = [{ 
    title: 'test article',
    createdAt : new Date(),
    description: 'Test description'
  }, {
    title: 'test article 2',
    createdAt : new Date(),
    description: 'Test description 2'
  }]
  res.render('articles/index', {articles})
})

app.use('/articles', articleRouter)

app.listen(5000)