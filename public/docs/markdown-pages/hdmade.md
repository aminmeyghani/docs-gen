

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

