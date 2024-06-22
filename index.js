let hi=document.getElementById("hid");
let hs=Math.random()*6+1;
let c=0;
if(hs<=3)
{
    hi.innerHTML="Player 1 Start";
    c=0;
}
else{
    c=1;
    hi.innerHTML="Player 2 start";
}
let bs=document.getElementById('btn3');
bs.style.display="none"
document.getElementById('diss').style.display="none";
let c1=0;
let c2=0;
let r1=0;
let r2=0;
let bst1=document.getElementById("btn1");
bst1.addEventListener("click",toggle1);
let bst2=document.getElementById("btn2");
bst2.addEventListener("click",toggle2);

function toggle1(){
    if(c!=1){
    bst2
let a=document.getElementById("img1");
 r1=Math.floor(Math.random()*6+1);
let a1="dice-"+r1+".png";
a.setAttribute("src",a1);
check();
hi.innerHTML="Player 2's Turn";
ba(btn1);
c=1;
}
}

function toggle2()
{
    if(c!=0){
    let b=document.getElementById("img2");
     r2=Math.floor(Math.random()*6+1);
let a2="dice-"+r2+".png";
b.setAttribute("src",a2);
check();
hi.innerHTML="Player 1's Turn";
ba(btn2);
c=0;
}
}
function check(){
if(r1>r2){
   
    c1=c1+1;
}
else if(r1<r2){
    c2=c2+1;
}
else{
    c1=c1+1;
    c2=c2+1;
}
if(c1+c2==10){
if(c1>c2)
{
c1=c1-c2;
document.getElementById('diss').innerHTML="PLAYER 1 IS THE WINNER BY "+c1+" POINTS";
}
else if(c2>c1)
{
c2=c2-c1;
document.getElementById('diss').innerHTML="PLAYER 2 IS THE WINNER BY "+c2+" POINTS";
}
else{
document.getElementById('diss').innerHTML="MATCH DRAW";
}
document.getElementById('diss').style.display="block";
document.getElementById('btn3').style.display="block";
bs.addEventListener("click",fn);
}    
} 
function fn()
{ 
ba(bs);
c1=0;c2=0;
bs.style.display='none';
document.getElementById('diss').style.display="none";
let hs=Math.random()*6+1;
if(hs<=3)
{
    hi.innerHTML="Player 1 Start";
}
else{
    hi.innerHTML="Player 2 start";
}
}
function ba(key)
{
key.classList.add("press");
setTimeout(function(){
key.classList.remove("press");
},100);
}