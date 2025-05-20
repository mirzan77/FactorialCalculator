function calculateFactorial() {
    const num = parseInt(document.getElementById('numberInput').value);
    const method = document.getElementById('method').value;
    const output = document.getElementById('output');
  
    if (isNaN(num) || num < 0) {
      output.textContent = 'Please enter a valid non-negative integer.';
      return;
    }
  
    let result;
    if (method === 'iterative') {
      result = factorialIterative(num);
    } else {
      result = factorialRecursive(num);
    }
  
    output.textContent = `The ${method} factorial of ${num} is ${result}`;
  }
  
  function factorialIterative(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }
  
  function factorialRecursive(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
  }
  