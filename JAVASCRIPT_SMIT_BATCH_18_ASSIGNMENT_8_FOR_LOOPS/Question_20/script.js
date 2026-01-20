var lines = parseInt(prompt("Enter number of lines"));

var patternA="";
for(var i=0;i<lines;i++){
    for(var j=0;j<lines;j++){patternA+="*";}
    patternA+="\n";
}
alert("Pattern a:\n"+patternA);

var patternB="";
for(var i=1;i<=lines;i++){
    for(var j=1;j<=i;j++){patternB+="*";}
    patternB+="\n";
}
alert("Pattern b:\n"+patternB);

var patternC="";
for(var i=lines;i>=1;i--){
    for(var j=1;j<=i;j++){patternC+="*";}
    patternC+="\n";
}
alert("Pattern c:\n"+patternC);
