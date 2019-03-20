# PrimeNumberGenetor

Angular project that to implement a prime number generator that
returns an ordered list of all prime numbers in a given range (inclusive of the endpoints).

## Usage

Enter a starting and ending number to generate all the prime number within this range.
Enter: 2-5(same with 5-2), output: 2,3,5. 
To click generated item to delete it  from list.

## folder structure

src/app/about: about page componenet to state the problem requirements.
src/app/generator: main generator component folder which has main HTML5 page, test cases and generator component.
src/app/generator/models: folder has interface PrimeNumberGenerator, UpdPrimeNumGenerator class and its own componenet test file.
src/app/: main app module with configured routing. 

## Install

Run `npm install` to install node_modules.
If still have troubles to start, delete package-lock.json and node_modules folder then run npm install agian.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests
The current test coverage: 100% Statements, 100% Branches, 100% Functions, 100% Lines.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run ` ng test --code-coverage` to generate test report

 

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).