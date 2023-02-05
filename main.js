var canvas= new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;

var block_image_object="";
var player_object="";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img) {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    
}) ;
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img) {
        block_object_image=Img;
        block_object_image.scaleToWidth(150);
        block_object_image.scaleToHeight(140);
        block_object_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object_image);
    
}) ;
}