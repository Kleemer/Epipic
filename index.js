const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const minify = require('express-minify');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(minify());

var json = require('./mini.json');

app.get('/api/pictures', (req, res) => {
    const { cursor, amount } = req.query;

    if (!amount || (cursor && cursor < 0))
        res.status(404).send("Cursor or amount out of bounds");

    var startId = 0;
    var endId = amount - 1;

    if (cursor) {
        startId = parseInt(cursor) + 1;
        endId = parseInt(cursor) + parseInt(amount);
    }

    res.json(json.slice(startId, endId + 1));
});

app.post('/api/pictures/', (req, res) => {
    let id = json[json.length - 1].index + 1;
    const picture = req.body.picture;
    if (!picture)
        res.status(500).send("Erreur");
    let obj = { index: id, picture: picture };
    json.push(obj);
    res.send('Ok');

});

app.delete('/api/pictures/:id', (req, res) => {
    console.log(req.params.id);
    json.splice(req.params.id - 1, 1);
    res.send('Delete picture id ' + req.params.id);
});

app.listen(4242, () => {
    console.log('Ex app listening on port 4242')
});