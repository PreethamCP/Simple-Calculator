let string = ""; //* Defining an empty string
let buttons = document.querySelectorAll(".button"); //* selects all values with class name button
Array.from(buttons).forEach((button) => {
  //* Makes an for values taken from button
  button.addEventListener("click", (e) => {
    //* When clicked the value gets stored or is elvaluated or cleared
    if (e.target.innerHTML == "=") {
      //* For = it elvaluates the value
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "AC") {
      //* For AC it send an empty string
      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
