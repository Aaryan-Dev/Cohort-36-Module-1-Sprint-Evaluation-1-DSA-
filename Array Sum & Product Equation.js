// You are given an array stored in a variable with the namearr

// The size of the array is stored in a variable with the nameN

// You have to find the value of the equation5*x + 3*y,

// where x - sum of all elements in the array
// and y - product of all elements in the array
// For example, consider the value stored inN = 4, andarr = [1 2 3 4]

// Therefore, the value ofx = 1 + 2 + 3 + 4 = 10, and the value ofy = 1*2*3*4 = 24

// Therefore, the value of the given equation =5*x + 3*y = 5*10 + 3*24 = 50 + 72 = 122, which is the required answer


function sumAndProductEquation(N, arr) {
  
    let sum = 0;
    let product = 1;  
    for(i=0; i<arr.length; i++){
        sum = sum + arr[i];
        product = product*arr[i];
    }
    console.log(5*sum + 3*product);
  }
    