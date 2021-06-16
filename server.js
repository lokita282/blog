const express = require('express')
const mongoose = require('mongoose')
const article = require('./models/article')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()

mongoose.connect(("mongodb+srv://lokita282:abcd1234@cluster0.voagm.mongodb.net/blog?retryWrites=true&w=majority"), {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
  const articles = await article.find().sort({createdAt: 'desc'})
  res.render('articles/index', {articles})
})

app.use('/articles', articleRouter)

app.listen(5000)