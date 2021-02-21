const express = require('express');
const cors = require('cors');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const server = express();
server.use(express.static('public'));
server.use(bodyParser.urlencoded({extended: true}));
server.use(cors());

server.get('/', (req, res) => {
    res.render('home.ejs');
})

server.get('/imageClassifier', (req, res) => {
    
    res.render('imageClassifier.ejs');
})

server.get('/videoClassifier', (req, res) => {
    res.render('videoClassifier.ejs');
})

server.get('/objectDetection', (req, res) => {
    res.render('objectDetection.ejs');
})

server.get('/objDetectVideo', (req,res) => {
    res.render('objDetectVideo.ejs', )
})

server.get('/transferFeature', (req, res) => {
    res.render('transferFeature.ejs');
})

server.get('/transferFeatureReg', (req,res) => {
    res.render('transferFeatureReg.ejs')
})

const PORT = process.env.PORT || 2357;
server.listen( PORT , () => console.log(`http://localhost:${PORT}`))