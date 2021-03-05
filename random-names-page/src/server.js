const path = require('path');
const express = require('express');
const favicon = require('serve-favicon')
const API = require('./api');
const app = express();
const port = 8000;
        
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'static', 'index.html')));
app.use(express.static('static'));

app.get('/random-name', async (req, res) => {
    try {
        const name = await API.getRandomName();
        console.log(`received ${name} from API`)
        res.send(name);
    } catch(e) {
        console.log(e);
        res.status(500).send(e);
    }
})

app.listen(port, () => {
  console.log(`random-names-page app listening at http://localhost:${port}`)
})