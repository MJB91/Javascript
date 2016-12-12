var fin = process.argv[2];

for(var i=0 ; i < fin; i++)
{
  if ((i%5==0)&&(i%7==0)){
    fizzbuzz=true;
}
  else if (i%5==0){
    fizz=true;
}
  else if (i%7==0){
    buzz=true;
}
console.log(i);
}
