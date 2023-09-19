var globalVariable = 'Ma aflu in contextul global';

console.log(globalVariable);

function contextTest() {
  var localVariable = 'Ma aflu incontextul local';
  var globalVariable = 'Nu ma aflu in contextul global';

  console.log(globalVariable);
  console.log(localVariable);
  // console.log(noVariable);
}

contextTest();
