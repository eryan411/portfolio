const express = require('express')
const app = express()
const PORT = 8000

app.use((req, res, next) => {
    console.log(`URL: ${req.url}`);
    next();
})

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html')
})

app.get('/member/:name', (req, res) => {
    res.end(`Requested member with name: ${req.params.name}`)
})

app.get('*', (req, res, next) => {
    res.status(200).send(`Sorry, requested page not found.`);
    next();
})

app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}`)
})