var canvas = new fabric.Canvas('myCanvas')

playery=10;
playerx=10;

player_object="";
block_object="";

blockwidth=30;
blockheight=30;

function updateplayer(){
    fabric.Image.fromURL("unnamed.png",function(Img){
player_object=Img;
player_object.scaleToHeight(150)
player_object.scaleToWidth(140)
player_object.set({
    top:playery,
    left:playerx
})
canvas.add(player_object)
    });

}

function newimage(get_image){
    fabric.Image.fromURL(get_image,function(Img){
block_object=Img;
block_object.scaleToHeight(blockheight)
block_object.scaleToWidth(blockwidth)
block_object.set({
    top:playery,
    left:playerx
})
canvas.add(block_object)
    });

}

window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    var keypressed=e.keyCode
    
    if(e.shiftKey==true&&keypressed=="80"){
        console.log(keypressed)
blockheight=blockheight +10;
blockwidth=blockwidth +10;
document.getElementById("currentHeight").innerHTML=blockheight;
document.getElementById("currentWidth").innerHTML=blockwidth;
    }
    if(e.shiftKey==true&&keypressed=="77"){
        console.log(keypressed)
        blockheight=blockheight -10;
        blockwidth=blockwidth -10;
        document.getElementById("currentHeight").innerHTML=blockheight;
        document.getElementById("currentWidth").innerHTML=blockwidth;

            }
            if(keypressed=="38"){
                up()
                console.log("up")
            }

            if(keypressed=="40"){
                down()
                console.log("down")
            }
            if(keypressed=="37"){
                left()
                console.log("left")
            }
            if(keypressed=="39"){
                right()
                console.log("right")
            }
            
            if(keypressed=="84"){

                console.log("c")
                newimage("trunk.jpg")

            }
            if(keypressed=="68"){

                console.log("d")
                newimage("dark_green.png")

            }
            if(keypressed=="76"){

                console.log("l")
                newimage("light_green.png")

            }
            if(keypressed=="71"){

                console.log("g")
                newimage("ground.png")

            }
            if(keypressed=="87"){

                console.log("w")
                newimage("wall.jpg")

            }
            if(keypressed=="89"){

                console.log("y")
                newimage("yellow_wall.png")

            }
            if(keypressed=="82"){

                console.log("r")
                newimage("roof.jpg")

            }
            if(keypressed=="67"){

                console.log("c")
                newimage("cloud.jpg")

            }
            if(keypressed=="85"){

                console.log("u")
                newimage("unique.png")

            }

}
function up(){
    if(playery>=0)
    playery=playery-blockheight
    canvas.remove(player_object)
    updateplayer()
}
function down(){
    if(playery<=600)
    playery=playery+blockheight
    canvas.remove(player_object)
    updateplayer()
}
function left(){
    if(playerx>=0)
    playerx=playerx-blockwidth
    canvas.remove(player_object)
    updateplayer()
}
function right(){
    if(playerx<=1000)
    playerx=playerx+blockwidth
    canvas.remove(player_object)
    updateplayer()
}
