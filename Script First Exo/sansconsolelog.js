var fin = process.argv[2];

for(var i=0 ; i < fin; i++)
{
  if  (i%5==0){
    s+="fizz";
}
  if (i%7==0){
    s+="buzz";
}
  if (s == "fizzbuzz"){
    s+="";
}
console.log(i);
}
