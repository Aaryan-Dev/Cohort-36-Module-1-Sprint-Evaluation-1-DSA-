// You are given a string of odd length, such that the length of the string is stored in a variable with the nameN

// The string is stored in a variable with the namestr

// You have to create a modified string, such that, the second half of the string is pushed to the front, while the first half of the stringis pushed to the back, keeping the middle character at the same position

// For example, consider the value stored instr = varun, andN = 5

// Then, in the modified string, the second half, whichun, is brought to the front, while the first half,va, keeping the middle character at the same position

// Therefore, the new modified string isunrva

function stringModification2(N,str) {
  
    let bag1 = ""; 
    let bag2 = ""; 
    let bag = "";
   for(i=0; i<=(N-3)/2; i++){
       bag2 = bag2 + str[i];
   }
   for(j=(N+1)/2; j<N; j++){
       bag1 = bag1 + str[j]; 
   }
   
   bag = bag1 + str[(N-1)/2] + bag2;
   console.log(bag);
}
