var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg',function(Img)
    {
        block_img_obj=Img;
        block_img_obj.scaleToWidth(700);
        block_img_obj.scaleToHeight(510);
        block_img_obj.set({
            top:0,
            left:0
        });
        canvas.add(block_img_obj);
    });
}

function playSound(){
	x.play();
}
