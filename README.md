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