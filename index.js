var seneca = require ('seneca')();

// define the file that will be used
seneca.use('./process.js');

/* Call the function you want to use in the process.js file
JSON object is sent with role and cmd along with the arguments
`numbers`

*/
seneca.act({role:'process', cmd: 'sum', numbers: [1,2,3]}, function(err, result){
  console.log(result);
})
