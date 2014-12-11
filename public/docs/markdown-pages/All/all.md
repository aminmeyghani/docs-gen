

<!-- Start ../src/action.js -->

## Action Wrapper ##

- Author: Amin Meyghani
- Date: 11/4/2014
- Description: The Action Wrapper

## program

##`Action Wrapper`

### Description ###

Simple wrapper for the commander program object. Acts as an API and can be used for creating custom actions.

### Methods: ###

1. __add__ : Used to add/register tasks/actions.

## add()

##`add(options, callback)`

### Description ###

Adds/creates tasks on the commander module/program.

### Parameters: ###
1. __options__ : *object* The configuration object that contains the following:

  - name: *string* (required): The name of the task/action/keyword
  - arg: *string* The argument that refers to the the value that is immediately followed by the keyword/action.
  - params: *string* The argument that refers to the array of arguments followed by the `arg` argument.
  - description: *string* The action/task description.
2. __callback__ : *function* The function that does the heavy lifting. This callback takes three parameters:

  - [data]: the first parameter references the tasks/program object.
  - [arg]: the second parameter refers to the argument that is followed by the keyword/task name.
  - [params]: the third argument references the array of arguments passed after the `arg`.

### Usage ###
  You can use the add method to register tasks or commands with a keyword and a parameter. Then pass it a callback to do whatever you like to do.

