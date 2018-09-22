module.exports = function solveEquation(equation) {
  equation = equation.split(' ').join('');
  var a = equation.split('*x^2')[0];
  var b = (equation.split('*x^2')[1]).split('*x')[0];
  var c = (equation.split('*x^2')[1]).split('*x')[1];

  var D = Math.pow(b,2) - 4*a*c;
  var x=[];
  x[0]= Math.round((-b+Math.sqrt(D))/(2*a));
  x[1]= Math.round((-b-Math.sqrt(D))/(2*a));
  x.sort(function(a,b){
    return a-b;
  });

  return x;
}
