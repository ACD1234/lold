canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var MouseEvent="empty";
var last_postion_of_x, last_postion_of_y;
colour= "blue";
line_width= 1;

canvas.addEventListener("mousedown", My_mouse_down);
function My_mouse_down(e){
    MouseEvent= "mouse_down";
}

canvas.addEventListener("mousemove", My_mouse_move);
function My_mouse_move(e){
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if(MouseEvent == "mouse_down"){
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = line_width;
      
        ctx.arc(current_position_of_x,current_position_of_y,20,0,2*Math.PI);
        ctx.stroke();
    }
    last_postion_of_x = current_position_of_x;
    last_postion_of_y = current_position_of_y;
}
canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        MouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        MouseEvent = "mouseleave";
    }
