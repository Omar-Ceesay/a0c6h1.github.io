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
  }
  }
}*/
