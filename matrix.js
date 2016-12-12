/*

Créer une matrice diagonale avec une double boucle for

Comme ceci :

 1 0 0 0 0
 0 1 0 0 0
 0 0 1 0 0
 0 0 0 1 0
 0 0 0 0 1

----

boucle n fois : t+ = 0;
end boucle

*/

var n = process.argv[2];
var t = "";

for (var j = 0 ; j < n ; j++) {
  t = "";
  for (var i = 0; i < n ; i++){
    if ( i == j ){
      t += "1";
    }
    else {
      t += "0"
    }
  }
console.log (t);
}