### Examples ###

  Example1: Creating/adding a command that prints "Salute [name]" given a string

    var action = require("./action");
    action.add({name: "hello", arg: "name"}, function(d, name) {
    	console.log("Salute " + name);
    });

    use: hdstream hello amino -> Salute amino

   Example 2: Create/add a command/action that prints a list of names, and name it helloall

    var action = require("./action");
    action.add({name: "helloall", arg: "dummy", params: "names"}, function(d, what, nms) {
    nms.forEach(function(n) {
    	console.log("hello " + n);
    });

    // note: we need the dummy placeholder for the correct parsing of the parameters. Limitation of the underlying module.

    use: hdstream helloall x n1 n2 n3 //-> hello n1 \n hello n2 \n hello n3

<!-- End ../src/action.js -->




<!-- Start ../src/actions/capture/capture.js -->

# actions/tester

- Author: Amin Meyghani
- Date: 10/12/2014
- Description: Tester Action

## jf

## Modules

- __jsonfile__: For reading json file.
- __inquirer__: Creates friendly command line interface input.
- __hdlogger__: helper for printing help message (internal).
- __snap__: Handles taking screenshots.

<!-- End ../src/actions/capture/capture.js -->




<!-- Start ../src/actions/capture/snap.js -->

# actions/capture/snap

- Author: Amin Meyghani
- Date: 10/12/2014
- Description: Low level implementation for taking snapshots.

## Spooky

## Modules

- __spooky__: Driver for casperjs inside the Node env.

<!-- End ../src/actions/capture/snap.js -->




<!-- Start ../src/actions/hello.js -->

<!-- End ../src/actions/hello.js -->




<!-- Start ../src/actions/scaffold.js -->

<!-- End ../src/actions/scaffold.js -->




<!-- Start ../src/actions/serve.js -->

## actions/serve ##

- Author: Amin Meyghani
- Date: 11/4/2014
- Description: Responsible for starting a simple static http server.

##`run`

### Description ###

Runs the action.

### Params: ###

1. __questions__ : Questions configuration used to ask user input.

## http

hint:
	current directory: whereever it is you are in the terminal currently.
	directory from which the code is running from: node_modules/hdmade/src/actions

<!-- End ../src/actions/serve.js -->




<!-- Start ../src/actions/theme.js -->

## actions/theme ##

- Author: Amin Meyghani
- Date: 11/4/2014
- Description: Responsible for scaffolding themes.

## inquirer

##`run`

### Description ###

Runs the action.

### Params: ###

1. __questions__ : Questions configuration used to ask user input.

<!-- End ../src/actions/theme.js -->




<!-- Start ../src/config.js -->

## pkg

Application Settings

<!-- End ../src/config.js -->




<!-- Start ../src/hdmade.js -->

# HD|Stream-Cli v 0.2.0

- Author: Amin Meyghani
- Date: 11/3/2014
- Description: The HDStream-cli

## __base

## Modules

- __fs-extra__: standard file system operation with addition to the built-in fs.
- __commander__: deals with reading command line arguments.
- __hdlogger__: helper for printing help message (internal).
- __config__: The cli configuration and settings (internal).
- __serve__: The server action/task (internal).

## globals

- ____base__: The path to the main file. "absolutepath/src/"

##`hdstream serve`

### Description ###

Used to serve static files with a basic http server

### Usage ###
  Simply do `hdstream serve` and then you will be prompted to put in values:
  - first: The port number: use a value between 8000 and 9000
  - second: The directory to serve the files from. You could just drag and drop the folder that you want to serve and hit enter.

##`hdstream s <directory> -p <port>`

### Description ###

Used to serve static files with a basic http server

### Parameters: ###

1. __directory__ : *string* (required) The directory to be served.
2. __port__ : *int* The port number. Default: 8228

### Usage ###
  Just do `hdstream s path/to/serve -p portvalue`

### Examples ###

  Example 1: Serve current folder at 9000

    hdstream s . -p 9000

  Example 2: Serve ./main/public at 9000

    hdstream s ./main/public -p 9000

##`hdstream theme`

### Description ###

Used for creating starter themes for wordpress or drupal.

### Usage ###
  Just do `hdstream theme` and it will take you through the process.

##`hdstream test`

### Description ###

Used for responsive/cross-browser testing

### Usage ###
  Just do `hdstream test` and then the prompt will take you through the process:

		0. Select the type of test that you want to do
		1. Specify the base url of the site: eg. http://markle.org
		2. Specify the end paths separated by commas: about.php, impact.php
		3. Specify the viewports that you want to take the snapshots of separated by commas: 200, 300, 400

##`hdstream t -k <test type> -s <settings-file>`

### Description ###

Used to do responsive or cross browser testing without prompt

### Parameters: ###

1. __k__ : *string* (required) Type of test. Possible options are: responsive(r), cross_browser(c)
2. __s__ : *string* The path to the settings.json file that has the options. Below is an example of the json settings file:

		{
			"baseUrl" : "http://markle.local.com",
			"paths": ["mkl-impact.php", "mkl-about.php"],
			"viewports" : [400, 500]
		}

##`hdstream help`

### Description ###

Prints a summary of options and commands that are available.

### Usage ###
  Just do `hdstream help`

##`hdstream docs`

### Description ###

Prints a more detailed documentation for all the tasks and options that are available.

### Usage ###
  Just do `hdstream docs`

##`hdstream docsfor <command-name>`

### Description ###

Prints the docs for a given command.

### Usage ###
  Just do `hdstream docsfor nameofcommand`

##`hdstream scaffold <arg> <params...>`

### Description ###

Example for a task that uses all the possible options and keywords. You can refer to this as an example to remember what the possible options are.

### Usage ###
  Just do `hdstream scaffold`

##`hdstream invalidcommand`

### Description ###

Catches invalid commands. Prints help if the command entered is not valid.

<!-- End ../src/hdmade.js -->




<!-- Start ../src/lib/hdlogger.js -->

- Author: Amin Meyghani
	- Date: 09/29/2014
	- Description: Helper for logging to the console.

	### Modules ###
- __colors__: add colors to the console output.
- __chalk__: pretty printing to the console.

<!-- End ../src/lib/hdlogger.js -->




<!-- Start ../src/lib/hdserver.js -->

Author: Amin Meyghani
	Date: 09/30/2014
	Description: 
		Simple web server for running tests or taking screenshots.

Useful for logging information:
			server.address()
			server.address().address
			server.address().port

<!-- End ../src/lib/hdserver.js -->

