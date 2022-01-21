function beepBoop(input) {
  let outputArray = [];
  for (i = 0; i <= input; i++) {
    let iString = i.toString();
    if (iString.includes("2")) {
      outputArray.push("boop");
    } else if (iString.includes("1")) {
      outputArray.push("beep");
    } else {
      outputArray.push(i);
    }
  }
  return outputArray
}

