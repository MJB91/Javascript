var fin = process.argv[2];

for(var i=1 ; i < fin; i++)
{
  if(i%3==0) {
        console.log("Attention ta grand-mère te regarde ! ");
  }
  if(i%5==0){
        console.log("  FIZZ ! ");
        fizzbuzz=true;
  }
  if(i%7==0){
        console.log("   BUZZ ! ");
        fizzbuzz=true;
  }
  console.log(i);
}

//pour executer : node fizzbuzz.js <nombre>
// (variable%5==0) permet de tester si variable est un multiple de 5
// (variable%7==0)------multiple de 7
