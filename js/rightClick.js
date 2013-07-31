document.addEventListener('contextmenu' , function () { myMenu()});
document.addEventListener('click' , function () { closeMyMenu()});

function closeMyMenu(){
    var contextMenu = document.getElementById('contextMenu');
    contextMenu.style.display='none';
}
function myMenu(){
    var polX = event.clientX,
        polY = event.clientY,

        contextMenu = document.getElementById('contextMenu');
    contextMenu.style.top=polY+"px";
    contextMenu.style.display='block';
    contextMenu.style.left=polX+"px";
    return false;


}