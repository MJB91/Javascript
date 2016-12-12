//Ecrire une fonction qui donne la factorielle du nombre donné en paramètre.

//PS : une factorielle (aussi écrite n!) est la multiplication de tous les nombres entre 1 et n.

//Exemples :

//    0! = 1
//    1! = 1
//    2! = 1 × 2 = 2
//    3! = 1 × 2 × 3 = 6
//    4! = 1 × 2 × 3 × 4 = 24
//    10! = 3628800

//________________________________________________________________________________________________


/*

    0! = 1
    1! = 1
    2! = 2 * 1! = 2 * 1
    3! = 3 * 2! = 3 * 2 * 1
    4! = 4 * 3! = 4 * 3 * 2 * 1
    10! = 10 * 9

---

fact(0) = 1
fact (1) = 1 * fact(0)
fact(10) = 10 * fact(9)

---

fact(n) = n * fact(n-1)
fact(0) =  1

---

 function fact(n) {
  if (n == 5) {
   return 1;
 } else {
   console.log("calculating fact")
   return n * fact (n-1);
 }
}

console.log(fact(process.argv[2]))

*/

var n = process.argv [2];
    r = 1;

for (var i = 1 ; i <= n ; i++) {
  console.log("fact", i-1, "was", r, "mult fact by", i);
  r *= i;       // ____________________r = (r * i)
}
console.log(r);
