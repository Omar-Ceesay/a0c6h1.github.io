(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var date = false;
var dateColor = false;
function searchDate(){
  date = !date;
  dateColor = !dateColor;
  console.log(dateColor);
  console.log("date = "+date);
  /*if(dateColor = true){
    document.getElementById("dateSearch").style.backgroundColor = "#2b427c";
  }else if(dateColor = false){
    document.getElementById("dateSearch").style.backgroundColor = "#b31919";
  }*/
}

function search() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("recent");
  tr = table.getElementsByTagName("tr");
  if(date != true){
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }}else{
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }

var fs = require('fs');

  function toFlat() {
    var assign, date, Class;
    assign = document.getElementById("assign");
    data = document.getElementById("date");
    Class = document.getElementById("classSelect");
    console.log('['+assign+', '+Class+', '+data+']');
    fs.appendFile("c:/Users/A0C6H1/Website2/flatFile.txt", '['+assign+', '+Class+', '+data+']', "utf8", function(err){
      if (err) throw err;
      console.log("FILE SAVED");
    });
  }



/*function newAssignment(){
  var a = document.getElement("a", "td");
  var inputValue = document.getElementById("AssignmentInput").value;
  var t = document.createTextNode(inputValue);
  var tr = document.getElementsByTagName("tr");
  a.appendChild(t);
  if (inputValue === ''){
    alert("Naw");
  }else{
    document.getElementById("recent").appendChild(a);
  }
  document.getElementById("AssignmentInput").value = '';
}*/

},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);
