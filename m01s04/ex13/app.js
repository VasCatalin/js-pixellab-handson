var globalVariable = 'Ma aflu in global';

console.log(localVariable);

if (true) {
  var localVariable = 'Ma aflu in local';
  var globalVariableVariable = 'Nu ma aflu in global';

  console.log(globalVariable);
  console.log(localVariable);
}

console.log(localVariable);
