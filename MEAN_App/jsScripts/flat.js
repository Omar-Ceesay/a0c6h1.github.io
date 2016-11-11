var fs = require('fs');

/*filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, data){
  if (err) throw err;
  console.log('Reading ' + filename);
  console.log(data);

  const parsedFile = JSON.parse(data);
  console.log(parsedFile);

  const csv = parsedFile.rules.reduce(
    function(per, cur){
      console.log(per, cur);
      return per + JSON.stringify(cur);
    }
)
});*/

function toFlat() {
  var assign, date, Class;
  assign = document.getElementById("assign");
  date = document.getElementById("date");
  Class = document.getElementById("classSelect");
  console.log(assign, Class, date);
  fs.appendFile("c:/Users/A0C6H1/Website2/flatFile.txt", '['+assign+', '+Class+', '+date+']', "utf8", function(err){
    if (err) throw err;
    console.log("FILE SAVED");
  });
}
