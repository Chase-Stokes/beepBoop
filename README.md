# _Language Survey_

#### By _**Chase Stokes**_

#### _Mr Rodgers inspired looping practice_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JQuery_

## Description

_A Mr. Rodgers themed looping practice. It takes in a number and returns an array of numbers leading up to that number, swapping out specific numbers with words._

## Setup/Installation Requirements

* _Clone the project from [github.com/chase-stokes/beepBoop]_
* _Navigate to the directory in your terminal_
* _run the command "code ." in your terminal to open the file in vscode_
* _open the html by right clicking the html in your text-editor and click open live server to monitor changes in your preferred browser_

## Known Bugs

* _No Known Bugs_

## License

_MIT_

Copyright (c) _01/21/2022_ _Chase Stokes_

## Tests


Describe beepBoop()

Test: 
    It should take a number as an input of 0 and return 0 in an array
Code:
    const input="0"
    beepBoop(input)
Expected Output:
    [0]        

Test: 
    It should replace any 1s in the output array with the string "beep"
Code:
    const input="1"
    beepBoop(input)
Expected Output:
    [0, "beep"]        

Test: 
    It should replace any 2s in the output array with the string "boop"
Code:
    const input="2"
    beepBoop(input)
Expected Output:
    [0, "beep", "boop"]        

Test: 
    It should replace any 3s in the output array with the string "wont you be my neighbor"
Code:
    const input="3"
    beepBoop(input)
Expected Output:
    [0, "beep", "boop", "wont you be my neighbor"]        

Test: 
    It should replace 13 in the output array with the string "wont you be my neighbor" and not "beep"
Code:
    const input="13"
    beepBoop(input)
Expected Output:
    [0, "beep", "boop", "wont you be my neighbor", 4, 5, 6, 7, 8, 9, "beep", "beep", "boop", "wont you be my neighbor"]        

Test: 
    It should replace 21 in the output array with the string "boop" and not "beep"
Code:
    const input="21"
    beepBoop(input)
Expected Output:
    [0, 'beep', 'boop', 'wont you be my neighbor', 4, 5, 6, 7, 8, 9, 'beep', 'beep', 'boop', 'wont you be my neighbor', 'beep', 'beep', 'beep', 'beep', 'beep', 'beep', 'boop', 'boop']

Test: 
    It should add the users inputted name onto any "wont you be my neighbor"
Code:
    const input="3"
    const name="chase"
    beepBoop(input, name)
Expected Output:
    [0, "beep", "boop", "chase, wont you be my neighbor"]      

Test: 
    It should replace the meme numbers with the string "haha funny number"
Code:
    const input="69" / const input= 420
    const name="chase"
    beepBoop(input, name)
Expected Output 1:
    [0-68, "haha funny number"]      
Expected Output 2:
    [0-419, "haha funny number"]      