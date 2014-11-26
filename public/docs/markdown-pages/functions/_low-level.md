

<!-- Start ../../sassmin/functions/_low-level.scss -->

##`ø($value)`

### Description ###

Converts input to zero or zero[unit]

### Parameters: ###

2. __$value__ : *non-string or number* The value to be turned to zero or zero[units]. If the input has units, it will be carried over.

### Usage ###
  Can be called anywhere as a function in your sass.

### Examples ###

    .example1 {
      font-size: ø(2px) // -> font-size: 0px;
    }

    .example2 {
      border: ø(0) // -> font-size: 0;
    }

##`µ($value)`

### Description ###

Converts to one or one[unit]

### Parameters: ###

2. __$value__ : *non-string or number* The value to be turned to one or one[units]. If the input has units, it will be carried over.

### Usage ###
  Can be called anywhere as a function in your sass.

### Examples ###

    .example1 {
      font-size: µ(2) // -> font-size: 1;
    }

    .example2 {
      border: µ(2px) // -> font-size: 1px;
    }

<!-- End ../../sassmin/functions/_low-level.scss -->

