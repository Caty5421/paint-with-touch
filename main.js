var mouse_event="empty";
var last_position_of_x;
var last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_the_line").value;
    mouse_event="mouseDown";
}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e){
    current_pos_x=e.clientX - canvas.offsetLeft;
    current_pos_y=e.clientY - canvas.offsetTop;
    if(mouse_event=="mouseDown"){
        ctx.beginPath(); 
        ctx.strokeStyle = color; 
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_pos_x,current_pos_y);
        ctx.stroke();

    }

    last_position_of_x=current_pos_x;

    last_position_of_y=current_pos_y;
}canvas.addEventListener("mouseup", my_mouseup);
 function my_mouseup(e) { mouseEvent = "mouseUP"; 
} canvas.addEventListener("mouseleave", my_mouseleave); 
function my_mouseleave(e) { mouseEvent = "mouseleave";
 }
 function clearArea()
  { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
 }