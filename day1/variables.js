console.log("variables examples");
// Example demonstrating the difference between 'let' (block scoped) and 'var' (function scoped): 
function example() {
    var x = 10; // 'x' is accessible throughout the function 
    if (true) {
      var x = 20; // This re-declares 'x' within the if block, changing its value globally
      console.log(x); // Prints 20 
    }
    console.log(x); // Also prints 20 because 'x' is function scoped 
  }
  
  function exampleWithLet() {
    let y = 10; // 'y' is accessible only within this block
    if (true) {
      let y = 20; // This creates a new 'y' variable within the if block
      console.log(y); // Prints 20
    }
    console.log(y); // Prints 10, as the 'y' inside the if block is separate
  }
  
  example(); 
  exampleWithLet(); 