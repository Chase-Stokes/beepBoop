function beepBoop(input, name) {
  let outputArray = [];
  for (i = 0; i <= input; i++) {
    let iString = i.toString();
    if (iString.includes("69") || iString.includes("420")) {
      outputArray.push(" haha funny number")
    } else if (iString.includes("3")) {
      outputArray.push(" " +name + ", wont you be my neighbor ")
    } else if (iString.includes("2")) {
      outputArray.push(" boop ");
    } else if (iString.includes("1")) {
      outputArray.push(" beep");
    } else {
      outputArray.push(" " + i);
    }
  }
  return outputArray
}

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    let input = $("#number").val();
    let name = $("#name").val();
    let output = beepBoop(input, name);
    $(".resultBox").show();
    $("#output").text(output);
  })
})

