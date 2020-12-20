[![hexlet-check](https://github.com/Alatr/frontend-project-lvl1/workflows/hexlet-check/badge.svg?branch=master)](https://github.com/Alatr/frontend-project-lvl1/actions?query=workflow%3Ahexlet-check)
[![Node CI](https://github.com/Alatr/frontend-project-lvl1/workflows/Node%20CI/badge.svg)](https://github.com/Alatr/frontend-project-lvl1/actions?query=workflow%3A%22Node+CI%22)
[![Maintainability](https://api.codeclimate.com/v1/badges/40307f92a1a58ff488d6/maintainability)](https://codeclimate.com/github/Alatr/frontend-project-lvl1/maintainability)
# Brain games

5 console games to train your mind, speed of thinking and memory.

**Table of Contents**

<!-- toc -->

- [Install](#install)
- [Game types list](#game-types-list)
	- [Parity game ](#parity-game)
		- [usage](#parity-game-usage)
		- [asciinema](#parity-game-asciinema)
	- [Сalculator](#calculator-game)
		- [usage](#calculator-game-usage)
		- [asciinema](#calculator-game-asciinema)
	- [Greatest common divisor ](#gcd-game)
		- [usage](#gcd-game-usage)
		- [asciinema](#gcd-game-asciinema)
	- [Arithmetic progression](#arithmetic-progression-game)
		- [usage](#arithmetic-progression-game-usage)
		- [asciinema](#arithmetic-progression-game-asciinema)
	- [Is it a prime number?](#prime-game)
		- [usage](#prime-game-usage)
		- [asciinema](#prime-game-asciinema)

<!-- tocstop -->

## Install

```
make install
```
### Game types list
Brain games includes 5 types game.
* Parity check
* Сalculator
* Greatest common divisor
* Arithmetic progression
* Is it a prime number?

#### parity game
It is necessary to implement the game "Parity check". The essence of the game is as follows: a random number is shown to the user. And he needs to answer yes if the number is even, or no if odd:
```
Welcome to the Brain Games!
May I have your name? Bill
Hello, Bill!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: yes
```
In case the user gives an incorrect answer.
> 'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, Bill!

###### parity game usage
In terminal
```
make brain-even
```

###### parity game asciinema
[![asciicast](https://asciinema.org/a/l40Lrk3midkLmNEOmgZErGnY7.svg)](https://asciinema.org/a/l40Lrk3midkLmNEOmgZErGnY7)




#### calculator game
It is necessary to implement the game "Calculator". The essence of the game is as follows: the user is shown a random mathematical expression, for example 35 + 16, which must be calculated and written down the correct answer.

> Welcome to the Brain Games!
> May I have your name? Sam
> Hello, Sam!
> What is the result of the expression?
> Question: 4 + 10
> Your answer: 14
> Correct!
> Question: 25 - 11
> Your answer: 14
> Correct!
> Question: 25 * 7
> Your answer: 175
> Correct!
> Congratulations, Sam!

In case the user gives an incorrect answer.
> Question: 25 * 7
> Your answer: 145
> '145' is wrong answer ;(. Correct answer was '175'.
> Let's try again, Sam!

###### calculator game usage
In terminal
```
make brain-calc
```
###### calculator game asciinema
[![asciicast](https://asciinema.org/a/l40Lrk3midkLmNEOmgZErGnY7.svg)](https://asciinema.org/a/l40Lrk3midkLmNEOmgZErGnY7)


#### gcd game

It is necessary to implement the game "greatest common divisor (GCD)". The essence of the game is as follows: the user is shown two random numbers, for example, 25 50. The user must calculate and enter the greatest common divisor of these numbers.

> Welcome to the Brain Games!
> May I have your name? Sam
> Hello, Sam!
> Find the greatest common divisor of given numbers.
> Question: 25 50
> Your answer: 25
> Correct!
> Question: 100 52
> Your answer: 4
> Correct!
> Question: 3 9
> Your answer: 3
> Correct!
> Congratulations, Sam!

In case the user gives an incorrect answer.
> Question: 25 50
> Your answer: 1
> '1' is wrong answer ;(. Correct answer was '25'.
> Let's try again, Sam!

###### gcd game usage
In terminal
```
make brain-gcd
```
###### gcd game asciinema
[![asciicast](https://asciinema.org/a/l40Lrk3midkLmNEOmgZErGnY7.svg)](https://asciinema.org/a/l40Lrk3midkLmNEOmgZErGnY7)




#### arithmetic progression game
The game shows the player a series of numbers, forming an arithmetic progression, replacing any of the numbers with two dots. The player must determine this number.
> Welcome to the Brain Games!
> May I have your name? Sam
> Hello, Sam!
> What number is missing in the progression?
> Question: 5 7 9 11 13 .. 17 19 21 23
> Your answer: 15
> Correct!
> Question: 2 5 8 .. 14 17 20 23 26 29
> Your answer: 11
> Correct!
> Question: 14 19 24 29 34 39 44 49 54 ..
> Your answer: 59
> Correct!
> Congratulations, Sam!

In case the user gives an incorrect answer.

> Question: 5 7 9 11 13 .. 17 19 21 23
> Your answer: 1
> '1' is wrong answer ;(. Correct answer was '15'.
> Let's try again, Sam!

###### arithmetic progression usage
In terminal
```
make brain-progression
```
###### arithmetic progression asciinema
[![asciicast](https://asciinema.org/a/l40Lrk3midkLmNEOmgZErGnY7.svg)](https://asciinema.org/a/l40Lrk3midkLmNEOmgZErGnY7)





#### prime game
Player need to check is it a prime number.

> Welcome to the Brain Games!
> May I have your name? Sam
> Hello, Sam!
> Answer "yes" if given number is prime. Otherwise answer "no".
> Question: 7
> Your answer: yes
> Correct!


###### prime game usage
In terminal
```
make brain-prime
```
###### prime game asciinema
[![asciicast](https://asciinema.org/a/l40Lrk3midkLmNEOmgZErGnY7.svg)](https://asciinema.org/a/l40Lrk3midkLmNEOmgZErGnY7)



