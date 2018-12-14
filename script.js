function getResult(){
    var side1= parseFloat(document.getElementById('side1').value);
    var side1= parseFloat(document.getElementById('side2').value);
    var side1= parseFloat(document.getElementById('side3').value);
if(side1===side2===side3){
    alert("this is an Equilateral triangle");
}
else if(side1===side2 || side2===side3){
    alert("This is an isoceles Triangle");
}
else if(side1!=side2 && side1!=side3 && side2!=side1 && side2!=side3 && side3!=side1 && side3!=side2){
    alert("This is scalene triangle")
}
else{
    alert("This is not a triangle");
}

}