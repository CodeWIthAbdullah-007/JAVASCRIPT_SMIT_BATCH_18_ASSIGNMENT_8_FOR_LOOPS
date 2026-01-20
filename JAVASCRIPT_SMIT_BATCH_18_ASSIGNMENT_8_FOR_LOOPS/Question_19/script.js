var stars = parseInt(prompt("Enter initial number of stars"));
for(var i=stars;i>=1;i--){
    var line="";
    for(var j=1;j<=i;j++){line+="*";}
    alert(line);
}
