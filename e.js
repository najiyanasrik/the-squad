function calculate (){
    let phy=document.getElementById("phy").value;
    chem=document.getElementById("chem").value;
    math=document.getElementById("math").value;
    bio=document.getElementById("bio").value;
}
let sum =
parseFloat(phy) + parseFloat (chem) + parseFloat (math) + parseFloat (bio);

document.getElementById("demo").innerHTML = 'total mark is =${sum}';
let percentage = (sum / 400) *100;

document.getAnimations("demo1").innerHTML = 'percentage is =$ {percentage}%';

if(percentage>=100){
   Document.getElementById("demo2").innerHTML='excellent';
}else if(percentage>=80){
    document.getElementById("demo2").innerHTML='very good work';
}else if(percentage>=60){
    document.getElementById("demo2").innerHTML='pass';
}else if(percentage>=40){
    document.getElementById("demo2").innerHTML='Need hard work';
}else {
    document.getElementById("demo2").innerHTML='fail';
}
