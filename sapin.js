var n = process.argv[2];
var t = "";

for (var j = 0 ; j < n ; j++) {
  for (var i = 0; i < n ; i++){
    if ( i == j ){
      t += "*";
    }
  }
  console.log (t);
}

/*__________________autre soluce :

var n = process.argv[2];

for (var i = 0; i < n ; i++){
 s += "*";
}

ou

function sap1 (end) {
  for (var i = 0; i < end; i++){
  s+= "*";
  console.log(s);
  }
}
sap1(n)

______________________________*/
