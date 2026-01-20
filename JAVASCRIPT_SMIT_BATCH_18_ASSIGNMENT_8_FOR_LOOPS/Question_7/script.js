var counting="", reverse="", even="", odd="", series="";
for(var i=1;i<=15;i++){counting+=i+" ";}
for(var i=10;i>=1;i--){reverse+=i+" ";}
for(var i=0;i<=20;i+=2){even+=i+" ";}
for(var i=1;i<20;i+=2){odd+=i+" ";}
for(var i=2;i<=20;i+=2){series+=i+"k ";}
alert("Counting: "+counting+"\nReverse: "+reverse+"\nEven: "+even+"\nOdd: "+odd+"\nSeries: "+series);
