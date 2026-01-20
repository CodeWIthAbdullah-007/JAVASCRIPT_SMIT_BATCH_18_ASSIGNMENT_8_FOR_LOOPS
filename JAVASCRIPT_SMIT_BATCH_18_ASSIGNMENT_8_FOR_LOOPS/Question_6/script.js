var N = parseInt(prompt("How many items?"));
var items = [];
for(var i=0;i<N;i++){
    items[i] = prompt("Enter item " + (i+1));
}
alert("Your array: " + items);
