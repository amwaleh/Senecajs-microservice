module.exports = function (options){

   var seneca = this;
   // Define function add and add sum to it
   seneca.add({role:'process', cmd:'sum'}, sum);

// declare the sum function
   function sum (args, done){
     var numbers = args.numbers;
     var result = numbers.reduce( function(a,b){
       return a + b ;
     },0);

     done(null , {result:result});
   }
}
