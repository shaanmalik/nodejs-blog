var fs = require('fs');

var express = require('express');
var handlebars = require('handlebars');
var app = express();

var homepage = fs.readFileSync('templates/homepage.hbs').toString();
var homepageTemplate = handlebars.compile(homepage);

app.use(express.static('html-mockup'));

var model =
{
    'blog': {
        'title':'Mah Blog'
    },
    'posts': [
        {
            'date': '2/1/12',
            'title': 'Blog entry #1',
            'content': "Hello world!",
            'tags': ['Funny']
        },
        {
            'date': '2/1/12',
            'title': 'Blog entry #1',
            'content': "Hello world!",
            'tags': ['Funny']
        }
    ]
};

app.get('/', function(req, res) {
    var html = homepageTemplate(model);
    res.send(html);
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
