const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.static('public/img'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use((req, res, next) => {
    console.log(`URL: ${req.url}`);
    next();
})

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/work', (req, res) => {
    res.render('work.ejs')
})

app.get('/about-me', (req, res) => {
    res.render('about-me.ejs')
})

app.get('/skills', (req, res) => {
    res.render('skills.ejs')
})

app.get('/design-system', (req, res) => {
    res.render('design-system.ejs')
})

app.get('/skills', (req, res) => {
    res.render('skills.ejs')
})

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})

app.get('/member/:name', (req, res) => {
    res.end(`Requested member with name: ${req.params.name}`)
})

app.get('*', (req, res, next) => {
    res.status(200).send(`Sorry, requested page not found.`);
    next();
})

app.listen(process.env.PORT || 8000, () => {
    console.log(`Your server is running on ${process.env.PORT}, better go catch it!`)
})