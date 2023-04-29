## Exercise 1

> Create a program that asks the user to enter their name and their age. Print out a message that tells how many years they have to be 100 years old.

```
import 'dart:io'; 
  
void main() 
{ 
    print("Enter your name?");
    
    // Reading name 
    String? name = stdin.readLineSync();
    
    // Asking for age
    print("Enter your Age");
 
    // Scanning number
    int? age = int.parse(stdin.readLineSync()!);
    
    int age_left = 100 - age;
    
    print("Hello $name you have $age_left to be 100 years old"); 
}
```

## Exercise 2

> Ask the user for a number. Depending on whether the number is even or odd, print out an appropriate message to the user.

```
import 'dart:io'; 
  
void main() 
{ 
    print("Please Enter a number");
 
    // Scanning number
    int? number = int.parse(stdin.readLineSync()!);
    
    if(number % 2 == 0){ 
    	print("The $number is even"); 
    } else { 
   	print("The $number is odd");
    } 
}
```

## Exercise 3

> Take a list, say for example this one: ` a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]` and write a program that prints out all the elements of the list that are less than 5.

```
import 'dart:io'; 
  
void main() 
{ 
  List<int> a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
  for (int i in a){
    if(i<5){
    	print(i);
    }
  }
  
  // One liner
  // print([for (var i in a) if (i < 5) i]);
}
```

## Exercise 4

> Create a program that asks the user for a number and then prints out a list of all the divisors of that number.
**If you don’t know what a divisor is, it is a number that divides evenly into another number. For example, 13 is a divisor of 26 because 26 / 13 has no remainder.**

```
import 'dart:io'; 
  
void main() 
{ 
  // Asking for age
  print("Enter a number");
 
  // Scanning number
  int? number = int.parse(stdin.readLineSync()!);
  
  for(int i=1; i<= number; i++){
  	if(number % i == 0){
  		print(i);
  	}
  }
}
```
