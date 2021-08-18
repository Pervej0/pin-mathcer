// Random pin generate====
let DeletePin = document.getElementById("typed-pin").value;
let generatedPin = 0;

function randomPin() {
  let pin = Math.round(Math.random() * 1000000);
  let stringPin = pin + "";
  if (stringPin.length == 6) {
    return pin;
  } else {
    console.log("smaller than 6");
    return randomPin();
  }
}

// click event function define for generate pin====

function generatePin(event) {
  let generateInput = event.previousSibling.previousSibling;
  let getPin = randomPin();
  generateInput.value = getPin;
  generatedPin = getPin;
  console.log(getPin);
}

// matchpin function to match with generated pin-----

function submit() {
  let typedPin = document.getElementById("typed-pin").value;
  if (generatedPin > 99999)
    if (typedPin == generatedPin) {
      document.getElementById("success").style.display = "block";
      document.getElementById("fail").style.display = "none";
      generatedPin = 0;
    } else {
      document.getElementById("success").style.display = "none";
      document.getElementById("fail").style.display = "block";
    }
  else {
    alert("Please generate a new pin");
  }
  document.getElementById("typed-pin").value = "";
}

// delete one by one typed pin ----
function deletePin() {
  let stringPins = DeletePin.split("");
  console.log(stringPins);
  stringPins.pop();
  console.log(stringPins);
  // console.log(updatedPin);
  console.log("count");
}

// typed pin in calculator===
function typed(elm) {
  let convertNumbers = parseInt(elm.innerText);
  // console.log(convertNumbers);
  if (elm.innerText == "C") {
    return (document.getElementById("typed-pin").value = "");
  } else if (isNaN(convertNumbers) == false) {
    return (document.getElementById("typed-pin").value += convertNumbers);
  } else if (elm.innerText == "<") {
    deletePin();
  }
}

// click event function for submit pin====

document.getElementById("key-pad").addEventListener("click", function (event) {
  let element = event.target;
  let converTing = parseInt(element.innerText);
  typed(element);
});
