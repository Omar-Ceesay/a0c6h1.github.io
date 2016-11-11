var path = require('path');
var express = require('express');
var fs = require('fs');
var app = express();
var port = 8080;
app.use('/', express.static(__dirname + '/'));
/*app.use(express.static(path.join(__dirname, 'public')));*/

app.get('*', function(req, res){
  res.send('./.html');
});

app.listen(port);
console.log('Listening on port '+port);

function toFlat() {
  var assign, date, Class;
  assign = document.getElementById("assign");
  data = document.getElementById("date");
  Class = document.getElementById("classSelect");
  console.log('['+assign+', '+Class+', '+data+']');
  fs.appendFile("c:/Users/A0C6H1/Website2/flatFile.txt", '['+assign+', '+Class+', '+data+']', "utf8", function(err){
    if (err) throw err;
    alert("FILE SAVED");
  });
}
