var sideOfTriangle=["side1","side2","side3"];
function getResult(){
    var side1= parseFloat(document.getElementById('side1').value);
    var side2= parseFloat(document.getElementById('side2').value);
    var side3= parseFloat(document.getElementById('side3').value);
if(side1 === side2 && side2 === side3)
{
    alert("this is an Equilateral triangle");
    window.location.href="equilateral.html";
}
else if(side1===side2 || side2===side3){
    alert("This is an isoceles Triangle");
    window.location.href="isosceles.html";
}
else if((side1+side2)<= side3 || (side1+side3)<=side2 || (side2+side3)<= side1){
    alert("This is NOT a Triangle");
}
else{
    alert("This is scalene");
    window.location.href="scalene.html";
}

}