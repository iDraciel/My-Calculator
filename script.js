
function calcNumbers(result){
  form.displayResult.value=form.displayResult.value+result;

}

function backspace(){
  var input_var=document.getElementById('input')
  var x= input_var.value;
  if(x.length > 0){
    x = x.substring(0,x.length-1);
    input_var.value = x;
  }
}
function percentage(){
  var input_var=document.getElementById('input')
  var x = input_var.value;
  x = x/100;
  input_var.value = x;
}



/*
//function for displaying values
function calcNumbers(val)
{
document.getElementById("input").value+=val
 }
 */
function solve()
{
let x = document.getElementById("input").value
let y = eval(x)
document.getElementById("input").value = y
}
//function for clearing the display
/*
function clr()
{
document.getElementById("input").value = ""
}
*/
