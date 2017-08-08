// factorials
function factorial(num){

  if(num <= 1){
    return 1;
  } else {
    return num * factorial(num - 1)
  }
}
document.write("factorial of 4", factorial(4),"<br />");
