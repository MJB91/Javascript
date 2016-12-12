var fin = process.argv[2];

for(var i=0 ; i < fin; i++)
{
  if ((i%5==0)&&(i%7==0)){
    console.log("FIZZBUZZ !! ");
}
  else if (i%5==0){
        console.log("FIZZ ! ");
}
  else if (i%7==0){
        console.log("BUZZ ! ");
}
  else {
    console.log(i);
  }
}
