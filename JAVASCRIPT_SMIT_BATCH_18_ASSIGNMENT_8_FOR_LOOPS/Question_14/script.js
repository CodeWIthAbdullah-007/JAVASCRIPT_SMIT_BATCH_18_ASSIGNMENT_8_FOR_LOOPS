var scores = [12,45,3,22,34,50];
var stop = parseInt(prompt("Enter stop value"));
var output = [];
for(var i=0;i<scores.length;i++){
    output.push(scores[i]);
    if(scores[i]===stop){break;}
}
alert(output);
