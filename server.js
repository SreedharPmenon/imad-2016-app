var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var article_one={
   title:'article-one',
   heading:'sreedhar p menon',
   date: '25-09-2016',
   content :`<p>
            fdbfjdjasbcbjbgjfdkkas;dkd;k;df
            ffnlfdsjfnlfdsf;lkdl;kfejg;jf;dkd;
        </p>
        <p>
            jdfdfdflajfjdjhfladkas;jdfjhflkkdfl;kd
            dbfjdjfkldjfdjflksjfklnfkldjf;lkdl;kf
        </p>
        <p>
            sldfdbfjdfdjbfkdbfbdsbfbvdsbfbdkfbdbfkf
            dhbfdbfjdjkfbdbfkjdfbjfnlkbfkjlnfbkb
        </p>`
   
};
function createTemplate(data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;

var htmltemplate=`<html>
    <head>
        <title>
            ${title}
        </title>
        
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
 <body>
   <center>
     <div class="container">
     <a href="/">
         HOME
     </a>  
     <h3>
        ${heading}
     </h3>
     </div>
     <div>
         ${date}
    </div>
    <div>
        ${content}
        
    </div>
  <center>
</body>
    
</html>
    
`;
return htmltemplate;
}
var counter = 0;
app.get('/counter',function(req,res){
   counter=counter+1;
   res.send(counter);
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js',function(req,res){
   res.sendFile(path.join(__dirname,'ui','main.js')); 
});
app.get('/article-one',function(req,res){
    res.send(createTemplate(article_one));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
