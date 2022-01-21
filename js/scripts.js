function beepBoop(input) {
  let inputNum = input;
  let outputArray = [];
  for (i = 0; i <= input; i++) {
    if (inputNum) {
      outputArray.push(i)
    }
  }
  return outputArray
}