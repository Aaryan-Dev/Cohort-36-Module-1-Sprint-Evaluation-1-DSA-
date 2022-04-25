// Given an array of size n. Array elements are in the range from 1 to n. In the given array, one number from set {1, 2, …n} is missing and one number occurs twice in the array. Find these two numbers.

// Print the missing one first and then the repeated one with a space character in between them.


function repeatedAndMissing(n,arr){
    
    bag = "";
   for(i=1; i<=n; i++){
   count = 0;
       for(j=0; j<arr.length; j++){
     if(i===arr[j]){
          count++
     }
   }
   
   if(count===0){
      var l = i;
   }else if(count===2){
       var k = i;
   }
   }
   bag = l +" "+  k; 
   console.log(bag);
   }
       