//JavaScript > Lesson3 > Exercise6

//  Récupérer un nombre donné par l'utilisateur.
//  Si ce dernier est impair, comptez de 3 en 3 jusqu'à son cube,
//  si ce dernier est pair, comptez de 2 en 2 jusqu'à son cube.
//_____________________________________________________________________________




function cube (n) {
  if (n%2==0) {
    for ( var i = 0 ; i <= n * n * n ; i = i + 2 ) {
      console.log(i);
    }
  } else {
    for (var i = 0 ; i <= n * n * n ; i = i + 3 ) {
      console.log (i);
    }
  }
}
var n = process.argv[2];
cube (n);

/*--------------------------autre solution :

function count2 (end) {
  var j = 3;
  if (end % 2 == 0) {
  j = 2;
  }
  for (var i = 0; i <= end*end*end; i=i+j) {
    console.log(i);
  }
}

var n = process.argv[2];

count3(n);
-------------------------------------------*/
