canvas = document.getElementById("marsCanvas");
ctx=canvas.getContext("2d");
roverWidth=100;
roverHeight=90;
roverImg="rover.png";
roverX=10;
roverY=10;
fuel=15;
images=["img-1.jpeg","img-2.jpeg","img-3.jpg","img-4.jpg","mars.jpg"];
random_num=Math.floor(Math.random()*5);
backgroundImg=images[random_num];

function loaded(){
    backgroundImgTag=new Image();
    console.log("Loaded succesfuly.")
    backgroundImgTag.onload=uploadBg();
    backgroundImgTag.src=backgroundImg;

    roverImgTag=new Image();
    roverImgTag.onload=uploadRover();
    roverImgTag.src=roverImg;
}
function uploadBg(){
    ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(roverImgTag,roverX,roverY,roverWidth,roverHeight);
}

window.addEventListener("keydown",my_Keydown);

function my_Keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed == 37){
        fuel=fuel-5;
        console.log("LEFT")
        Left();
    }else if(keypressed == 38){
        fuel=fuel-5;
        console.log("UP");
        Up();
    }else if(keypressed == 39){
        fuel=fuel-5;
        console.log("RIGHT");
        Right();
    }else if(keypressed == 40){
        fuel=fuel-5;
        console.log("DOWN");
        Down();
    }else if(keypressed == 32){
        fuel=fuel+100;
        console.log("REFUELLING ="+fuel);
    }
    console.log(keypressed);
}
function Left(){
    if(roverX >= 0){
        if(fuel<10){
            roverX= roverX-0.5;
            console.log("When Left is pressed,X= " + roverX + "Y = " + roverY);
            uploadBg();
            uploadRover();
        }else{
            roverX= roverX-10;
            console.log("When Up is pressed,X= " + roverX + "Y = " + roverY);
            uploadBg();
            uploadRover();
        }
    }
}
function Up(){
    if(roverY >= 0){
        if(fuel<10){
            roverY= roverY-1;
            console.log("When Left is pressed,X= " + roverX + "Y = " + roverY);
            uploadBg();
            uploadRover();
        }else{
            roverY= roverY-10;
            console.log("When Up is pressed,X= " + roverX + "Y = " + roverY);
            uploadBg();
            uploadRover();
        }
    }
}
function Right(){
    if(roverX <= 700){
        if(fuel<10){
            roverX= roverX+1;
            console.log("When Left is pressed,X= " + roverX + "Y = " + roverY);
            uploadBg();
            uploadRover();
        }else{
            roverX= roverX+10;
            console.log("When Up is pressed,X= " + roverX + "Y = " + roverY);
            uploadBg();
            uploadRover();
        }
    }
}
function Down(){
    if(roverY <= 500){
        if(fuel<10){
            roverY= roverY+1;
            console.log("When Left is pressed,X= " + roverX + "Y = " + roverY);
            uploadBg();
            uploadRover();
        }else{
            roverY= roverY+10;
            console.log("When Up is pressed,X= " + roverX + "Y = " + roverY);
            uploadBg();
            uploadRover();
        }
    }
}

//Remove barrier and add warning. 
//Add fuel variable and when fuel low speed=3.