

<!-- Start ../../sassmin/functions/_utils.scss -->

##`strip($value)`

### Description ###

Remove units or non-string elements immediately followed by numbers.

### Parameters: ###

2. __$value__ : *number[unit]* The input with or without unit to be stripped.

### Usage ###
  Can be called anywhere as a function in your sass. Useful when you need to strip off stuff that are immediately followed after a number.

### Examples ###

    .example1 {
      font-size: strip(2) // -> font-size: 2;
    }

    .example2 {
      border: strip(2px) // -> font-size: 2;
    }

    .example3 {
      border: strip(3something) // -> font-size: 3;
    }

<!-- End ../../sassmin/functions/_utils.scss -->

