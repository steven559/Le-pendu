var tab=
    [
        "michelle",


        "tablette",
        "carte",
        "chaise",
        "planche",
    ];
var tabm=[


    "telephone",
    "lunette",
    "android",


];

var tabd=[
    "ordinateur",
    "hydrophobe",
    "Ornithorynque",




];




var player=[


];
var essaie=0;
var chance=9;
var normal="normal";

var rand= tab[Math.floor(Math.random()*tab.length)];
console.log(rand);

var but=document.createElement("button");
but.innerHTML="valider";
document.body.appendChild(but);
rand.id='mot';

var t=document.getElementById("tex");
but.id="bt";

var b=document.createElement("button");
b.innerHTML="reset";
document.body.appendChild(b);

var hard=document.createElement("button");
hard.innerHTML="hard";
document.body.appendChild(hard);

var medium=document.createElement("button");
medium.innerHTML="medium";
document.body.appendChild(medium);



for(var i = 0;i <=rand.length-1 ; i++) {
    var sp = document.createElement("span");
document.getElementById('le').appendChild(sp).innerHTML="_";
sp.id="l"+[i];
    var allsp =document.getElementsByTagName("span");
sp.style.fontSize="40px;";
sp.style.border="2px solid red";
sp.style.padding="0% 2% 2% 2%";

}
t.onclick=function(){








};
but.onclick=function(){
   if (!triche()) {


       console.log(but);
       console.log(t);

       player.push(t.value);


       var test = 0;

       for (var i = 0; i < rand.length; i++) {


           if (t.value == rand[i] || t.length >= 2) {
               document.getElementById("l" + i).innerHTML = t.value;
               test = test + 1;
               essaie++;
               document.getElementById("diffi").style.visibility = 'hidden';

           }


       }


       if (essaie === rand.length) {
           alert("tu a gagne");
           dede();
       }


       if (test == 0) {
           draw(chance);

           document.getElementById("vie").innerHTML = "il te reste" + " " + chance-- + " " + "chance";
           document.getElementById("vie").style.visibility = "visible";
           document.getElementById("diffi").style.visibility = 'hidden';


       }
       if (chance == 0) {
           alert("Game Over" + " " + "le mot étais" + " " + rand);
           dede();
       }


   }
};








function dede() {
    document.getElementById("diffi").style.visibility='hidden';
hard.style.display='inline-block';
medium.style.display='inline-block';
        rand = tab[Math.floor(Math.random() * tab.length)];
        console.log(rand);
        chance = 9;
        player=[];
    document.getElementById("canvas").width="500";
    document.getElementById("canvas").heigth="600";

document.getElementById("le").innerHTML="";
    for (var i = 0; i <= rand.length -1 ; i++) {
        sp = document.createElement("span");
        document.getElementById('le').appendChild(sp).innerHTML="_";
        sp.id="l"+[i];
        sp.style.fontSize="40px;";
        sp.style.border="2px solid red";
        sp.style.padding="0% 2% 2% 2%";
     essaie=0;
    }

    document.getElementById("vie").style.visibility="hidden";
}
b.onclick=function(){

  dede();


};



function moyen() {
    medium.style.display='none';
   hard.style.display="none";
    rand = tabm[Math.floor(Math.random() * tabm.length)];
    console.log(rand);
    chance = 9;
     normal="normal";
    document.getElementById("le").innerHTML="";
    for (var i = 0; i <= rand.length -1 ; i++) {
        sp = document.createElement("span");
        document.getElementById('le').appendChild(sp).innerHTML="_";
        sp.id="l"+[i];
        sp.style.fontSize="40px;";
        sp.style.border="2px solid red";
        sp.style.padding="0% 2% 2% 2%";
        essaie=0;




    }

    document.getElementById("vie").style.visibility="hidden";
}

medium.onclick=function(){
    document.getElementById("diffi").innerHTML="la difficulté et passer en medium";
    moyen();

};

;

function dur() {
    hard.style.display="none";
medium.style.display='none';
    rand = tabd[Math.floor(Math.random() * tabd.length)];
    console.log(rand);
    chance = 9;

    document.getElementById("le").innerHTML="";
    for (var i = 0; i <= rand.length -1 ; i++) {
        sp = document.createElement("span");
        document.getElementById('le').appendChild(sp).innerHTML="_";
        sp.id="l"+[i];
        sp.style.fontSize="40px;";
        sp.style.border="2px solid red";
        sp.style.padding="0% 2% 2% 2%";
        essaie=0;

    }

    document.getElementById("vie").style.visibility="hidden";
}

hard.onclick=function(){
    document.getElementById("diffi").innerHTML="la difficulté et passer en hard";
    dur();
};

function draw(param1) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //premier rect
    if ( (param1 == 9)  ) {

        ctx.fillStyle = "rgb(200,0,0,1)";
        ctx.fillRect(50, 50, 10, 320);
    }


    // 2e rect
    if( param1 == 8){
        ctx.fillStyle = "rgb(200,0,0,1)";
        ctx.fillRect(50, 50, 140, 10);
    }

    //3e rect
    if (param1 == 7) {
        ctx.fillStyle = "rgb(200,0,0,1)";
        ctx.fillRect(180, 50, 10, 60);
        //tête
    }

    if (param1 == 6){
        ctx.translate(85, 90);
        ctx.arc(100, 60, 40, 0, 2 * Math.PI);
        ctx.stroke();


    }

    if (param1 == 5) {
        //torse
        ctx.fillStyle = "rgb(255, 153, 204)";
        ctx.stroke();
        ctx.fillRect(95, 100, 15, 80);
    }

    if (param1 == 4){
        //bras gauche
        ctx.translate(0, 0);
        ctx.rotate(45 * Math.PI / 160);
        ctx.fillRect(140, -10, 10, 60);
    }

    if (param1 == 3) {
        ctx.translate(170, -166);
        ctx.rotate(105 * Math.PI / 240);
        //jambe droite
        ctx.fillRect(140, -10, 10, 60);
    }

    if (param1 == 2) {
        //jambe Droite
        ctx.translate(55, -40);
        ctx.fillRect(140, -10, 10, 60);
    }

    if(param1==1){
    //jambe gauche
    ctx.rotate(85 * Math.PI / 160);
    ctx.translate(-110,-193);
    ctx.fillRect( 140, -10, 10, 60);
}

}

draw();
function triche() {
    for (var o=0;o<player.length;o++){
        if(t.value==player[o]){
            return true;

        }

    }
        }