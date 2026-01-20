var A = [24,53,78,91,12];
var smallest = A[0];
for(var i=1;i<A.length;i++){
    if(A[i]<smallest){
        smallest = A[i];
    }
}
alert("Smallest number: "+smallest);
