class SmartCalculator { 

  constructor(initialValue) { 
    this.array = []; 
    this.array[0] = initialValue; 
    this.counter = 1; 

    SmartCalculator.prototype.toString = function SmartCalculatorToString() { 
          let stringForInputExpression = ''; 
          
      while ( this.array.lastIndexOf("^") != -1 ) { 
        this.array.splice( this.array.lastIndexOf("^") - 1 , 3, Math.pow( this.array[this.array.lastIndexOf("^") - 1], 
                                   this.array[this.array.lastIndexOf("^") + 1] ) ); 
          } 
      
      for (let i=0; i < this.array.length; i++) 
        stringForInputExpression = stringForInputExpression + this.array[i]; 
  
    return eval(stringForInputExpression); 
    } 
  } 

  add(number) { 
    this.array[this.counter++] = "+"; 
    this.array[this.counter++] = number; 
    
    return this; 
    } 
  
  subtract(number) { 
    this.array[this.counter++] = "-"; 
    this.array[this.counter++] = number; 
    
    return this;         
    } 

  multiply(number) { 
    this.array[this.counter++] = "*"; 
    this.array[this.counter++] = number; 
  
    return this; 
    } 

  devide(number) { 
    this.array[this.counter++] = "/"; 
    this.array[this.counter++] = number; 
    return this; 
    } 

  pow(number) { 
    this.array[this.counter++] = "^"; 
    this.array[this.counter++] = number; 
    
    return this; 
    } 
  }

module.exports = SmartCalculator;
