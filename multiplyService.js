var seneca = require('seneca')();
seneca.use('./process.js');
// define the array to be multiplied 
seneca.act({role:'process', cmd:'multiply', numbers:[3,4,6]}, function(err, result){
  console.log (result);
})
