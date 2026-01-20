var students = ["Ali","Sami","Taha","Inam"];
var scores = [58,73,89,90];
var table = "";
for(var i=0;i<students.length;i++){
    table += students[i]+" scored "+scores[i]+"\n";
}
alert(table);
